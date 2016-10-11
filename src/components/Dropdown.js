import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

const Dropdown = React.createClass({
  getInitialState: function(){
    return {
      selectedOption: 'cake'
    };
  },


  render: function() {
  	const { selectedOption } = this.state;

    return (
      <div>
        <DropdownButton title={selectedOption} id="dropdown-size-medium">
          { this.props.value.map((option, i) => (<MenuItem eventKey={i}>{option}</MenuItem>)) }
        </DropdownButton>
      </div>
    );
  }
});

export default Dropdown;
// export default DragTarget;
