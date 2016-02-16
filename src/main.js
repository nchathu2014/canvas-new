import React from 'react';
import ReactDOM from 'react-dom';
import Canvas from './components/Canvas';


var qpObject=[
						{
							objOne:[{id:100,name:"Nuwan"}]
						},
						{
							objTwo:[{id:101,name:"Chathuranga"}]
						}
			
	    ];	 

ReactDOM.render(
	<Canvas qpObject={qpObject}/>,
	document.getElementById('container')
);




