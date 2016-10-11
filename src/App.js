import React, { Component } from 'react';
import TableRow from './components/TableRow';
import Table from './components/Table';
import DragTarget from './components/DragTarget';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

const App = React.createClass({
  render: function() {
    return (
    	<div>
	    	<Table/>
        <DragTarget/>
    	</div>
    );
  }
});

export default DragDropContext(HTML5Backend)(App);
// export default App;
