## 基础

### var和let

```js
var a=1;
var a=2;
console.log(a);
// 在这种情况下，虽然声明了两个同名变量，不会报错，但是是很危险的行为

let b=1;
let b=12;
console.log(b);

//上述代码则会报错

let c=1;
var c=1;
//以上代码也会报错
```

### let和const

let和const 用于块级作用域 const则是块级作用域常量，声明后不会改变
const只允许在声明的同时也赋值，不允许只声明不赋值或者多次赋值

```js
const a;//报错
a=12;
const b=12;
b=13;//报错
```



### const对象

const也有例外，比如对对象的声明

```js
const constObj={
name:"Vue"
};
constObj.name="Angular";

//以上代码不会报错，因为是修改对象内部的内容

constObj={
	name:"React"
};
//这样就会报错
```

### 模板字面量



```
text="这是一段文本";
console.log('1\n'+text+'\n2')
//旧版本写法

console.log('1
${text}
2
')
//模板字面量

```





### 箭头函数

```js
a=()=>{
    return 1;
}
b=(x)=>{
    return x+1;
}
c=(x,y)=>{
    return x+y;
}
sum=(arr)=>{
    let total=0;
    for(item in arr){
        total+=arr[item];
    }
    return total;
}
console.log(a());
console.log(b(2));
console.log(c(1,3));
console.log(sum([1,2,3,4,5,6]));

```



### 函数的参数默认值

```
a=(x=1,y=2,z=3)=>{
    return x+y+z;
}
console.log(a());
console.log(a(2));
console.log(a(2,3));
console.log(a(2,3,4));
//ES6的新写法
```



### 数组解构

数组解构用于赋值

```
let [x,y]=['a','b'];
//等价于
//let x='a';
//let y='b';
```



数据解构用于交换值。

```
[x,y]=[y,x];//互换了x,y的值
```



## 模块

