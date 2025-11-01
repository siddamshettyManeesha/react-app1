function Render(){
    let fruits=["apple","Banana","mango"]
    return(
        <ul>
            {
                fruits.map((fruit, index)=>(
                    <li key={index}>{fruit}</li>
                ))
            }
        </ul>
    )
}
export default Render;