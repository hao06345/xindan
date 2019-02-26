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
var len = document.querySelectorAll('.jingdong_list li').length;
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
}, 2000)
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

//京东轮播图2右侧
function slideTo_2(index){
    document.querySelector('.jingdong_2_current').className = '';
    document.querySelectorAll('.jingdong_2_list li')[index].className = 'jingdong_2_current';
    document.querySelector('.jingdong_2_focus').className = '';
    document.querySelectorAll('.jingdong_2_circle li')[index].className = ('jingdong_2_focus');
}
var len_2 = document.querySelectorAll('.jingdong_2_list li').length;
var currentIndex_2 = 0;
function toRight_2(){
    currentIndex_2++
    if(currentIndex_2 === len_2){
        currentIndex_2 = 0;
    }
    slideTo_2(currentIndex_2);
}
function toLeft_2 () {
    currentIndex_2--
    if(currentIndex_2 === -1){
        currentIndex_2 = len_2 - 1;
    }
    slideTo_2(currentIndex_2);
}
// autoPlay
var id_2;
function autoPlay_2 (){
id_2 = setInterval(function(){
   toRight_2();
}, 1000)
}
autoPlay_2()
function stopPlay_2(){
clearInterval(id_2);
}
document.querySelector('.jingdong_2_list').onmouseover = function (){
stopPlay_2();
}
document.querySelector('.jingdong_2_list').onmouseout = function (){
autoPlay_2();
}
var lis_2 = document.querySelectorAll('.jingdong_2_circle li');
for(var i = 0 ; i < lis_2.length ; i++){
    lis_2[i].count = i;
lis[i].onmouseover = function () {
    slideTo_2(this.count);
}
}
//猜喜欢
$('.like .li_1').on('mouseover',function(){
    $('.like .ul_none_1').show();
    $('.like .ul_none_2').hide();
    $('.like .ul_none_3').hide();
    $('.like .ul_none_4').hide();
    $('.like .li_1').css({
        background : '#fff'
    })
    $('.like .li_2').css({
        background : '#ccc'
    })
    $('.like .li_3').css({
        background : '#ccc'
    })
    $('.like .li_4').css({
        background : '#ccc'
    })
})
$('.like .li_2').on('mouseover',function(){
    $('.like .ul_none_2').show();
    $('.like .ul_none_1').hide();
    $('.like .ul_none_3').hide();
    $('.like .ul_none_4').hide();
    $('.like .li_2').css({
        background : '#fff'
    })
    $('.like .li_1').css({
        background : '#ccc'
    })
    $('.like .li_3').css({
        background : '#ccc'
    })
    $('.like .li_4').css({
        background : '#ccc'
    })
})
$('.like .li_3').on('mouseover',function(){
    $('.like .ul_none_3').show();
    $('.like .ul_none_2').hide();
    $('.like .ul_none_1').hide();
    $('.like .ul_none_4').hide();
    $('.like .li_3').css({
        background : '#fff'
    })
    $('.like .li_2').css({
        background : '#ccc'
    })
    $('.like .li_1').css({
        background : '#ccc'
    })
    $('.like .li_4').css({
        background : '#ccc'
    })
})
$('.like .li_4').on('mouseover',function(){
    $('.like .ul_none_4').show();
    $('.like .ul_none_2').hide();
    $('.like .ul_none_3').hide();
    $('.like .ul_none_1').hide();
    $('.like .li_4').css({
        background : '#fff'
    })
    $('.like .li_2').css({
        background : '#ccc'
    })
    $('.like .li_3').css({
        background : '#ccc'
    })
    $('.like .li_1').css({
        background : '#ccc'
    })
})




