import { useState } from "react";





const User = () =>{
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(1);
    return (
        <div className="user-card">
            <h1>count:{count}</h1>
            <h1>count:{count2}</h1>
            <h2>name</h2>
            <h3>Location: Hyderabad</h3>
            <h3>Contact: sommething@gmail.com</h3>
        </div>
    )
}
export default User;