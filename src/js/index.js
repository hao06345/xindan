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
   







