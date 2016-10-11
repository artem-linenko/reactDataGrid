import React from 'react';
import ReactDataGrid from 'react-data-grid';
import { Draggable } from 'react-data-grid/addons';

const TableHeader = React.createClass({
  render: function() {
    console.log(Draggable.Container)
    return (
      <Draggable.Container>
        <div style={{border: '1px solid red', height: '30px'}}>
          <ReactDataGrid.Header ref="header" {...this.props}/>
        </div>
      </Draggable.Container>
    )
  }
});

export default TableHeader;
