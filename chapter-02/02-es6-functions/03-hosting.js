/*
Create by rabbi on 2022/6/24 
*/
hay();
hay2();//const 函數無法提升,造成錯誤

function hay()
{
    console.log('hay!');
}
const hay2=function ()
{
    console.log('hay2');
}