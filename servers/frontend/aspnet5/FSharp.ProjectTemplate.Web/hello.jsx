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
    
var newName = 'John Smith',
    xhr = new XMLHttpRequest();

    xhr.open('POST',
    encodeURI('http://localhost:8083/api/FSharp.ProjectTemplate.Suave.Program+GreeterSQL/http_test/Greet'));
    xhr.setRequestHeader('Content-Type', 'orleankka/vnd.actor+json');
    xhr.onload = function() {
        if (xhr.status === 200 && xhr.responseText !== newName) {
            var hello =  xhr.responseText;
            this.setState({hello: hello});     
        }
        else if (xhr.status !== 200) {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send(encodeURI('{ "FirstName" : "John", "LastName" : "Rambo"  }'));
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
