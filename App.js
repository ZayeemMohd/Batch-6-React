import React from "react"
import ReactDOM from "react-dom/client"

const paraElem = React.createElement("p", {}, "I am paragraph tag created using react")
const paraElem1 = React.createElement("p", {}, "I am paragraph tag created using react")
const paraElem2 = React.createElement("p", {}, "I am paragraph tag created using react")


const parentElem = React.createElement("div", {}, [paraElem, paraElem1, paraElem2])

// not a real HTML element => simple simple simple javascript object
// {
//     title: "I am paragraph tag",
//     elementName: "p",
// }

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(parentElem)
