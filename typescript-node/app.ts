import http from 'http';

http.createServer((req, res) => {
    res.end("hello, TypeScript!!")
})
.listen(3000, () => console.log("Server Started!"))