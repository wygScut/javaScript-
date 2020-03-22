//这里定义了一个模块
const circleArea=r=>{
    return r*r*3.15;
};
const squareArea=a=>{
    return a*a;
};

export { circleArea,squareArea };//这里定义了对外使用的接口。