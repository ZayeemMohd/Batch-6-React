// tariqa no: 2 (vanilla javascript)
// const h1Elem = document.createElement("h1");
// h1.h1Elem.innerText = "Hello world from javascript"
// h1Elem.setAttribute("id", "h1")

// document.querySelector("body").insertAdjacentElement("beforeend", h1Elem)

// <div>
//     <h1></h1>
//     <h2></h2>
//     <div> 
//             <h1> </h1> 
//             <h2> </h2>
//      </div>
// </div>

// tariqa no: 3
const parent = React.createElement("div", {}, [
  React.createElement("h1", { id: "h1-react" }, "Hello world from react"),
  React.createElement("h2", {id: "h2-react"}, "Hello h2"),
  React.createElement("div", {id: "child-div", class: "child"}, [
    React.createElement("h1", {}, "I am h1 of child-div"),
    React.createElement('h2', {}, "I am h2 of child-div")
  ])
]);

let root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);
