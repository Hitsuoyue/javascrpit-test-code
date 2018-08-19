var xhr = new XMLHttpRequest()
xhr.open('GET', '/api', false)//false=>异步
xhr.onreadystatechange = function(){
    //函数异步执行
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            console.log(xhr.responseText)
        }
    }
}
xhr.send(null)


