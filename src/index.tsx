import React from "react"
import ReactDOM from "react-dom"

export default function App(): JSX.Element {
  return (
    <div>
      HELLO
    </div>
  )
}

const ROOT = document.getElementById('app-root');

ReactDOM.render(<App/>, ROOT)