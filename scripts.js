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

// 데이터를 받는 함수 정의
window.FuncNum = function(data) {
    // 받은 데이터를 HTML에 표시합니다.
    document.getElementById("receivedData").innerText = "받은 데이터: " + data;

};

// 페이지 로딩 시 데이터를 받아 처리하는 함수
window.onload = function() 
{
    // URL에서 데이터를 추출합니다.
    var urlParams = new URLSearchParams(window.location.search);
    var data = urlParams.get('data');
    
    // 받은 데이터를 HTML에 표시합니다.
    document.getElementById("receivedData").innerText = "받은 데이터: " + data;
};