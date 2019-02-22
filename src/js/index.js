document.querySelector('#header .top_nav ul.l li:nth-child(1)').onmouseover = function () {
    document.querySelector('#header div').style.display = 'block';
}
document.querySelector('#header .top_nav ul.l li:nth-child(1)').onmouseout = function () {
    document.querySelector('#header div').style.display = 'none';
}