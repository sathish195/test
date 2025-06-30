import useCounter from "../../count" 

const  Counter = ()=>{
const { count,increment, decrement, reset } = useCounter(0); 
return(
    <>
    <h1>Count : {count} </h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={reset}>reset</button>
    <h1>sathish</h1>
    </>
)

}

export default Counter

