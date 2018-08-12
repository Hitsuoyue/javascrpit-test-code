// let arr = [1,2,3,4,5,6,7];

// console.log(arr.some(function(item,index){
//     if(item < 1){
//         return true
//     }
// }));
let arr = [1,2,3,4,5,6,7];
arr.sort(function(a,b){
    // return a-b;//从小到大排序
    return b-a;//从大到小排序
})
console.log(arr);


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