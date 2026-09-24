import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <div>
    <h1 className="red">Hello world</h1>
    <p> I am paragraph tag</p>
  </div>
);

const body = (
  <div>
    <h4>I am body</h4>
    <p>I am para inside body</p>
  </div>
);

const layout = (
  <div>
    {heading}
    {body}
    {2+2}
  </div>
);

// JSX
// (
//   <div>
//     <h1>Hello world</h1>
//   </div>
// );

// Jsx => pure react function

//   {} simple object

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(layout);
