import React from 'react';
import faker from 'faker';
import ReactDataGrid from 'react-data-grid';
import logo from '../logo.svg';
import '../App.css';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import RowGroup from './RowGroup';
import { columns } from '../config';
import { Editors, ToolsPanel, Data, Draggable, Formatters } from 'react-data-grid/addons';

var Toolbar = ToolsPanel.AdvancedToolbar;
var GroupedColumnsPanel = ToolsPanel.GroupedColumnsPanel;
var Selectors = Data.Selectors;
var DraggableContainer = Draggable.Container;
faker.locale = 'en_GB';

function createFakeRowObjectData(index) {
  return {
    id: 'id_' + index,
    header1: ['Rupiah', 'Foreign curencies'][Math.floor((Math.random()) + 0.5)],
    header2: ['Pass', 'Special', 'Loss', 'Doubtful'][Math.floor((Math.random() * 3) + 1)],
    county: faker.address.county(),
    suggestions: ['cake', 'ice-cream', 'pie'],
    firstName: faker.name.firstName()
  };
}

function createRows(numberOfRows) {
  var rows = [];
  for (var i = 0; i < numberOfRows; i++) {
    rows[i] = createFakeRowObjectData(i);
  }
  return rows;
}

 var CustomToolbar = React.createClass({
   render() {
     return (
      <div style={{marginBottom: '20px'}}>
        <Toolbar>
          <GroupedColumnsPanel groupBy={this.props.groupBy} onColumnGroupAdded={this.props.onColumnGroupAdded} onColumnGroupDeleted={this.props.onColumnGroupDeleted}/>
        </Toolbar>
      </div>

    );
   }
 });

var Table = React.createClass({
  getInitialState : function(){
    var fakeRows = createRows(30);
    return {rows: fakeRows, groupBy: [], expandedRows: {}};
  },

  getRows: function() {
    var rows = Selectors.getRows(this.state);
    return rows;
  },

  getRowAt : function(index){
    var rows = this.getRows();
    return rows[index];
  },

  getSize : function() {
    return this.getRows().length;
  },

  onColumnGroupAdded: function(colName) {
    var columnGroups = this.state.groupBy.slice(0);
    if(columnGroups.indexOf(colName) === -1) {
      columnGroups.push(colName);
    }
    this.setState({groupBy: columnGroups});
  },
  
  onColumnGroupDeleted: function (name) {
    var columnGroups = this.state.groupBy.filter(function(g){return g !== name});
    this.setState({groupBy: columnGroups});
  },
  
  onRowExpandToggle: function(args){
    var expandedRows = Object.assign({}, this.state.expandedRows);
    expandedRows[args.columnGroupName] = Object.assign({}, expandedRows[args.columnGroupName]);
    expandedRows[args.columnGroupName][args.name] = {isExpanded: args.shouldExpand};
    this.setState({expandedRows: expandedRows});
  },

  render : function() {
    return (
      <div style={{width: '700px', margin: '0 auto'}}>
        <DraggableContainer>
          <ReactDataGrid
            ref='grid'
            enableDragAndDrop={true}
            columns={columns}
            rowGetter={this.getRowAt}
            rowsCount={this.getSize()}
            onRowExpandToggle={this.onRowExpandToggle}
            toolbar={<CustomToolbar groupBy={this.state.groupBy} onColumnGroupAdded={this.onColumnGroupAdded} onColumnGroupDeleted={this.onColumnGroupDeleted}/>}
            minHeight={600}
            // rowRenderer={TableRow}
            rowGroupRenderer={RowGroup}
          />
        </DraggableContainer>
      </div>
    );
  }
});

export default Table;
