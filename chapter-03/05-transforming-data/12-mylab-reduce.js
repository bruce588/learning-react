
/*
Create by rabbi on 2022/6/27 
*/

//Sample:加總
var numbers = [1,3, 5,7];

const result=numbers.reduce((sum,currentNum,index,arr)=>{
    console.log(`sum:${sum},currentNum:${currentNum},index:${index}`);
    return sum+currentNum;
},0);

console.log(result);
//Sample:攤平陣列--------------------------------------
const flattened = [[0, 1], [2, 3], [4, 5]];
const newFlatArray=flattened.reduce((newArray,currentArray)=>{
    return newArray.concat(currentArray);
    }, []);
console.log(newFlatArray);
//計算相同元素數量並以物件鍵值顯示,GroupBY

var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    }
    else {
        allNames[name] = 1;
    }
    return allNames;
}, {});
console.log(countedNames);
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }


//其餘的範例 :　https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
