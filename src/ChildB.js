const ChildB=({count, increment})=>{
    console.log("Child B is renedered")
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}> Increment </button>
        </div>
    )
}
export default ChildB;