import React from 'react';
import Header from './Header';
import View from './View';
import MenuWrapper from './MenuWrapper';
import Menu from './Menu';
import MenuItem from './MenuItem';
import MenuLabel from './MenuLabel';


export default class Canvas extends React.Component{

	

	constructor(props){
		super(props);	
	    
	}

	render(){

		
		
		return(

			<div className="container-fluid" style={{marginLeft:'-12px',marginRight:'-12px'}}>
			<link rel="stylesheet" type="text/css" href="css/canvas-style-default.css"/>
				<div className="row">
					<div className="col-lg-12">
						<Header/>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-3">
						<MenuWrapper>
							<Menu>
								<MenuLabel title="QUIZ/POLL DETAIL"/>
								<MenuItem name="Title*" menuItemOnClick={this._menuItemOnClick.bind(this)}/>
								<MenuItem name="Due Date*" menuItemOnClick={this._menuItemOnClick.bind(this)}/>
								<MenuItem name="Learning Objectives" menuItemOnClick={this._menuItemOnClick.bind(this)}/>
								<MenuItem name="Description" menuItemOnClick={this._menuItemOnClick.bind(this)}/>
							</Menu>
							<Menu>
								<MenuLabel title="QUIZ/POLL ACTIVITY"/>
								<MenuItem name="Add Media" menuItemOnClick={this._menuItemOnClick.bind(this)}/>
								<MenuItem name="Add Question" menuItemOnClick={this._menuItemOnClick.bind(this)}/>
							</Menu>
							<Menu>
								<MenuLabel title="SETTINGS"/>
								<MenuItem name="Grading Options" menuItemOnClick={this._menuItemOnClick.bind(this)}/>
							</Menu>
							
						</MenuWrapper>
					</div>
					<div className="col-lg-9 rightDiv">
						<div className="row">
							<div className="col-lg-12">
								<View/>
							</div>	
						</div>					
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

	_menuItemOnClick(){
		$('.rightDiv').removeClass('expandRightDiv');//make the rightSide div to initial width
        $('.viewIcon').removeClass('rotate180Deg');//reset icon into initial state (0 deg)
        $(".popUpModal").css("width",$('.menu-btn').width()+10+'px'); //make the popup window width relative to menu item width
       
        $('.menu-span').addClass('glyphicon glyphicon-pencil');//change menu button icon when its clicked


        if(!$(".popUpModal").is(':visible')){  
 			$(".popUpModal").hide().show("slide", {direction: "right" }, 300 );//slide animated to popup dialog
        }
	}

}






