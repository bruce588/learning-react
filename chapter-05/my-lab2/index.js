/*
Create by rabbi on 2022/7/1 
*/

const data = {
        title:"Animals",
        list:['cat','dag','cow','tiger']};


const SecondElement = ({list})=>{

    console.log('list',list);

    return (<ul>{list.map((item,i)=><li key={i}>{item}</li>)}</ul>);
};


//使用React一定要用解構的方式取得參數,因為從上層傳來的屬性可能是多個
//const RootElement = (myProp)=> { //沒有加大括弧會造成取得標題會這 myProp.data.title
const RootElement = ({title,list})=> {
console.log('data',list);
    return (<>

        <div>Title:{title}</div>
        <SecondElement list={list}></SecondElement>
    </>);
};



ReactDOM.render(
    <RootElement {...data}></RootElement>,
    document.getElementById("react-container")
);
