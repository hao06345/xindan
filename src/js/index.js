//top拦
document.querySelector('#header .top_nav ul.l li:nth-child(2)').onmouseover = function () {
    document.querySelector('#header .erweima').style.display = 'block';
}
document.querySelector('#header .top_nav ul.l li:nth-child(2)').onmouseout = function () {
    document.querySelector('#header .erweima').style.display = 'none';
}
$('#header .top_nav ul.r li.l:nth-of-type(7)').on('mouseover',function () {
    $('ul.r li.l:nth-of-type(7) div').css({
        display:'block',
    })
    $('ul.r li.l:nth-of-type(7)').css({
       background:'#fff'
    })
    $('#header .top_nav ul.r li.l:nth-of-type(7) span').css({
        backgroundPositionX: '-10px' 
    })
})
$('#header .top_nav ul.r li.l:nth-of-type(7)').on('mouseout',function () {
    $('ul.r li.l:nth-of-type(7) div').css({
        display:'none',
    })
    $('#header .top_nav ul.r li.l:nth-of-type(7) span').css({
        backgroundPositionX : '0px'
    })
    $('ul.r li.l:nth-of-type(7)').css({
        background:'none'
     })
   
})
$('#header .top_nav ul.r li.l:nth-of-type(5)').on('mouseover',function () {
    $('ul.r li.l:nth-of-type(5) div').css({
        display:'block',
    })
    $('ul.r li.l:nth-of-type(5)').css({
       background:'#fff'
    })
    $('#header .top_nav ul.r li.l:nth-of-type(5) span').css({
        backgroundPositionX: '-10px' 
    })
})
$('#header .top_nav ul.r li.l:nth-of-type(5)').on('mouseout',function () {
    $('ul.r li.l:nth-of-type(5) div').css({
        display:'none',
    })
    $('#header .top_nav ul.r li.l:nth-of-type(5) span').css({
        backgroundPositionX : '0px'
    })
    $('ul.r li.l:nth-of-type(5)').css({
        background:'none'
     })
   
})
$('#header .top_nav ul.r li.l:nth-of-type(4)').on('mouseover',function () {
    $('ul.r li.l:nth-of-type(4) div').css({
        display:'block',
    })
    $('ul.r li.l:nth-of-type(4)').css({
       background:'#fff'
    })
    $('#header .top_nav ul.r li.l:nth-of-type(4) span').css({
        backgroundPositionX: '-10px' 
    })
})
$('#header .top_nav ul.r li.l:nth-of-type(4)').on('mouseout',function () {
    $('ul.r li.l:nth-of-type(4) div').css({
        display:'none',
    })
    $('#header .top_nav ul.r li.l:nth-of-type(4) span').css({
        backgroundPositionX : '0px'
    })
    $('ul.r li.l:nth-of-type(4)').css({
        background:'#f1f1f1'
     })
   
})
   
//京东轮播图
function slideTo(index){
    document.querySelector('.jingdong_current').className = '';
    document.querySelectorAll('.jingdong_list li')[index].className = 'jingdong_current';
    document.querySelector('.jingdong_focus').className = '';
    document.querySelectorAll('.jingdong_circle li')[index].className = ('jingdong_focus');
}
var len = document.querySelectorAll('.jingdong_list li').length-2;
var currentIndex = 0;
function toRight(){
    currentIndex++
    if(currentIndex === len){
        currentIndex = 0;
    }
    slideTo(currentIndex);
}
function toLeft () {
    currentIndex--
    if(currentIndex === -1){
        currentIndex = len - 1;
    }
    slideTo(currentIndex);
}
// autoPlay
var id;
function autoPlay (){
id = setInterval(function(){
   toRight();
}, 1000)
}
autoPlay()
function stopPlay (){
clearInterval(id);
}
document.querySelector('.jingdong_list').onmouseover = function (){
stopPlay();
}
document.querySelector('.jingdong_list').onmouseout = function (){
autoPlay();
}
var lis = document.querySelectorAll('.jingdong_circle li');
for(var i = 0 ; i < lis.length ; i++){
    lis[i].count = i;
lis[i].onclick = function () {
    slideTo(this.count);
}
}





