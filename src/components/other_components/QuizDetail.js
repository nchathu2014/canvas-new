import React from 'react';

export default class QuizDetail extends React.Component{

	constructor(props){
		super(props);		 
	}

	render(){
		return(
			<div>
				<div className="text-center">
					<h4>Description&nbsp;<span className="glyphicon glyphicon-exclamation-sign"></span></h4>
				</div>
				<div className="form-group">
				  <label forHtml="qpTitle">Title*</label>
				  <input type="text" className="form-control" id="qpTitle"/>
				</div>
				<div className="form-group">
				  <label forHtml="qpSDate">Start date*</label>
				  <input type="password" className="form-control" id="qpSDate"/>
				</div>
				<div className="form-group">
				  <label forHtml="qpEDate">End date*</label>
				  <input type="password" className="form-control" id="qpEDate"/>
				</div>
			</div>
		);
	}
}



