import React from "react"
import ReactDOM from "react-dom/client"

function Root (){
    return <div className="salut">Hello</div>
}
const r = document.querySelector("#r")
ReactDOM.createRoot(document.querySelector("#root")).render(<Root />)