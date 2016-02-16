import React from 'react';

export default class Header extends React.Component{

	constructor(props){
		super(props);		 
	}

	render(){
		return(
			<div className="row">
				<div className="col-lg-3">
					<h3>&nbsp;&nbsp;&nbsp;&nbsp;Build a Quiz/Poll</h3>
				</div>
				<div className="col-lg-9">
					<span className="pull-right" style={{paddingTop:10,paddingRight:30}}>
						<button className="btn btn-primary" onClick={this._saveExitHandle.bind(this)}>Save and Exit</button>&nbsp;
						<button className="btn btn-default" onClick={this._publishHandle.bind(this)}>Publish</button>
					</span>
				</div>
			</div>
		);
	}

	_saveExitHandle(){
		console.log("_saveExitHandle");
	}

	_publishHandle(){
		console.log("_publishHandle");
	}


}





