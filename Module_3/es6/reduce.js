let a=[1,2,3];

function sum(a,b){
    return a+b;
}


console.log(myReduce(a,sum));

let val=a.reduce(sum);
console.log(val);

function myReduce(arr,sum){

    let ans=arr[0];

    for(let i=0;i<arr.length;i++){
        ans=sum(ans,arr[i]);
    }
    return ans;
}