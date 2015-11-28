var HelloBox = React.createClass({
  getInitialState: function() {
    return {firstName: 'first name', lastName: 'last name', hello: 'Press the button'};
  },  
  handleChangedFirstName: function(event) {
    this.setState({firstName: event.target.value});     
  },  
  handleChangedLastName: function(event) {
    this.setState({lastName: event.target.value});
  },
  handleSubmit: function(event) {
    console.log( this.state.firstName + ' ' + this.state.lastName ) 
    this.setState({hello: 'Hello ' + this.state.firstName + ' ' + this.state.lastName + '!' });
  },  
  componentDidUpdate: function(prevProps, prevState) {
    console.log( prevState.firstName + ' ' + prevState.lastName );
  },
  render: function() {
    return (
      <div className="helloBox">
        Ask when we saw each other for the last time.<br/>
        First name:<input type="text" value={this.state.firstName} onChange={this.handleChangedFirstName} /><br/>     
        Last name:<input type="text" value={this.state.lastName} onChange={this.handleChangedLastName} /><br/>  
        <button type="button" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button><br/>
        <span><b>{this.state.hello}</b></span><br/>
      </div>
    );
  }
});
ReactDOM.render(
  <HelloBox />,
  document.getElementById('container')
);
