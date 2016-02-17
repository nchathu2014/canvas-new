import React from 'react';

export default class AddQuestion extends React.Component{

	constructor(props){
		super(props);		 
	}

	render(){
		return(
			<div>
				<div className="text-center">
					<h4>Add Questions&nbsp;<span className="glyphicon glyphicon-exclamation-sign"></span></h4>
				</div>
				<div>
					<p>
						First,play video and pause where you want to insert your question
					</p>
				</div>


				{/*This portioin may be diplaying dynamically*/}
				<div id="MainMenu">
				  <div className="list-group panel">
				    <a href="#demo3" className="list-group-item list-group-item-success" data-toggle="collapse" data-parent="#MainMenu">Item 3</a>
				    
				    <div className="collapse" id="demo3">
				      <a href="#SubMenu1" className="list-group-item" data-toggle="collapse" data-parent="#SubMenu1">Subitem 1 <i className="fa fa-caret-down"></i></a>
				      <div className="collapse list-group-submenu" id="SubMenu1">
				        <a href="#" className="list-group-item" data-parent="#SubMenu1">Subitem 1 a</a>
				        <a href="#" className="list-group-item" data-parent="#SubMenu1">Subitem 2 b</a>
				        <a href="#SubSubMenu1" className="list-group-item" data-toggle="collapse" data-parent="#SubSubMenu1">Subitem 3 c <i className="fa fa-caret-down"></i></a>
				        <div className="collapse list-group-submenu list-group-submenu-1" id="SubSubMenu1">
				          <a href="#" className="list-group-item" data-parent="#SubSubMenu1">Sub sub item 1</a>
				          <a href="#" className="list-group-item" data-parent="#SubSubMenu1">Sub sub item 2</a>
				        </div>
				        <a href="#" className="list-group-item" data-parent="#SubMenu1">Subitem 4 d</a>
				      </div>
				      
				    </div>
	
				  </div>
				</div>

				<div>
					<button className="btn btn-sm btn-primary pull-left">Add question</button>
				</div>
			</div>
		);
	}
}



