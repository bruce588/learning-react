/*
Create by rabbi on 2022/6/24 
*/

//const person0 = (firstName,lastName)=>           { first:firstName,last:lastName }   ; //SyntaxError: Unexpected token ':'
  const person2 = (firstName,lastName)=>  { return { first:firstName,last:lastName } } ;
  const person1 = (firstName,lastName)=>(          { first:firstName,last:lastName } ) ;//物件用小括弧包起來就可以return物件
  //由上述可知小括弧可以等於 return 物件
  // (obj) 等於 { return obj; }

console.log(person1('bruce','lai').first);
console.log(person2('bruce2','lai').first);