import React from "react"
import ReactDOM from "react-dom/client"

function Root (){
    return <div className="salut">Hello</div>
}
ReactDOM.createRoot(document.querySelector("#root")).render(<Root />)