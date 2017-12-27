// 服务器

var https = require('https');
var fs = require('fs');
//var path = require('path');
//var mime = require('mime');
//var cache = {};

var options = {
  key: fs.readFileSync('./privkey.pem'),
  cert: fs.readFileSync('./cert.pem')
}

var rooms = []; // 所有房间都存放在rooms这个数组里面
var roomNums = 0; // nums存放的是当前房间的数量，顺便可以作为房间的ID号
// 每一间房间都是一个对象，包含了（房间ID，签到学号范围，老师位置，签到限定时间，已到成员列表）
// var oneRoom = {
//   id: '',
//   startNum: 0,
//   endNum: 0,
//   locate: 0,
//   limitTime: 0,
//   student_list: []
// };  
  var guestNumber = 1;
  var checkInNum = {};
  var numberUsed = [];
  var currentRoom = {};

  var roomCount = 0;
  var roomInfo =[];


// 创建http服务器
var server = https.createServer(options, function(request, response) {
  // response.end("hello https");
});

// 启动HTTP服务器
server.listen(3000, function() {
  console.log("Server listening on port 3000.");
});

// io = require('socket.io').listen(server); 将 socket.io 绑定到http服务器上，
// 于是任何连接到该http服务器的客户端都具备了实时通信功能。
var io = require('socket.io').listen(server);

// io.sockets.on('connection', function (socket) { ... }) 的作用是服务器监听所有客户端，并返回该新连接对象，
// 接下来我们就可以通过该连接对象（socket）与客户端进行通信（交互）了。

// 建立连接后，服务器和客户端之间的交互主要通过emit和on来实现
// emit：发射（触发）事件。格式：socket.emit('事件名', 参数);
// on：监听事件。格式：socket.on('事件名', function(传过来的参数) {...});
io.sockets.on('connection', function (socket) {
  console.log('someone is online: ', socket.id);
  // 测试函数
  // test(socket);

  // 创建房间
  createRoom(socket);

  // 签到
  checkIn(socket);

  // 计时结束
  timeOut(socket);

  // socekt退出room
  leaveRoom(socket);

  // 老师删除房间
  deleteRoom(socket);

  // 学生退出房间
  quitRoom(socket);

});

// 测试函数
// function test(socket) {
//   socket.emit('news', { hello: '来自服务器端的问候~' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//     console.log(socket.id);
//   });  
// }

// 创建房间函数
function createRoom(socket) {
  socket.on('create-room', function(roomData){
    var room = ++roomCount; // 根据目前房间数目作为room的名字（roomID）
    socket.join(room); // 把房主先放进这个房间
    currentRoom[socket.id] = room; // 把房主和他创建的房间关联起来
    rooms[roomCount] = room;  // 把这个房间放进一个数组rooms[roomCount]中存放

    var newRoom = {
      roomID: room,
      startNum: roomData.startNum,
      endNum: roomData.endNum,
      limitTime: roomData.limitTime,
      teacherLocation: roomData.teacherLocation,
      studentList: []
    };

    for (var i=newRoom.startNum;i<=newRoom.endNum;i++)
      newRoom.studentList[i] = false;

    roomInfo[room] = newRoom;

    var feedback = newRoom;

    console.log(feedback);

    socket.emit('create-room-feedback', feedback);
  });
}

function checkInResult(socket, roomID) {
  var feedback = roomInfo[roomID];
  socket.emit('check-in-result', feedback);
  socket.broadcast.emit('all-leave', {}); // 让该room里的所有socket都leave
  delete rooms[roomID];
  delete roomInfo[roomID];

  // 把room里面的所有socket清除
  // io.sockets.clients(roomID).forEach(function(s){
  //   s.leave(roomID);
  // });
  // console.log(io.sockets.adapter.rooms[roomID]);
}

function timeOut(socket) {
  socket.on('time-out', function(data) {
    if (rooms[data.roomID] != undefined) {
      console.log('计时结束没？', data.timeOut, "到时间的房间号为：", data.roomID);
      if (data.timeOut) {
        // 返回签到结果
        checkInResult(socket, data.roomID);
      }
    }
  });
}

function checkIn(socket) {
  socket.on('check-in', function(joinData) {
    var feedback = null;
    // 判断学生是否可以成功签到
    var roomExist =  false;
    var numOK = false;
    var locationOK = false;
    var inOtherRoom = false;
    // 签到房间ID是否在rooms[]中有（是否存在房间）
    for (var i=0;i<=rooms.length;i++) {
       if ( joinData.checkInRoomID == rooms[i] ) {
          roomExist = true; 
          break;
       } else {
        feedback = {error: "房间不存在"};
       }
    }

    if (roomExist) {
      // 签到的学号是否超出该房间的签到学号范围
      if (roomInfo[joinData.checkInRoomID].startNum <= joinData.checkInNum 
        && joinData.checkInNum <= roomInfo[joinData.checkInRoomID].endNum) {
        numOK = true;
      } else {
        feedback = {error: "你填的签到学号，不在房间要求的范围内"};
      }
    }

    // 判断该名学生现在不在其他房间内
    // if (currentRoom[socket.id] != undefined) {
    //   inOtherRoom = true;
    //   feedback = {error: "检测到你正在别的房间进行签到，请退出那个房间，再来这个房间签到"};
    // }
    
    // 该学生的当前位置和老师的当前位置是否在50米以内，这里先不做，默认为ok。
    locationOK = true;

    // 如果能运行到这里，说明roomExist、numOK、locationOK都是true，inOtherRoom为false，该名学生可以签到
    if (roomExist && numOK && locationOK && !inOtherRoom) {
      socket.join(joinData.checkInRoomID);  // 把socket加到相应的room里面
      socket.broadcast.to(joinData.checkInRoomID).emit('some news', {}); //向那个room里面的其他socket广播
      roomInfo[joinData.checkInRoomID].studentList[joinData.checkInNum] = true; 
      feedback = roomInfo[joinData.checkInRoomID];
    }

    socket.emit('check-in-feedback', feedback); // 向客户端emit, 返回这次“签到”的反馈

  });
}

function leaveRoom(socket) {
  socket.on('leave-room', function(data) {
    socket.leave(currentRoom[socket.id]);
    console.log(io.sockets.adapter.rooms[currentRoom[socket.id]]);
    delete currentRoom[socket.id];
  });
}

function deleteRoom(socket) {
  socket.on('delete-room', function(roomID) {
    socket.broadcast.emit('all-leave', {}); // 让该room里的所有socket都leave
    delete currentRoom[socket.id];
    delete rooms[roomID];
    delete roomInfo[roomID];
    console.log('删除房间: ', roomID);
  });
}

function quitRoom(socket) {
  socket.on('quit-room', function(quitInfo) {
    leaveRoom(socket);
    roomInfo[quitInfo.roomID].studentList[quitInfo.checkInNum] = false;
    console.log('学号: ', quitInfo.checkInNum, ' 退出了房间');  
  });
}