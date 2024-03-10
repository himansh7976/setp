import React from "react";
class User extends React.Component{
    render()
    
    {

        console.warn("render method",this.props)
        return(


            <div>
            <hr/>
            <h1>react render method</h1>
                <h2>user components  {this.props.name}</h2>
            </div>
        )
        
    }
} 
export default User;