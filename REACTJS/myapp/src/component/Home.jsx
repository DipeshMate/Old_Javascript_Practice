import React from "react";

// import react, { useState ,useEffect} from "react";


const Home = ({data}) => {
    
//     const [inputValue, setInputValue] = useState(0);
//    // let inputValue=0; only works in Js
    
//     const btnStyle = {
//         padding: "20px",
//         margin: "5px",
//     }
//     // const increment = ()=> {
//     //     setInputValue(inputValue+1);
//     // }
//     const decrement =()=> {
//         setInputValue(inputValue-1);
//     }

//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         setTimeout(() => {
//             setCount((count) => count + 1 );
//         }, 1000);
//     })
    
//     return (
//         <div>
//             <input style={{
//                 padding: "20px",
//                 backgroundColor: "rgb(22,65,74)",
//                 color: "white",
//             }} type="number" placeholder="Enter any number"
//             value={inputValue}/>
//             <button style={btnStyle} onClick={()=>{ setInputValue(inputValue+1)}}>+</button>
//             <button style={btnStyle} onClick={decrement}>-</button>
//             <h1>I've Rendering {count} times! </h1>
//         </div>
    //     )
    
    // practice of useState()

//     const [a, setA] = useState(0);

  
//     const increment = () => {
//         setA(a > -1 ?a+1:0);
//     }
//     const decrement = () => {
//         setA(a > 0?a-1:0);
//     }

//     useEffect(() => {//it will render when it is mount or add to layout and when its value get update
//         console.log("showingng");
//         return()=>{}
//     },[a])//when a & b value changes then it will run
//     return (
    
//         <div>

//             <button onClick={increment} >Add</button>
//             <p>{a}</p>
//     <button onClick={decrement}>Minus</button>
//         </div>
    // )
    <div>
        <p>
        {data}
        </p>
    </div>

}
export default Home;