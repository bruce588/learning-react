/*
Create by rabbi on 2022/6/25 
*/


const car={

     name:'bmw1',
     print:function (){
          setTimeout(function (){
               console.log(`Car Name: ${this.name}`);//這邊的this找不到(在瀏覽器的this指向window)
          },1000);
     }
}
const car2={

     name:'bmw2',
     print:function (){
          setTimeout(function (){
               console.log(`Car Name: ${this.name}`);//加上bind(this)就可以將作用域指向這個物件
          }.bind(this),1000);
     }
}
const car3={

     name:'bmw3',
     print:function (){
          setTimeout(()=>{
               //箭頭函式可以將 this 的作用域 限制在靜態作用域中
               console.log(`Car Name: ${this.name}`);
          },1000);
     }
}
const car4={

     name:'bmw4',
     print:()=>{
          //箭頭函式沒有自己的作用域@@
          console.log(`Car Name: ${this.name}`);
     }
}


car.print();
car2.print();
car3.print();
car4.print();
console.log(this===global);