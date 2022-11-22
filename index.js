//모듈을 추출합니다.
const { request, response } = require('express')
const express = require('express')

//서버를 생성합니다.
const app = express()

// request 이벤트 리스너를 설정합니다.
app.get('*', (request, response)=>{
    console.log(request.query);
    response.send(request.query)
})

//서버를 실행합니다.
app.listen(52273, ()=>{console.log('Server runnig at http://127.0.0.1:52273')})