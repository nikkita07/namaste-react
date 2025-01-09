import React from "react";
import ReactDOM from "react-dom/client";



const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"hello world from h2"),React.createElement("h3",{},"hello world from h3")]));
   const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(parent);