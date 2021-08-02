var a=[1,2,3,4,5];
let arr1=[];
let idx1=0;
function myMap(a){

    for(let i=0;i<a.length;i++){
        if(a[i]%2==0){
            
            arr1[idx1]=a[i];
            idx1++;
        }
    }
   return arr1

}
let arr2=[];
let arr3=[];
let idx2=0;
let idx3=0;
function myFilter(a){

    for(let i=0;i<a.length;i++){
        if(a[i]%2==0){
            
            arr2[idx2]=true;
            idx2++;
        }else{
            arr2[idx2]=false;
            idx2++;
        }
    }
    for(let i=0;i<arr2.length;i++){
        if(arr2[i]==true){
            arr3[idx3]=a[i];
            idx3++;
        }
    }
   
return arr3;
}



let arrmap=myMap(a);
let arrfilter=myFilter(a);
console.log(arrmap);
console.log(arrfilter);