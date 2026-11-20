// while语句 - 前测试循环
// if只执行一次 while循环多次
let i = 1;
if (i < 10) {
    console.log(`if语句执行了: ${i}次`);
}

// while循环，注意更新循环变量，防止死循环
while (i < 10) {
    console.log(`while语句执行了: ${i}次`);
    i++;
}

// do while循环，先执行再判断
let j = 1;
do {
    console.log(`do语句执行了: ${j}次`);
    j++;
} while (j < 10);

// for循环
for (let k = 0; k < 10; k++) {
    console.log(`K: ${k}`);
}

let l = 0;
while (l < 10) {
    console.log(`L: ${l}`);
    l++;
}

// ========== 函数部分 ==========
// 1.函数声明
function add(a, b) {
    console.log(a, b);
    let c = a + b;
    return c;
}
add(1,2);
console.log(add(1,2));
console.log(typeof(add));

// 2.函数表达式
let add2 = function() {
    console.log("console.log function add2");
    return "return function add2";
}
add2();
console.log(add2());
console.log(typeof(add2));

// arguments 获取全部传入参数
let drive = function(){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments);
    return "drive";
}
let result = drive("奔驰","奥迪", "宝马");
let result2 = drive();
console.log(result);
console.log(result2);

// 箭头函数
let compare = (a,b) => {return a > b;}
console.log(compare(1,2));
console.log(compare(2,1));

let compare2 = function (a,b) {return a < b;}
console.log(compare2(1,2));
console.log(compare2(2,1));
