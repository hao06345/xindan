document.querySelector('#header .top_nav ul.l li:nth-child(2)').onmouseover = function () {
    document.querySelector('#header .erweima').style.display = 'block';
}
document.querySelector('#header .top_nav ul.l li:nth-child(2)').onmouseout = function () {
    document.querySelector('#header .erweima').style.display = 'none';
}

var submit =document.querySelector('.submit')
submit.onclick = function () {
    var password = document.querySelector('.password').value
    var username = document.querySelector('.text').value;
    //  console.log(password);
    //  console.log(username);
    if(/^1[34578]\d{9}$/.test(username) && /^(\w){6,20}$/.test(password)){ 
        var xhr = new XMLHttpRequest();
        console.log(xhr);
        xhr.open('post','../../api/register.php',true);
        xhr.onreadystatechange = function () {
            if(this.readyState !== 4){
                //console(this.status);
                return;
            }
            if(this.status >= 200 && this.status < 300){  
                if(this.responseText){
                    console.log(this.responseText);
                    location.href="./login.html"
                }else{
                    alert('注册失败')
                }   
            }
        } 
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send('username=' + username + '&password=' + password);     
    }else{
        alert("手机号码或密码(6~20位数字字母)有误，请重填")
    }
}

    
    
 