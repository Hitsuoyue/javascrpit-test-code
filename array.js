// let arr = [1,2,3,4,5,6,7];

// console.log(arr.some(function(item,index){
//     if(item < 1){
//         return true
//     }
// }));
// let arr = [1,2,3,4,5,6,7];
// arr.sort(function(a,b){
//     // return a-b;//从小到大排序
//     return b-a;//从大到小排序
// })
// console.log(arr);


// let arr1 = arr.map(function(item){
//     return item*item
// })
// console.log(arr, arr1);
// console.log(arr1.join('sss'))
// console.log(arr1.slice(1,3))

// let arrFilter = arr.filter(function(item){
//     if(item>=3){
//         return true;
//     }
// })
// console.log(arrFilter)
// let arr = [1,2,3,4,5,6,7];
// console.log(arr.slice(1,4))
// console.log(arr)
// console.log(arr.splice(2,4,'sss'))
// console.log(arr)



// let date = new Date();
// console.log(Date.now())
// console.log(date)
// console.log(date.getTime())
// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())

//写一个能遍历对象和数组的 forEach 函数
// function forEach(obj, fn) {
//     if(Array.isArray(obj)){
//         obj.forEach(function (item, index) {
//             fn(item, index)
//         })
//
//     }else{
//         for(key in obj){
//             let item = obj[key]
//             fn(item, key);
//         }
//
//     }
// }
//
// let arr = [1,2,3,4,5];
// let obj = {name: 111, age: 222}
//
// forEach(arr, function (item, index) {
//     console.log(item, index)
// })
// forEach(obj, function (item, index) {
//     console.log(item, index)
// })

//获取一个 2018-8-13 格式的日期
function formatDate(date, mark) {
    if(!date){
        date = new Date();
    }
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    if(month < 10){
        month = `0${month}`
    }
    let day = date.getDate();
    if(day < 10){
        day = `0${day}`
    }
    return `${year}${mark}${month}${mark}${day}`
}
console.log(formatDate(new Date(), '/'))



function deepClone(initalObj) {
    var obj = {};
    obj = JSON.parse(JSON.stringify(initalObj));
    return obj;
}

var obj = {
    a: {
        a: "world",
        b: 21
    }
}
var cloneObj = deepClone(obj);
cloneObj.a.a = "changed";

console.log(obj.a.a); // "world"
