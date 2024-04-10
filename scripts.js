window.addEventListener('scroll', function() {
    var panelBar = document.getElementById('panel-bar');
    if (window.scrollY > 100) { // 스크롤 위치가 100px 이상인 경우
        panelBar.style.top = '0'; // 패널 바를 보이게 함
    } else {
        panelBar.style.top = '-50px'; // 패널 바를 숨김
    }
});

// 나중에 유니티에서 정보 받아올 함수 (임시)
function MyFunction(num) {
    // 받은 숫자를 HTML 페이지에 추가
    var newElement = document.createElement('p');
    newElement.textContent = 'Received number: ' + num;
    document.body.appendChild(newElement);
}

const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const postData = querystring.parse(body);
            console.log("Received data:", postData.data);

            // 여기에서 받은 데이터를 처리하고 응답을 보낼 수 있습니다.
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Data received successfully!\n');
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found\n');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
