// 변수 nav에 div.navigation 요소를 할당한다.
var nav = document.querySelector("div.navigation");
// 이벤트 핸들러에 해당하는 함수 ClickbtnNav을 정의한다.
// 함수가 e이라는 매개 변수를 가지도록 할당한다.
function ClickbtnNav(e){
    // 기본으로 정의된 이벤트를 작동하지 못하게 한다.
    // css 수정을 해도 페이지가 넘어가지 않아 관련 함수에서 preventDefault 주석처리 진행.
    // 네비게이션에서 기본이벤트를 작동하지 못하게 할 경우 a태그를 클릭해도 페이지가 넘어가지 않는다.
    // e.preventDefault();

    // div.navigation를 찾아 할당 된 nav에 class 명을 toggle에 따라 추가되고 삭제되도록 한다.
    // console.log(nav);
    nav.classList.toggle("active");
}
// div.navigation 요소에 클릭 이벤트를 추가하고 이벤트 핸들러를 할당.
// 함수 ClickbtnNav를 이벤트 핸들러로 할당하도록 한다.
nav.addEventListener("click", ClickbtnNav);