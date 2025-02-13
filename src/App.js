import React, { createContext, useContext } from "react";
const UserContext = createContext();
const ProfileWithDrilling = ({ user }) => {
  return <ProfileDetails user={user} />;
};

const ProfileDetails = ({ user }) => {
  return (
    <div>
      <h2>Profile (Prop Drilling)</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};
const ProfileWithContext = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h2>Profile (React Context)</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

// App Component
const App = () => {
  const user = { name: "Alice", email: "Alice@123" };

  return (
    <div>
      <h1>User Profile App</h1>
      {/* Prop Drilling Example */}
      <ProfileWithDrilling user={user} />
      {/* React Context Example */}
      <UserContext.Provider value={user}>
        <ProfileWithContext />
      </UserContext.Provider>
    </div>
  );
};
export default App;



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