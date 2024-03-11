import {useEffect, useState} from 'react'
function Sample(){
    const [name,setName]=useState("Jack");
    const [age,setAge]=useState(25);
    useEffect(()=>{
        console.log("use effect called");
    },[age,name]);
    return(
        <>
        <h1>Your Name is : {name}</h1>
        <h1>Your age is : {age}</h1>
        <button onClick={()=>{setName("Shubham")}}>Change Name</button>
        <button onClick={()=>{setAge(27)}}>Change Age</button>
        </>
    );
}
export default Sample;