var LoginDetails = React.createClass({
  getInitialState: function() {
    return {
      value: ""
    };
  },
  
  handleChange: function(evt) {
    this.setState({
      value: evt.target.value
    });
  },
  
  reset: function() {
    this.setState({
      value: ""
    });
  },
  
  alertValue: function() {
    alert(this.state.value);
  },
  
  render: function() {
    return (
	<div>
      <div>
	  <span>EmployeeId:
        <input type="text" value={this.state.value} onChange={this.handleChange} ></input></span>
        </div>
		<div>
		<span>Password:
		 <input type="text" value={this.state.value} onChange={this.handleChange} ></input></span>
		  </div>
		  <div>
		  <button onClick={this.reset}>Reset</button>
        <button onClick={this.alertValue}>Login</button>
    </div></div>
    );
  }
});


React.render(
  <div><LoginDetails /></div>,
  document.body
);
