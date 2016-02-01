import React from 'react'
import $ from 'jquery'
//import { Link } from 'react-router'
import {Button,Thumbnail,Grid,Image  } from 'react-bootstrap'
import { browserHistory } from 'react-router'
import ReactDOM from 'react-dom'
import Chat from './Chat'

class Details extends React.Component {

	constructor(props){
	    super(props);
	    this.state = {
	    	data: []
//	    	currentComponent: React.Component
	    	   	
	    }
//	    this.handleStartChat=this.handleStartChat.bind(this)
	    this.handleToggleDetailsChat=this.handleToggleDetailsChat.bind(this)
	  }
	
	loadajax(id) {
		$.ajax({
		      url: 'http://www.paljaat.fi:8000/api/'+id,
		      dataType: 'json',
		      cache: false,
		      success: function(data) {
		        this.setState({data: data});
		      }.bind(this),
		      error: function(xhr, status, err) {
		        console.error(this.props.url, status, err.toString());
		      }.bind(this)
		    });
		
	}
	
	handleToggleDetailsChat(){
		var dnode = ReactDOM.findDOMNode(this.refs.chat).style.display
		
//		this.setState({currentComponent: "Chat"});
		
		if (dnode === 'none') {
							
			ReactDOM.findDOMNode(this.refs.chat).style.display =''
			ReactDOM.findDOMNode(this.refs.details).style.display ='none'	
			
		} else {
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
//		    require.ensure([], () => {
//		        var Chat = require('./Chat.js');
//		        this.setState({
//		          currentComponent: Chat
//		        });
//		      });
				   
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
	  
	  var id =this.props.params.id 

	  var data = this.state.data
	  var imglink = "http://www.paljaat.fi:8000/img/"+data.ImgId+"/"+data.Img_file_name+"/200/250"
	  
    return (
      <div>
      	<div ref='details'>
      		<button onClick={this.handleReturn} type="button" className="close" data-dismiss="alert" aria-label="Close">
      			<span aria-hidden="true" className="bigclose">&times;</span>
      		</button>
      
      		<a className="mbigphone" href="tel:{data.Phone}"><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span> {data.Phone}</a>
      		<Grid><Image src={imglink} thumbnail></Image><p>{data.Name} {this.state.data.Age}v {data.City}</p><Button onClick={this.handleToggleDetailsChat} bsStyle="primary" bsSize="large" active>Chatti</Button></Grid>
      	</div>
      	
      	<div ref='chat'>
  			<button onClick={this.handleToggleDetailsChat} type="button" className="close" data-dismiss="alert" aria-label="Close">
  				<span aria-hidden="true" className="bigclose">&times;</span>
  			</button>
      	
  			<Chat data={data}/>
  			
      	</div>
      	
      </div>
    )
  }

}

module.exports = Details