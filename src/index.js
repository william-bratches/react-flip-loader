import React from 'react';
import './flip.css';

/*
TODO: params: { heads, tails, speed, size }
// OR simple mode - just string path and int speed

// improve CSS
*/

class Flip extends React.Component {
  flip() {

  }
  render() {
    return (
      <div id="medallion">
        <div class="heads"></div>
        <div class="tails"></div>
      </div>
    );
  }
}
export default Flip;
