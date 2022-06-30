/*
Create by rabbi on 2022/6/30 
*/

//JSX 與 Javascript 混搭
const data = ['cat','dag','cow','tiger'];

const childNode = (prop2) => {
    console.log('prop2',prop2.data);
  return   (<ul><li>Dog</li><li>Cat</li>{prop2.data.map((item,index)=><li key={index}>{item}</li>)}</ul>)
};

const rootNode = (prop)=>  {

    console.log('prop',prop);
    return React.createElement('div',null,
                        React.createElement(childNode,prop  ,null)
    );
};
    console.log('data',data);
const {...data2} = data;//陣列組成物件
    console.log('data2',data2);
const data3= Object.values(data2);//物件轉陣列
    console.log('data3',data3);

ReactDOM.render(
    React.createElement(rootNode,{data},null), //若傳參數不用大括弧包起來,陣列會被組成物件
    document.getElementById("react-container")
);
