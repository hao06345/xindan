document.querySelector('#header .top_nav ul.l li:nth-child(2)').onmouseover = function () {
    document.querySelector('#header .erweima').style.display = 'block';
}
document.querySelector('#header .top_nav ul.l li:nth-child(2)').onmouseout = function () {
    document.querySelector('#header .erweima').style.display = 'none';
}

//ajax

var buttonSubmit = document.querySelector('.login_submit');
buttonSubmit.onclick = function () {
    var password = document.querySelector('.password').value;
    var username = document.querySelector('.username').value;
    var xhr = new XMLHttpRequest;
    xhr.open('post','../../api/login.php',true)
    xhr.onreadystatechange = function () {
        if(this.readyState !== 4 ){
            return 
        }
        if(this.status >= 200 && this.status < 300 ){
            if(this.responseText){
                console.log(this.responseText)
                location.href="../index.html?pro=" + username;   
            }else{
                alert('登录失败')
            }
        }else{
            console.error('请求错误')
        }
    }
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
	xhr.send('username=' + username + '&password=' + password);
}





























