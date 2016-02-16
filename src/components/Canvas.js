import React from 'react';
import Header from './Header';
import View from './View';
import MenuWrapper from './MenuWrapper';
import Menu from './Menu';

export default class Canvas extends React.Component{

	

	constructor(props){
		super(props);	
	    
	}

	render(){
		var menuObj={};
		this.menuObj={
			menuTitle:"QUIZ/POLL DETAIL"
		}



		return(

			<div className="container-fluid">
			<link rel="stylesheet" type="text/css" href="css/canvas-style-default.css"/>
				<div className="row">
					<div className="col-lg-12">
						<Header/>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3">
						<MenuWrapper>
							<Menu menuObj={this.menuObj}/>
						</MenuWrapper>
					</div>
					<div className="col-lg-9 rightDiv">
						<View/>
					</div>
				</div>
				{/*popup modal*/}
                <div className="popUpModal">
                    <button type="button" className="close pull-left"  onClick={this._popUpClose} data-dismiss="modal" aria-hidden="true">×</button>
                </div>
			</div>
		);
	}

	_popUpClose(){

        $(".popUpModal").show().hide("slide", {direction: "right" }, 300 );//slide animated to popup dialog
	}
}





