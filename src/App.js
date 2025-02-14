import React, {useState} from 'react';
import Child from './ChildA.js'

const Parent=()=>{
  const[message,setMessage]=useState('Hello World')

  const changeMessage=()=>{
    setMessage("Clicked the button");
  };

  return(
    <div>
      <h1>{message}</h1>
      <Child changeMessage={changeMessage}/>
    </div>
  )
}

export default Parent;

// import React,{useReducer} from "react";

// function appleReducer(state={count:0, apples:[]},action){
//   switch(action.type){
//     case 'ADD_APPLE':
//       return {count: state.count+1, apples: [...state.apples, 'apple']};
//     case 'EAT_APPLE':
//       if(state.count > 0){
//         return {count: state.count-1, apples: state.apples.slice(0, -1)};
//       }
//       return state;
//     default:
//       return state;
//   }
// }
// function App() {
//   const [state,dispatch]=useReducer(appleReducer,{count:0, apples:[]})
//   return (
//     <div>
//       <h1>Chocolate counter</h1>
//       <p>Number of Chocolates:{state.count}</p>
//       <div>
//         {state.apples.map((apple, index) => (
//           <img key={index} src="https://tse4.mm.bing.net/th?id=OIP.vY9xacRUMHNEXlagqOM9rQHaFH&pid=Api&P=0&h=180"  />
//         ))}
//       </div>
//       <button onClick={()=>dispatch({type:'ADD_APPLE'})}>Add Chocolate</button>
//       <button onClick={()=>dispatch({type:'EAT_APPLE'})}>Eat Chocolate</button>
//     </div>
//   )
// }
// export default App;
// import React, { createContext, useContext } from "react";
// const UserContext = createContext();
// const ProfileWithDrilling = ({ user }) => {
//   return <ProfileDetails user={user} />;
// };

// const ProfileDetails = ({ user }) => {
//   return (
//     <div>
//       <h2>Profile (Prop Drilling)</h2>
//       <p>Name: {user.name}</p>
//       <p>Email: {user.email}</p>
//     </div>
//   );
// };
// const ProfileWithContext = () => {
//   const user = useContext(UserContext);
//   return (
//     <div>
//       <h2>Profile (React Context)</h2>
//       <p>Name: {user.name}</p>
//       <p>Email: {user.email}</p>
//     </div>
//   );
// };

// // App Component
// const App = () => {
//   const user = { name: "Alice", email: "Alice@123" };

//   return (
//     <div>
//       <h1>User Profile App</h1>
//       {/* Prop Drilling Example */}
//       <ProfileWithDrilling user={user} />
//       {/* React Context Example */}
//       <UserContext.Provider value={user}>
//         <ProfileWithContext />
//       </UserContext.Provider>
//     </div>
//   );
// };
// export default App;



// import React,{createContext, use, useContext} from 'react';
// const DataContext=createContext();
// function App(){
//   const data="I am me"
//   return(
//     <DataContext.Provider value={data}>
//       <User1/>
//     </DataContext.Provider>
//   )
// }
// function User1(){
//   return <User2 />
// }
// function User2(){
//   return <User3 />
// }
// function User3(){
//   return <User4 />
// }
// function User4(){
//   const data=useContext(DataContext);
//   return <div>{data}</div>
// }
// export default App; 
// import {useState} from 'react';
// import ChildA from "./ChildA";
// import ChildB from "./ChildB";

// const Parent=()=>{
//   const[count, setCount]=useState(0);
//   const increment=()=>{
//     setCount(c=>c+1);
//   };
//   return(
//     <div>
//       <ChildA/>
//       <ChildB count={count} increment={increment}/>
//     </div>
//   )
// };

// export default Parent;