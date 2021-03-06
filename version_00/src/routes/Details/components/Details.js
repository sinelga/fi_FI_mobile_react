import React from 'react'
//import $ from 'jquery'
//import { Link } from 'react-router'
import {Button,Thumbnail,Grid,Image  } from 'react-bootstrap'
import { browserHistory } from 'react-router'
import ReactDOM from 'react-dom'
import Chat from './Chat'

class Details extends React.Component {

	constructor(props){
	    super(props);
	    this.state = {
	    	data: [],
	    	timerHandler: ''
	    	   	
	    }
	    this.handleToggleDetailsChat=this.handleToggleDetailsChat.bind(this)
	  }
	
	loadajax(id) {

		let hostname = location.hostname
		
		if (hostname =='127.0.0.1') {
			hostname='www.test.com'
		}
		var request = new XMLHttpRequest();
		request.open('GET', 'http://'+hostname+':8000/api/'+id, true);

		request.onload = function() {
		  if (request.status >= 200 && request.status < 400) {
		    // Success!			  
		    var data = JSON.parse(request.responseText);
		    this.setState({data: data});
		    
		  } else {
		    // We reached our target server, but it returned an error

		  }
		}.bind(this);

		request.onerror = function() {
		  // There was a connection error of some sort
		};

		request.send();
		
	}
	
	handleToggleDetailsChat(){

		var dnode = ReactDOM.findDOMNode(this.refs.chat).style.display
		
		if (dnode === 'none') {
			
			this.setState({timerHandler: 'on'})
			ReactDOM.findDOMNode(this.refs.chat).style.display =''
			ReactDOM.findDOMNode(this.refs.details).style.display ='none'	
			
		} else {
			this.setState({timerHandler: 'off'})
			ReactDOM.findDOMNode(this.refs.chat).style.display ='none'
			ReactDOM.findDOMNode(this.refs.details).style.display =''			
			
		}
		
	}
	
	
	handleReturn(){
		browserHistory.push('/')
		
	}
	
	componentWillMount(){
//		console.log("Willmount Details",this.props.params.id)
		
		this.loadajax(this.props.params.id);
		
		
	}	
	
	componentDidMount(){		
//		console.log("mount Details")
		ReactDOM.findDOMNode(this.refs.chat).style.display ='none'

				   
	}
	
	componentWillReceiveProps(){
//		console.log("componentWillReceiveProps Details")

	}
	
	componentWillUpdate(prevProps) {
//		console.log("componentWillUpdate")	
	}
	
	
	componentDidUpdate(prevProps) {
		
//		console.log("componentDidUpdate")
					
 }
				
  render() {
	  var data = this.state.data
	  let hostname = location.hostname
	  if (hostname =='127.0.0.1') {
			hostname='www.test.com'
	  }
	  
	  var imglink = "http://"+hostname+ ":8000/img/"+data.ImgId+"/"+data.Img_file_name+"/200/250"
	  
    return (
      <div>
		<button onClick={this.handleReturn} type="button" className="close" data-dismiss="alert" aria-label="Close">
			<span aria-hidden="true" className="bigclose">&times;</span>
		</button>
		
      	<div ref='details'>
      
      		<a className="mbigphone" href={`tel:${data.Phone}`}><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span> {data.Phone}</a>
      		<Grid><Image src={imglink} thumbnail></Image><p>{data.Name} {this.state.data.Age}v {data.City}</p><Button onClick={this.handleToggleDetailsChat} bsStyle="primary" bsSize="large" active>Chatti</Button></Grid>
      	</div>
      	
      	<div ref='chat'>
       	
  			<Chat data={data} timerHandler={this.state.timerHandler} />
  			
      	</div>
      	
      </div>
    )
  }

}

module.exports = Details