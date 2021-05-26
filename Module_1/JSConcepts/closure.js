var name="steve";

function fun(){
    let a=20;
    console.log(a);
    function y(){
        a=100;
        console.log(a);
    }
    a=50;
    return y;

}
var newFun=fun();
newFun();