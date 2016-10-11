import React from 'react';

const RowGroup = React.createClass({
  render: function() {
    let treeDepth = this.props.treeDepth || 0;
    let marginLeft = treeDepth * 20;

    return (
      <div style={{height: '100%'}}>
        <div style={{float: 'left', width:'10px', height: '100%', backgroundColor: this.props.columnGroupName === 'header1' ? 'green' : 'red'}}></div>
        
        <div style={{position: 'relative', transform: 'translateY(-50%)', top: '50%'}}>
          <span
            className="row-expand-icon"
            style={{float: 'left', marginLeft: marginLeft, cursor: 'pointer'}}
            onClick={this.props.onRowExpandClick}
          >
            {this.props.isExpanded ? String.fromCharCode('9660') : String.fromCharCode('9658')}</span>
          <strong>{this.props.name}</strong>
        </div>
      </div>
      );
    }
});

export default RowGroup;
