const express = require('express'); //서버 기능 구현을 위한 핵심모듈 호출
const path = require('path'); // 경로기능 구현/제어를 위한 모듈호출
const cors = require('cors'); //다른 서버와 연동하는 모듈 호출
const app = express(); // express 모듈을 app에서 실행

const server = require('http').createServer(app); //app을 다시 카피하여 움직이게

app.use(cors()); // cors 미들웨어를 삽입합니다. 다른 도메인에서 요청이오면 응답해달라는 명령어

app.get('/', (req,res) => { // 요청패스에 대한 콜백함수를 넣어줍니다. get, post(서버에서 요청이 왔을때 get/post), use (서버 자체적으로 라우트 만들때 사용)
  res.send({message:'노드 실행~~~~~~~~~~~~~'});
});

server.listen(8080, ()=>{
  console.log('server is running on 8080')
})


// app.listen(8080, ()=>{
//   console.log('server is running on 8080')
// })
//이렇게 app copy (app 카피가 필요없다면) 안하고 바로 app으로 실행 할 수도 있음