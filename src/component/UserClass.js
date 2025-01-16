import React from "react";


class UserClass extends React.Component {
 
  //creating a constructor to receive the props 
  constructor(props){
    super(props); 
    console.log(props);

 // creating a state variable
 //this state object will contain all the state variables

 this.state = {
    count : 0 ,
    count2: 1
 }
//  console.log("child constructor");
  }

 componentDidMount(){
    // console.log("component did mount");
 }



    render(){
        // console.log("child render");
            //destructuring the state variable
    //   let {count,count2} = this.state;
    return (
        <div className="user-card">
            {/* <h1>
              count : {count}
            </h1> */}
            {/* <button className="btn-user" onClick={()=>{
            //  this.state.count = this.state.count+1; //wrong : cannot modify state variable directly 
            //NOTE: NEVER UPDATE STATE VARIABLE DIRECTLY 
            this.setState({
                count : this.state.count+1,
                count2 : this.state.count2+1
            })
                //this setState(will take an object where the updation works)

                
             console.log(count);
            }}>
                COUNT INCREASE
            </button> */}
            {/* <h1>
              count : {count2}
            </h1> */}
            <h2>{this.props.name}</h2> 
           {/* always have to use this keyword */}
            <h3>Location: Hyderabad</h3>
            <h3>Contact: sommething@gmail.com</h3>
        </div>
    )
 }
}
/*
class based component is a class that has render method 
that return JSX*/

export default UserClass;