 import React from 'react';
 import ReactDOM from 'react-dom/client';
 //1 - Create the tag which is coming from core react file 

 const heading = React.createElement("h1", {id: "heading"}, "Hello World using react");
//  console.log(heading); - heading is an object/React element
 //2 - Create the root which is coming from React DOM file 

//  const root = ReactDOM.createRoot(document.getElementById('root'));
 //3 - render the tag inside the root

//  root.render(heading);

//  Create nested Dom structure - 
//  <div id="parent">
//     <div id="child">
//         <h1>Hi There</h1>
//         <h1>Hi There2</h1>
//     </div>
//  </div>

const parent = React.createElement("div", {id: "parent"},
    React.createElement("div", {id: "child"}, [React.createElement("h1", {}, "Hi There" ),
         React.createElement("h1", {}, "Hi There3" )]));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);