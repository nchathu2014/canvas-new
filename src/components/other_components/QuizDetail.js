import React from 'react';

export default class QuizDetail extends React.Component{

	constructor(props){
		super(props);		 
	}

	render(){

		var style={
			width:'90%'
		};

		

		return(
			<div>
				<div className="text-center">
					<h4>Title and Due Date&nbsp;<span className="glyphicon glyphicon-exclamation-sign"></span></h4>
				</div>
				<div className="form-group">
				  <label forHtml="qpTitle" className="fontNormal">
				  	Title<span className="star">*</span>
				  </label>
				  <input type="text" className="form-control" id="qpTitle"/>
				</div>
				<div className="form-group">
				  <label forHtml="qpDueDate" className="fontNormal">
				  	Due date<span className="star">*</span>
				  </label>
				  <input type="password" className="form-control" id="qpDueDate" style={style}/>
				  <span className="glyphicon glyphicon-calendar" style={{position:'relative',top:-25,left:'82%'}}>&nbsp;</span>
				</div>
				<div>
					<button className="btn btn-primary pull-right">Save</button>
				</div>
			</div>
		);
	}
}



