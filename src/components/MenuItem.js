import React from 'react';

export default class MenuItem extends React.Component{

	constructor(props){
		super(props);		 
	}

	render(){
		return(
			<div>
				<button className="btn btn-default menu-btn" onClick={this.props.menuItemOnClick}>
				                 <span className="glyphicon glyphicon-plus">&nbsp;</span>
				                 <span style={{paddingLeft:10}}>{this.props.name}</span>
				</button>
				<div style={{height:3}}>&nbsp;</div>
			</div>
		);
	}


}



