import React from 'react';

export default class Menu extends React.Component{

	constructor(props){
		super(props);		 
	}

	render(){
		return(
			<div style={{paddingTop:40}}>
				<div className="text-center">{this.props.menuObj.menuTitle}</div>
				<button className="btn btn-default menu-btn" onClick={this._handleOnClick.bind(this)}>
                 <span className="glyphicon glyphicon-plus menu-span">&nbsp;</span>
                 Title*
                </button>

			</div>
		);
	}

	_handleOnClick(){
		$('.rightDiv').removeClass('expandRightDiv');//make the rightSide div to initial width
        $('.viewIcon').removeClass('rotate180Deg');//reset icon into initial state (0 deg)
        $(".popUpModal").css("width",$('.menu-btn').width()+'px'); //make the popup window width relative to menu item width
        $(".popUpModal").hide().show("slide", {direction: "right" }, 300 );//slide animated to popup dialog
        $('.menu-span').addClass('glyphicon glyphicon-pencil');//change menu button icon when its clicked
	}
}



