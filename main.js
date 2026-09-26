import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => {
  return (
    <div>
      <h1>I am heading</h1>
    </div>
  );
};


function sum(a, b){
  console.log(a + b)
}

sum(2 , 2)
sum()


const Cart = (parms) => {
  // parms = { abcd: iPhone }
  return <div className="cart">
    <h4> {parms.abcd} </h4>
  </div>;
};

function Body() {
  return (
    <div>
      <p>I am para inside body component</p>
      <Cart abcd="iPhone" />
      {/* { abcd: iPhone } */}
      <Cart productName="samsung" />
      <Cart productName="nokia"/>
      <Cart productName="Black berry"/>
    </div>
  );
}

const Footer = () => {
  return (
    <div>
      <h4>I am footer</h4>
      <p>All rights reserved</p>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Heading />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);
