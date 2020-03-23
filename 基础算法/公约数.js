//gcd(a,b) = gcd(b,a mod b)
var gcd1=(a,b)=> {
    if(b){
        return gcd(b,a%b);
    }
    else return a;
}
var gcd2=(a,b)=>{
    while(b != 0)
    {
        let r = b;
        b = a % b;
        a = r;
    }
    return a;

}

console.log(gcd2(6,12));

