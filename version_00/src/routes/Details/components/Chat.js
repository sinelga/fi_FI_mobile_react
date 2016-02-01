import React from 'react'
import ReactDOM from 'react-dom'
import Timer from 'react-timer'
//import $ from 'jquery'
//import { Link } from 'react-router'
import {Button,Thumbnail,Grid,Image,Alert,Label  } from 'react-bootstrap'
//import { browserHistory } from 'react-router'
//import ReactDOM from 'react-dom'


//const FADE_DURATION = 200;

class Chat extends React.Component {
	
	constructor(props){
	    super(props);
	    this.state = {
	    		alertVisible: true,
	    		in: true
	    	   	
	    }
//	    this.handleStartChat=this.handleStartChat.bind(this)
	    this.handleAlertDismiss = this.handleAlertDismiss.bind(this)
	    this.handleAlertShow = this.handleAlertShow.bind(this)
	    this.toggle=this.toggle.bind(this)
//	    this.handleToggleDetailsChat=this.handleToggleDetailsChat.bind(this)
	  }
	
	  handleAlertDismiss() {
		    this.setState({alertVisible: false});
		  }

		  handleAlertShow() {
		    this.setState({alertVisible: true});
		  }
	  toggle(){
		  setInterval(
		  	  console.log("toggle")	
//			  var elem = ReactDOM.findDOMNode(this.refs.label_typing);
//			  if (elem.style.visibility ==='hidden'){
//				  
//				  elem.style.visibility =''
//			  } else {
//				  elem.style.visibility ='hidden'
//				  
//			  }
			  ,3000)
			  
		}
	
	  
		componentWillReceiveProps(){
			console.log("Chat componentWillReceiveProps")

		}
		
		componentWillUpdate(prevProps) {
			console.log("Chat componentWillUpdate")	
		}
		
		
		componentDidUpdate(prevProps) {
			
			console.log("Chat componentDidUpdate")
//			setInterval(this.toggle(), 1000);
			
						
	 } 
		  
	componentDidMount(){
		console.log("didmount Chat")

		
//		this.toggle()
		
		   var self = this;
			setInterval(function() {
			
			var elem = ReactDOM.findDOMNode(self.refs.label_typing);
			
			  if (elem.style.visibility ==='hidden'){
			  
			  elem.style.visibility =''
		  } else {
			  elem.style.visibility ='hidden'
			  
		  }			
			
    	}, 3000);
//		
//		this.toggle();	
			
			
//	    // Set the opacity of the element to 0
//	    elem.style.opacity = 0;
//	    window.requestAnimationFrame(function() {
//	        // Now set a transition on the opacity
//	        elem.style.transition = "opacity 250ms";
//	        // and set the opacity to 1
//	        elem.style.opacity = 1;
//	    });
			
//		this.handleAlertDismiss()
		
	}
		  
	 render() {
		 var data = this.props.data	
		 
		 let OPTIONS = { prefix: 'seconds elapsed!', delay: 100}
		 return (
		
			<div>
			<p><a className="mbigphone" href="tel:{data.Phone}"><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span> {data.Phone}</a></p>
			Chat {data.Name} {data.Age}v
				
			<Alert ref='label_typing'>  {data.Name} typing!</Alert>
			
			<p>Hei {data.Name}!</p>
			
			
			
			</div>
		 
		 
		 )
	 }
	 
	 
}

module.exports = Chat