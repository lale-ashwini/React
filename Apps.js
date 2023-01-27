 import React from "react";
 import ReactDOM from "react-dom/client";
/*
//React Element
 const heading1 = React.createElement("h1",{
    className:"heading",
    id:'heading1',
    key:'1'
 },"This is first heading element");

 const heading2 = React.createElement("h2",{
    className:"heading",
    id:'heading2',
    key:'2'
 },"This is second heading element");

 const heading3 = React.createElement("h3",{
    className:"heading",
    id:'heading3',
    key:'3'
 },"This is third heading element");

 const div = React.createElement("div",{
    className:"divclass",
    id:'div1',
    key:'4'
 },[heading1,heading2,heading3]);
 const root=ReactDOM.createRoot(document.getElementById('root'));
 root.render(div);
*/

 //JSX EXpression
/*const headingJSXExp= (
 <h1 className="heading" id='heading1' key='1'>This is First heading element</h1>
 );*/
const Title = () => (
    <h1 id="title" key="h2">
      Namaste React
    </h1>
);
const heading1= (
    <h1 className="heading" id='heading1' key='1'>This is First heading element</h1>
);
 
const heading2= (
    <h2 className="heading" id='heading2' key='2'>This is Second heading element</h2>
);

const FunctionalComponent= ()=> (
    <h3 className="heading" id='heading3' key='3'>Namaste React functional component</h3>
);
  
  // Composing Comopnentss
  const HeaderComponent = () => {
    return (
      <div>
        {Title()}
        <FunctionalComponent/>
        {heading1}
        {heading2}
      </div>
    );
  };


 const root=ReactDOM.createRoot(document.getElementById('root'));
 root.render(<HeaderComponent/>);
 




