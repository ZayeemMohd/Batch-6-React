// tariqa no: 2 (vanilla javascript)
// const h1Elem = document.createElement("h1");
// h1.h1Elem.innerText = "Hello world from javascript"
// h1Elem.setAttribute("id", "h1")

// document.querySelector("body").insertAdjacentElement("beforeend", h1Elem)


    // <div>
    //     <h1></h1>
    //     <h2></h2>
    // </div>

// tariqa no: 3
const h1Elem = React.createElement("h1", {id: "h1-react"}, "Hello world from react");

const h2Elem = React.createElement("h2", {}, "Hello h2")

const parent = React.createElement("div", {}, [h1Elem, h2Elem])




let root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(parent)
