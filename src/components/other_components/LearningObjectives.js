import React from 'react';

export default class LearningObjectives extends React.Component{

	constructor(props){
		super(props);		 
	}

	render(){

		var btnDrop={
			position:'relative',
			borderTop:'1px #cccccc dotted',
			top:-35,
			left:1
		}

		return(
			<div>
				<div className="text-center">
					<h4>Learning Objectives&nbsp;<span className="glyphicon glyphicon-exclamation-sign"></span></h4>
				</div>
				<div>
					<textarea  rows="10" className="form-control" style={{resize:'none'}}></textarea>
					
					<div className="btn-group" style={btnDrop}>
					 <button  type="button" className="btn btn-sm dropdown-toggle" 
					 	data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					    Add Learning Objective <span className="glyphicon glyphicon-menu-down"></span>
					  </button>
					  <ul className="dropdown-menu">
					    <li><a href="#">Action</a></li>
					    <li><a href="#">Another action</a></li>
					    <li><a href="#">Something else here</a></li>
					    <li role="separator" className="divider"></li>
					    <li><a href="#">Separated link</a></li>
					  </ul>
					</div>  

				</div>
				<div>&nbsp;</div>
				<div>
					<button className="btn btn-primary pull-right">Save</button>
				</div>
			</div>
		);
	}
}



