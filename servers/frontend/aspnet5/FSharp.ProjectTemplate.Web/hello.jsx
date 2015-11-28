var HelloBox = React.createClass({
  render: function() {
    return (
      <div className="helloBox">
        Ask when we saw each other for the last time.
      </div>
    );
  }
});
ReactDOM.render(
  <HelloBox />,
  document.getElementById('container')
);
