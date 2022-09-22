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
    let sum=0;
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
