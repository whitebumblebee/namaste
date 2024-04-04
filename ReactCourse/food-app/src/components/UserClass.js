import { Component } from "react";

class UserClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            count2: 2
        }
    }

    render() {
        const {name} = this.props;
        const {count} = this.state;
        return (
            <div className="user-card">
                <h1>Count state(class): {count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: count+1
                    })
                }}>Increase count</button>
                <h1>Name: {name}</h1>
                <h2>Designation: Senior Software Engineer</h2>
                <h3>Contact: @__jha_shishir__</h3>
            </div>
        )
    }
};

export default UserClass;