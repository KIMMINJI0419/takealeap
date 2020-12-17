// 변수 imgch에 img.mainimg 요소를 할당한다.
var imgch = document.querySelector("img.mainimg");
// 변수 title에 span.change 요소를 할당한다.
var title = document.querySelector("span.change");
// 메뉴 바의 색이 어두워 보이지 않기 때문에 색 변경을 위한 변수를 선언한다.
var bar = document.querySelectorAll('div.nav-togglebtn > span'); 

// 이벤트 핸들러에 해당하는 함수 ClickTitle을 정의한다.
// 함수가 e이라는 매개 변수를 가지도록 할당한다.
function ClickTitle(e){
    // 기본으로 정의된 이벤트를 작동하지 못하게 한다.
    e.preventDefault();
    // 이미지의 색상이 변화되도록 한다.
    // 이미지 색이 바뀌고 나서 다시 돌아오지 않는다.
    // imgch.style.filter="invert(100%)";
    // img.mainimg를 찾아 할당 된 변수 imgch에 class 명을 toggle에 따라 추가되고 삭제되도록 해본다.
    imgch.classList.toggle("changeimg");
    // 타이틀의 글씨 색을 변경하기 위해 toggle에 따라 class명이 추가되고 삭제되도록 한다.
    title.classList.toggle("changespan");
    // 콘솔창에 bar를 출력해 확인.
    // console.log(bar);
    // bar에 toggle 메뉴를 바로 추가하면 적용되지 않는다.
    // bar는 배열의 형태를 가지고 있어 바로 추가되지 않고 적용되지 않는 것.
    // bar.classList.toggle("barwhite");

    // for문을 사용하고 조건절엔 변수 i를 선언해, 배열의 인덱스를 모두 포함하여 class를 추가하도록 한다.
    // 제대로 메뉴바의 색상이 변경된다.
    for (var i = 0; i <= 2; i++){
        bar[i].classList.toggle("barwhite");
    }
}
// span.change 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당.
// 함수 ClickTitle을 이벤트 핸들러로 할당하도록 한다.
title.addEventListener("click", ClickTitle);



// 변수 winw를 선언해 window.innerWidth를 5로 나눈 값을 할당한다.
var winw = window.innerWidth / 5;
// 변수 winh를 선언해 window.innerHeight를 5로 나눈 값을 할당한다.
var winh = window.innerHeight / 5 ;
// 이벤트 핸들러에 해당하는 함수 MovingImg를 정의한다.
// 함수가 e이라는 매개 변수를 가지도록 할당한다.
function MovingImg (e){
    // client는 브라우저 상단을 기준으로 마우스 좌표를 찾아온다.
    // 상단을 기준으로 한 x, y 좌표를 변수 winw, winh로 나눈 값을 선언한 변수 mouseX,mouseY에 각각 할당한다.
    var mouseX = e.clientX / winw;
    var mouseY = e.clientY / winh;
    // img.mainimg 요소의 스타일 중 transform을 translate3d로 숫자가 들어갈 곳에 각각 mouseX,mouseY를 넣는다.
    // -를 붙였는지 유의하도록 한다.
    imgch.style.transform = "translate3d("+ -(mouseX) +"%, "+ -(mouseY) +"%, 0)";
}
// 위에서 img.mainimg 요소를 할당한 imgch에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당.
// 함수 MovingImg을 이벤트 핸들러로 할당하도록 한다.
imgch.addEventListener("mousemove", MovingImg);


