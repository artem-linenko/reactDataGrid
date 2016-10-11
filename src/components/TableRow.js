import React from 'react';
import ReactDataGrid from 'react-data-grid';
import { DragSource } from 'react-dnd';

import { TYPES } from '../constants.js';

const source = {
  beginDrag: function (props) {
    console.log(props);
    return {
      text: props.text
    };
  }
};

const collect = function(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const TableRow = React.createClass({
  getInitialState: function() {
    return {};
  },

  render: function() {
    return this.props.connectDragSource(
      <div style={{border: '1px dashed yellow', height: '30px'}}>
        <ReactDataGrid.Row ref="row" {...this.props}/>
      </div>
    )
  }
});

// export default TableRow;
export default DragSource(TYPES.tableRow, source, collect)(
  TableRow
);
