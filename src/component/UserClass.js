import React from "react";


class UserClass extends React.Component {

  constructor(props){
    super(props); 
    console.log(props);
   
    this.state = {
 
        userInfo:{
           name : "Name",
        location: "default-location"
        }
     }

  }

 async componentDidMount(){
    // console.log("component did mount");
    const data = await fetch("https://api.github.com/users/nikkita07");
    const json =  await data.json();

    this.setState({
        userInfo:json,
    })
    console.log(json);
 }



    render(){
     const {name,location}= this.state.userInfo;

    return (
        <div className="user-card">
    
            <h2>{name}</h2> 
          
            <h3>{location}</h3>
            <h3>Contact: nikkitasingh64@gmail.com</h3>
        </div>
    )
 }
}

export default UserClass;