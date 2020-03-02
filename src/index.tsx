import React from "react"
import ReactDOM from "react-dom"
import HomePage from "./page/HomePage";

export default function App(): JSX.Element {
  return (
    <HomePage />
  )
}

const ROOT = document.getElementById('app-root');

ReactDOM.render(<App/>, ROOT)