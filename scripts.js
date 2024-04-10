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

