import React from 'react';
import { DropTarget } from 'react-dnd';
import { TYPES } from '../constants.js';

const target = {
  drop: function(props, monitor) {
  	console.log('props: ', props)
  	return { name: 'tableRow' };
  }
};

const collect = function(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
};

const DragTarget = React.createClass({
  getInitialState: function(){
    return {};
  },


  render: function() {
  	const {connectDropTarget, isOver, canDrop} = this.props;
  	console.log(canDrop)
    return (
    	<div style={{
    		width: '200px',
    		height: '200px',
    		backgroundColor: isOver ? 'rgb(245, 10, 100)' : 'rgb(100, 10, 245)'
    	}}>
    		'DragTarget'
    	</div>
    );
  }
});

// export default DropTarget(TYPES.tableRow, target, collect)(DragTarget);
export default DragTarget;
