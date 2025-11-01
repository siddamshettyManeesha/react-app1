import React from "react";
class Clas extends React.Component{
    stylep={
        color:"blue",
        backgroundColor:"yellow"
    }
    render(){
        return(
            <div>
                <h1 style={this.stylep}>hello</h1>
            <h1 style={{color:"yellow"}}>World</h1>
            <Fun />
            </div>
        )
    }
}
function Fun(){
    return(
        <h1>ha</h1>
    )
}
export default Clas;