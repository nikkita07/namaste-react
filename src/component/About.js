// import User from "./User";
import React from "react";
import UserClass from "./UserClass";
// import UserContext from "../../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }
  //componentDidMount :
  componentDidMount() {
    // console.log("parent did mount");
  }

  render() {
    // console.log("parent render");
    return (
      <div>
        {/* <div>
          logged In User:
          <UserContext.Consumer>
            {(loggedInUser) => <span>{loggedInUser}</span>}
          </UserContext.Consumer>
        </div> */}
        <h1>About us</h1>
        <h3>this is About class component</h3>
        {/* <User /> */}
        <UserClass />
      </div>
    );
  }
}

export default About;
