import React from "react";
import "./MenuBar.css";

class MenuBar extends React.Component {
	
	openNav() {
		document.getElementById("sidenav").style.width = "180px";
		document.getElementById("sidenav").style.left = '40px';
    document.getElementById("walletMain").style.left = "175px";
    document.getElementById("SimpleDealingRates").style.left = "175px";
	}
	closeNav() {
		document.getElementById("sidenav").style.width = "0px";
     document.getElementById("walletMain").style.left = "0px";
    document.getElementById("SimpleDealingRates").style.left = "0px";
		
	}

	render(){
		return (
			
			<div className = 'menubar' id ='menubar'>
				<div id="sidenav" className="sidenav">
            		<span
              		
              			className="closebtn"
              			onClick={this.closeNav.bind(this)}
            		>
              			&times;
            		</span>
            		<span onClick = {this.closeNav.bind(this)}>Apply Now</span>
            		<span onClick = {this.closeNav.bind(this)}>Trading</span>
            		<span onClick = {this.closeNav.bind(this)}>Subscription List</span>
            		<span onClick = {this.closeNav.bind(this)}>Widgets</span>
            		<span onClick = {this.closeNav.bind(this)}>Settings</span>
            		<span onClick = {this.closeNav.bind(this)}>Report</span>
            		<span onClick = {this.closeNav.bind(this)}>Language</span>
            		<span onClick = {this.closeNav.bind(this)}>Trading Settings</span>
            		<span onClick = {this.closeNav.bind(this)}>Help</span>
            		<span onClick = {this.closeNav.bind(this)}>Research</span>
            		<span onClick = {this.closeNav.bind(this)}>Education</span>
            		<span onClick = {this.closeNav.bind(this)}>Market Data</span>
            		<span onClick = {this.closeNav.bind(this)}>Forex Platform</span>
            		<span onClick = {this.closeNav.bind(this)}>Chat</span>
            		<span onClick = {this.closeNav.bind(this)}>Trading Channel</span>
            		<span onClick = {this.closeNav.bind(this)}>Trading status</span>
            		<span onClick = {this.closeNav.bind(this)}>Connection</span>
            		<span onClick = {this.closeNav.bind(this)}>Server</span>
            		<span onClick = {this.closeNav.bind(this)}>Time Zone</span>
            		<span onClick = {this.closeNav.bind(this)}>Server Time</span>
          		</div>
          		<div id="menuBtnn" className="menuBtn" >
              		<span onClick={this.openNav.bind(this)}>
                		&#9776;
              		</span>

            	</div>
            	<div id="menuBtn" className="menuBtn" >
              		<span onClick={this.openNav.bind(this)}>
                		&#9769;
              		</span>

            	</div>
            	<div id="menuBtn" className="menuBtn" >
              		<span onClick={this.openNav.bind(this)}>
                		&#9771;
              		</span>
            	</div>
            	<div id="menuBtn" className="menuBtn" >
              		<span onClick={this.openNav.bind(this)}>
                		&#9768;
              		</span>
            	</div>
            	<div id="menuBtn" className="menuBtn" >
              		<span onClick={this.openNav.bind(this)}>
                		&#9881;
              		</span>
            	</div>
            	<div id="menuBtn" className="menuBtn" >
              		<span onClick={this.openNav.bind(this)}>
                		&#9775;
              		</span>
            	</div>
            	<div id="menuBtnn" className="menuBtn" >
              		<span
                			style={{ fontSize: "30px", cursor: "pointer"  }}
                			onClick={this.openNav.bind(this)}
              		>
                		&#9770;
              		</span>

            	</div>
            	<div id="menuBtn" className="menuBtn" >
              		<span onClick={this.openNav.bind(this)}>
                		&#9771;
              		</span>
            	</div>
            	<div id="menuBtn" className="menuBtn" >
              		<span onClick={this.openNav.bind(this)}>
                		&#9768;
              		</span>
            	</div>
            	<div id="menuBtn" className="menuBtn" >
              		<span onClick={this.openNav.bind(this)}>
                		&#9772;
              		</span>
            	</div>
            	<div id="menuBtn" className="menuBtn" >
              		<span onClick={this.openNav.bind(this)}>
                		&#9775;
              		</span>
            	</div>
            	<div id="menuBtnn" className="menuBtn" >
              		<span onClick={this.openNav.bind(this)}>
						&#9770;
              		</span>

            	</div>
            	<div id="menuBtn" className="menuBtn" >
              		<span onClick={this.openNav.bind(this)}>
                		&#9771;
              		</span>
            	</div>
            	<div id="menuBtn" className="menuBtn" >
              		<span onClick={this.openNav.bind(this)}>
                		&#9768;
              		</span>
            	</div>
            	<div id="menuBtn" className="menuBtn" >
              		<span onClick={this.openNav.bind(this)}>
                		&#9772;
              		</span>
            	</div>
            	<div id="menuBtn" className="menuBtn" >
              		<span onClick={this.openNav.bind(this)}>
                		&#9775;
              		</span>
            	</div>
            	<div id="menuBtnn" className="menuBtn" >
              		<span onClick={this.openNav.bind(this)}>
                		&#9770;
              		</span>

            	</div>
            	<div id="menuBtn" className="menuBtn" >
              		<span onClick={this.openNav.bind(this)}>
                		&#9771;
              		</span>
            	</div>
            	<div id="menuBtn" className="menuBtn" >
              		<span onClick={this.openNav.bind(this)}>
                		&#9768;
              		</span>
            	</div>
            	<div id="menuBtn" className="menuBtn" >
              		<span onClick={this.openNav.bind(this)}>
                		&#9772;
              		</span>
            	</div>
            	<div id="menuBtn" className="menuBtn" >
              		<span onClick={this.openNav.bind(this)}>
                		&#9775;
              		</span>
            	</div>
            	
            	
            	
            	

			</div>
		);
	}
}

export default MenuBar;