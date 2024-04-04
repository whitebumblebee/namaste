import { useState } from "react";

const User = ({name}) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);
    return (
        <div className="user-card">
            <h1>Count state(function): {count}</h1>
            <button onClick={() => {
                setCount(count + 1);
            }}>Increase count</button>
            <h1>Name: {name}</h1>
            <h2>Designation: Senior Software Engineer</h2>
            <h3>Contact: @__jha_shishir__</h3>
        </div>
    )
}

export default User;