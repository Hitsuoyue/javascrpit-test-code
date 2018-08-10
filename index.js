(function test() {
    // for(let i=0;i<10;i++){
    //     let a = document.createElement('a');
    //     a.innerHTML = i;
    //     a.onclick=(e)=>{alert(i)};
    //     a.className = 'number';
    //     let parent = document.getElementById('a');
    //     parent.appendChild(a);
    // }
    let arr = [1,2,3,4,5,6,7];
    // randomArray(arr);

})()

/**
 * 数组随机排序
 */
// function randomArray (arr) {
//     let newArr = [];
//     for(let i=arr.length; i>0; i--){
//         let index = Math.floor(Math.random()*i);
//         newArr.push(arr[index]);
//         arr.splice(index, 1);
//     }
//     return newArr;
// }
//
// function Foo(name, age){
//     this.name = name;
//     this.age = age;
//     this.class = 'class-1';
//     return this;    //默认有这一行
// }
//
// let f = new Foo('xiaoming', 18);
// //可创建多个对象
//
// var obj = {}; obj.a = 100;
// var arr = []; arr.a = 100;
// function fn() {}; fn.a = 100;
//
// console.log(obj._proto_);
// console.log(arr._proto_);
// console.log(fn._proto_);
// console.log(fn.prototype);
//
//
// function Foo(name) {
//     this.name = name;
// }
// Foo.prototype.alertName = function () {
//     alert(this.name);
// }
// var f = new Foo('lucy');
// f.frintName = function () {
//     console.log(this.name);
// }
// f.frintName();
// f.alertName();
//
// for(item in f){
//     console.log('item', item);
//     if(f.hasOwnProperty(item)){
//         console.log('ownProperty', item);
//     }
// }
//
// function Animal() {
//     this.eat = function () {
//         console.log('animal eat~')
//     }
// }
// function Dog() {
//     this.bark = function () {
//         console.log('dog bark~')
//     }
// }
//
// Dog.prototype = new Animal();
// var erha = new Dog();

//原型继承
// function Elem(id) {
//     this.elem = document.getElementById(id);
// }
// Elem.prototype.html = function (val) {
//     var elem = this.elem;
//     if(val){
//         elem.innerHTML = val;
//         return this;//链式操作
//     }else{
//         return elem.innerHTML;
//     }
// }
// Elem.prototype.on = function (type, fn) {
//     var elem = this.elem;
//     elem.addEventListener(type, fn);
//     return this;
// }
// var a = new Elem('a');
// a.html('<p>sfdsfd</p>').on('click', function () {
//     console.log('clicked')
// });



