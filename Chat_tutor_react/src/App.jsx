import React from 'react';
import "./App.css"

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function HomePage(){
  const listedItem = products.map((res) => 
  <li key={res.id} style={{color: 'green'}}>
  {res.title}
  </li>)
  return (
    <>
    <div>
      {listedItem}
    </div>
    </>
  )
}

function LogingPage(){
  return (
    <>
    <div>
      Login Page
    </div>
    </>
  )
}

let isLoggedin = true

function logInOut(){
  isLoggedin = !isLoggedin
}

export default function App(){
  return (
    <>
    <div>
      <button onClick={logInOut}>{isLoggedin ? "Log Out" : "Login"}</button>
    </div>
    <div>
      {
        isLoggedin ? <HomePage/> : <LogingPage/>
      }
    </div>
    </>
  )
}
