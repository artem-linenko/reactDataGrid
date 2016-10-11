import Dropdown from './components/Dropdown';

export const columns = [
	{
	  key: 'header2',
	  name: 'Header2',
	  width : 120,
	  draggable : true
	},
	{
	  key: 'header1',
	  name: 'Header1',
	  width : 120,
	  draggable : true
	},
	{
	  key: 'county',
	  name: 'County',
	  width : 200,
	  draggable: true
	},
	{
	  key: 'suggestions',
	  name: 'Suggestions',
	  width : 200,
	  draggable: true,
	  formatter: Dropdown
	},
	{
	  key: 'firstName',
	  name: 'First Name',
	  width : 200,
	  draggable: true
	}
];