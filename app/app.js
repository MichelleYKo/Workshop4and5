import React from 'react';
import ReactDOM from 'react-dom';

class Feed extends React.Component {
  render() {
    return (

      <div className ="fb-status-update-entry panel panel-default">
      </div>
    );
  }
}

ReactDOM.render(
  <Feed />,
  document.getElementById('fb-feed')
);
