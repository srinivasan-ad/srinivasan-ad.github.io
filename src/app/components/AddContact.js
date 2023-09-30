'use client'
import React from "react";



    class AddContact extends React.Component{
        state = {
            name:'',
            number:'',
        };
        
        add = (e) =>{
            (e).preventDefault();
          
            const re = /^[A-Za-z]+$/;
            if(this.state.number === '100'|| this.state.number === '101' || this.state.number === '112'){
             console.log(this.state.number)
            }
            
            else if (this.state.name === '' || this.state.number ==='' || re.test(this.state.number) || this.state.number > 9999999999 || this.state.number < 1000000000){
                alert('Please check and fill all fields again');
                return;
            }
          
            
        this.props.addContactHandler(this.state)
        this.setState({name :'' , number :''});
    }
        render(){
    return(
        <div className="   pt-20 h-[460px] w-full bg-gradient-to-r from-orange-300 to-green-500">
            <h2 className="text-3xl justify-self-start pt-2">ADD CONTACTS</h2>
            <form onSubmit={this.add}>
            <div className="relative mt-8 text-2xl">
                <label >Name</label>
                <br/>
                <input className="mt-4 h-14 w-full border-solid border-8 border-grey-400 " type="text" name="Name" placeholder="Enter name" value={this.state.name} onChange={(e) => this.setState({name:e.target.value})}></input>
                </div>
            <div className="relative mt-4 text-2xl">
            <label>Phone Number</label>
                <br/>
                <input className="mt-4 h-14 w-full border-solid border-8 border-grey-400 " type="text" name="Name" placeholder="Enter Number" value={this.state.number} onChange={(e) => this.setState({number:e.target.value})}></input>
            </div>
            <div className="mt-6 ml-4">
            <button className="bg-cyan-500 h-12 w-14 rounded-xl  text-center">Add</button>
            </div>
            </form>
            </div>
     
        
    );
  }
}

export default  AddContact;
  