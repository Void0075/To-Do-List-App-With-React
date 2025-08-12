

function Button(){

    let count = 0;

    const handleClick = (e) => e.target.textContent = "OUCH 🤕"
    
    return(
        <button onDoubleClick={handleClick}>Click Me 😁</button>
    )
}


export default Button