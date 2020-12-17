// 팝업창으로 스크린이 가득 차게 영상이 뜨도록 시도 해본다.
// 클릭 해서 영상이 나와야할 a 태그요소를 btnvid1로 선언한다.
var btnvid1 = document.querySelector("a.vidOn1");
// 영상과 버튼이 있는 div를 trailer 변수를 선언해 할당한다.
var trailer= document.querySelector(".trailer");
// 닫는 버튼과 영상요소를 각각 변수 close1,video1에 할당한다.
var close1 = trailer.querySelector("div.close1");
var video1 = trailer.querySelector("video");
//함수 toggle1을 선언하고 toggle에 따라 class명이 추가되고 삭제되도록 한다.
function toggle1 (){
    trailer.classList.toggle("active1");
    video1.currentTime = 0;
}
// a.vidOn1, div.close1 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당.
// 함수 toggle1을 이벤트 핸들러로 할당하도록 한다.
btnvid1.addEventListener("click", toggle1);
close1.addEventListener("click", toggle1);


// 클릭 해서 영상이 나와야할 a 태그요소를 btnvid2로 선언한다.
var btnvid2 = document.querySelector("a.vidOn2");
// 영상과 버튼이 있는 div를 mv 변수를 선언해 할당한다.
var mv= document.querySelector(".mv");
// 닫는 버튼과 영상요소를 각각 변수 close2,video2에 할당한다.
var close2 = mv.querySelector("div.close2");
var video2 = mv.querySelector("video");
//함수 toggle1을 선언하고 toggle에 따라 class명이 추가되고 삭제되도록 한다.
function toggle2 (){
    mv.classList.toggle("active2");
    video2.currentTime = 0;
}
// a.vidOn2, div.close2 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당.
// 함수 toggle2를 이벤트 핸들러로 할당하도록 한다.
btnvid2.addEventListener("click", toggle2);
close2.addEventListener("click", toggle2);


// 클릭 해서 영상이 나와야할 a 태그요소를 btnvid3으로 선언한다.
var btnvid3 = document.querySelector("a.vidOn3");
// 영상과 버튼이 있는 div를 dance 변수를 선언해 할당한다.
var dance= document.querySelector(".dance");
// 닫는 버튼과 영상요소를 각각 변수 close3,video3에 할당한다.
var close3 = dance.querySelector("div.close3");
var video3 = dance.querySelector("video");
//함수 toggle3을 선언하고 toggle에 따라 class명이 추가되고 삭제되도록 한다.
function toggle3 (){
    dance.classList.toggle("active3");
    video3.currentTime = 0;
}
// a.vidOn3, div.close3 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당.
// 함수 toggle2를 이벤트 핸들러로 할당하도록 한다.
btnvid3.addEventListener("click", toggle3);
close3.addEventListener("click", toggle3);