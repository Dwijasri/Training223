import React from 'react';
const Child=({changeMessage})=>{
    return(
        <button onClick={changeMessage}>Click me</button>
    )
}
export default Child;

// const ChildA=()=>{
//     console.log("Child A rendered")
//     return <h2> This is Child A</h2>
// };
// export default ChildA;

// import {memo} from 'react';
// const ChildA=()=>{
//     console.log("Child A rendered")
//     return <h2>This is Child A</h2>
// };
// export default memo(ChildA);