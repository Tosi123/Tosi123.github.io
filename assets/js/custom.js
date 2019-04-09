//군복무 잔여 기간 스크립트
function countDown(){
  //디데이 종료 일자 설정 
  var countDownDate = new Date("december 4, 2019 09:00:00").getTime();
  //1초마다 갱신되도록 함수 생성,실행 
  var x = setInterval(function() { 
  // 오늘 날짜 등록 
  var now = new Date().getTime(); 
  // 종료일자에서 현재일자를 뺀 시간 
  var distance = countDownDate - now; 
  // 각 변수에 일, 시, 분, 초를 등록 
  var d = Math.floor(distance / (1000 * 60 * 60 * 24)); 
  var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
  var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); 
  var s = Math.floor((distance % (1000 * 60)) / 1000); 
  //id가 d-day인 HTML코드에 내용 삽입 
  document.getElementById("d-day").innerHTML = "전역: " + d +"일 " + h + "시간 " + m + "분 " + s + "초"; });
}
  
//Side Bar보기 메뉴
$(document).ready(function(){
        $(".menu>a").click(function(){
            var submenu = $(this).next("ul");
            // submenu 가 화면상에 보일때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
            if( submenu.is(":visible") ){
                submenu.slideUp();
            }else{
                submenu.slideDown();
            }
        }).mouseover(function(){
            $(this).next("ul").slideDown();
        });
        // menu class 중에 두번째 있는 menu 의 하위에 있는 a태그에 클릭 이벤트를 발생시킨다.
        $(".menu:eq(1)>a").click();
});

countDown();
