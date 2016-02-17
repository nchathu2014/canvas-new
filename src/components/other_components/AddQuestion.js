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
				<div>
					<button className="btn btn-sm btn-primary pull-left">Add question</button>
				</div>
			</div>
		);
	}
}



