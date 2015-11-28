var HelloBox = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },  
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },  
  render: function() {
    return (
      <div className="helloBox">
        Ask when we saw each other for the last time.<br/>
        First name:<input type="text" value={this.value} onChange={this.handleChange} /><br/>     
        Last name:<input type="text" value={this.value} onChange={this.handleChange} /><br/>  
      </div>
    );
  }
});
ReactDOM.render(
  <HelloBox />,
  document.getElementById('container')
);
