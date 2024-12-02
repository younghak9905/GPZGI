const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: '../client' }); // 'client' 디렉토리를 가리킴
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // API 라우트 예시
    server.get('/api/hello', (req, res) => {
        res.json({ message: 'Hello World' });
    });

    // Next.js 요청 처리
    server.all('*', (req, res) => {
        return handle(req, res);
    });

    const port = process.env.PORT || 3001;
    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
