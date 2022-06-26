
/*
Create by rabbi on 2022/6/27 
*/


var numbers = [1,3, 5,7];


const result=numbers.reduce((sum,currentNum,index,arr)=>{
    console.log(`sum:${sum},currentNum:${currentNum},index:${index}`);
    return sum+currentNum;
},0);

console.log(result);