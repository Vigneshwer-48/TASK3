class person{
    constructor(name,age,mobile,state){
        this.name=name;
        this.age=age;
        this.mobile=mobile;
        this.state=state;
    }
}

var a=new person("abc",25,1234567890,"TN");
var b=new person("bcd",26,2345678910,"KL");
var c=new person("efg",24,3456789120,"AP");
console.log(a,b,c);