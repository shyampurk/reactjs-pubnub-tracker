var json = [
	
    {username: 'anju',	password:'happy', projects:'project1,project2'},
	{username: 'swarna', password:'happy1',projects:'project3,project2'},
    {username: 'pallavi', password:'happy2',projects:'project1,project4'},
    {username: 'chintu', password:'happy3',projects:'project5,project2'}
    
    
    ]
	



var LoginDetails = React.createClass({
  getInitialState: function() {
    return {
      value: ""
    };
  },
  
  setUserName: function(evt) {
    this.setState({
      userName: evt.target.value
     
    });
  },
  setPassword: function(evt) {
    this.setState({
      password: evt.target.value
     
    });
  },
  
  reset: function() {
    this.setState({
      userName: "",
      password:""
      
    });
  },
  
  
  validate: function(){
  var valid = false; 
  

   for(var i=0;i<json.length;i++)
   {
   
 if((this.state.userName==json[i].username) &&  (this.state.password == json[i].password))
  {
  alert(" username matches ");
  valid= true;
  
  }
  
  }
  if(!valid)
  {
  alert("Invalid Username or Password");
    }
  },
  
  
  render: function() {
    return (
	
	<div>
	
      <div>
	  <span>EmployeeId:
        <input type="text" value={this.state.userName} onChange={this.setUserName} ></input></span>
        </div><br/>
		<div>
		<span>Password:
		 <input type="text" value={this.state.password} onChange={this.setPassword} ></input></span>
		  </div>
		  <div>
		  <button onClick={this.reset}>Reset</button>
        <button onClick={this.validate}>Login</button>
		
		
		
           
		

    </div></div>
	
    );
  }
  
  
  
   
});
var projects = React.createClass({
    render: function() {
        return (
            <div >
			<p>Welcome {this.state.userName}</p>
            </div>
        );
    }
});


React.render(
  <div><LoginDetails /></div>,
  document.body
);
