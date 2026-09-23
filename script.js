import React from "react"
import ReactDOM from "react-dom/client"

const parent = React.createElement("div", {}, [
  React.createElement("h1", { id: "h1-react" }, "Hello world from react"),
  React.createElement("h2", {id: "h2-react"}, "Hello h2"),
  React.createElement("div", {id: "child-div", className: "child"}, [
    React.createElement("h1", {}, "I am h1 of child-div"),
    React.createElement('h2', {}, "I am h2 of child-div")
  ])
]);



let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);
