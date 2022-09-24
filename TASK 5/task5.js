//a. Print odd numbers in an array using anonymous function
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var odd = function(a)
{
    for(var i=0;i<a.length;i++)
    {
        if(a[i]%2!==0)
        {
            console.log(a[i]);
        }
    }
}
odd(arr);

//IIFE function
(function(odd){
    odd.forEach(element => {
        if(element%2!==0)
            console.log(element);
    }); 
})([1,2,3,4,5,6,7,8,9,10]);

//c. Sum of all numbers in an array.

//anonymous function
var nums=[1,2,3,4,5,6,7,8,9,10];
var b=function(nums)
{
    var sum=0;
    for(var i=0;i<nums.length;i++)
    {
        sum+=nums[i]
    }
    return sum;
}
console.log(b(nums));

// IFFE
(function(nums){
    let sum = nums.reduce((total,next) => { return total + next},0);
    console.log(sum);
})([1,2,3,4,5,6,7,8,9,10]); 



//d. Return all the prime numbers in an array.

//anonymous function
var arr1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var prime=function(num){
    for(var i=2; num>i;i++){
        if(num%i==0){
            return false;
        }
    }
    return num>1;
}
console.log(arr1.filter(prime));

//IIFE
var prime=(function(arr1){
    array=arr1.filter((number)=>{
        if(number==1){
            return false;
        }
        else if(number==2){
            return true;
        }
        else{
            for(var i=2;i<number;i++){
                if(number%i==0){
                    return false;
                }
            }
        }
       return true; 
    })
    return array;
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
console.log(prime);

//e. Return all palindromes in an array

//anonymous function

var palindrom=["star", "drawer", 1221];
var validate=function(palindrom){
    var a=palindrom.toString();
    let b=a.length;
    for(var i = 0;i<b/2;i++)
    {
        if(a.charAt(i)!=a.charAt(b-i-1)){
            return false;
        }
    }
    return true;
}
console.log(palindrom.filter(validate));

//f. Return median of two sorted arrays of the same size.

//anonymous
var a=[1,2,3,4,5]
var b=[6,7,8,9,10]
var median;
var result = a.concat(b)
var n = result.length;
if(n%2==0) {
    median=((result[n/2])+result[n/2+1])/2;
}
else{
    median=(result[n/2])/2;
}
console.log(median);

// IIFE

(function(a,b)
{
    var median;
    var result = a.concat(b)
    var n = result.length;
    if(n%2==0) {
        median=((result[n/2])+result[n/2+1])/2;
    }
    else{
        median=(result[n/2])/2;
    }
    console.log(median);  
})([1,2,3,4,5],[6,7,8,9,10]);

//h. Rotate an array by k times

//anonymous
var a1=[100,525,336,489,291];
var rotate=function(a1,k){
    for(var i=1;i<=k;i++){
        a1.push(a1.shift());
    }
    return a1;
}
var result=rotate(a1,2);
console.log(result);


//IFEE
(function(a1,k){
    for(var i=1;i<=k;i++)
    {
        a1.push(a1.shift());
    }
    console.log(a1);
});
([100,525,336,489,291],3);

