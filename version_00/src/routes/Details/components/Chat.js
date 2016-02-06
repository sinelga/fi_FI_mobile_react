import React from 'react'
import ReactDOM from 'react-dom'
//import $ from 'jquery'
import Uuid from 'node-uuid'
import {Button,Image,Alert,Badge,Input } from 'react-bootstrap'


var t;
var data;
var chatID
var request
//var phone

class Chat extends React.Component {
	
	constructor(props){
	    super(props);
	    this.state = {
	    	count: 0,
	    	ask:'',
	    	nextask: '',
	    	answer:''	
	    	   	
	    }

	    this.toggle=this.toggle.bind(this)
	    this.timerOn=this.timerOn.bind(this)
	    this.timerOff=this.timerOff.bind(this)
	    this.handleSubmit = this.handleSubmit.bind(this)
	    this.handleNextAskChange = this.handleNextAskChange.bind(this)

	  }
	loadajax(url) {
//		xhr = $.ajax({
//		      url: 'http://www.paljaat.fi:8000/chat/'+url,
//		      dataType: 'json',
//		      cache: false,
//		      success: function(data) {
//		        this.setState({answer: data.answer});
//		      }.bind(this),
//		      error: function(xhr, status, err) {
//		        console.error(this.props.url, status, err.toString());
//		      }.bind(this)
//		    });
		
		request = new XMLHttpRequest();
		request.open('GET', 'http://www.paljaat.fi:8000/chat/'+url, true);

		request.onload = function() {
		  if (request.status >= 200 && request.status < 400) {
		    // Success!			  
		    var data = JSON.parse(request.responseText);
//		    this.setState({data: data});
		    this.setState({answer: data.answer});
		    
		  } else {
		    // We reached our target server, but it returned an error

		  }
		}.bind(this);

		request.onerror = function() {
		  // There was a connection error of some sort
		};

		request.send();
	}

	 timerOff(){
		 clearInterval(t);
		 t = 0;
		 this.setState({count:0})
		 
	 }	  
	 timerOn(){
		 
		 var self = this;
		 t =setInterval(function() {
		console.log(self.state.answer)	
		self.setState({count: self.state.count + 1});
			
		}, 3500); 
		 		 
	 }	  
	  toggle(){

			  var elem = ReactDOM.findDOMNode(this.refs.label_typing);
			  if (elem.style.visibility ==='hidden'){
				  
				  elem.style.visibility =''
			  } else {
				  elem.style.visibility ='hidden'
				  
			  }
			  
		}
		  
		componentWillReceiveProps(nextProps){
			console.log("Chat componentWillReceiveProps",nextProps)
						
			data = nextProps.data
			this.setState({ask:'Hei '+data.Name+'!'})
			
			if (nextProps.timerHandler ==='on'){
				ReactDOM.findDOMNode(this.refs.answer).style.display ='none'
				chatID =Uuid.v4()
				let url =chatID+'/'+data.Phone+'/'+encodeURIComponent(this.state.ask)
				console.log(url)
				this.loadajax(encodeURIComponent(url))				
				this.timerOn()
				
			} else {
				console.log("STOP timeR")
				this.timerOff()

			}

		}
		
		componentWillUpdate(prevProps) {
			console.log("Chat componentWillUpdate")
			
			 if (this.state.count > 7 ){
				 
				 ReactDOM.findDOMNode(this.refs.label_typing).style.visibility ='hidden';				
				 ReactDOM.findDOMNode(this.refs.answer).style.display =''
				 this.timerOff()
	 
				 
			 } else if (this.state.count !== 0 ) {
				 
				 this.toggle() 
			 }
			
		}
				
		componentDidUpdate(prevProps, prevState) {
			
//			console.log("Chat componentDidUpdate",prevState)
//			this.toggle()
									
	 } 
	
	componentWillMount(){
		console.log("willmount Chat")
		this.setState({nextask: ''});
		this.setState({ask: ''});
//		ReactDOM.findDOMNode(this.refs.answer).style.display =''
			
	
	}	
		
	componentDidMount(){
		console.log("didmount Chat")
		data = this.props.data
		this.setState({ask:'Hei '+data.Name+'!'})
		var elem = ReactDOM.findDOMNode(this.refs.answer);
		elem.style.display ='none'
				
	}
	
	componentWillUnmount(){
		
		console.log("componentWillUnmount Chat",request)
//		request.abort()
		this. timerOff()
		
	}
		
	 handleSubmit(e) {
		 if (this.state.nextask.length > 0) {
		 e.preventDefault();
		 console.log(this.state.nextask)
		 this.state.ask = this.state.nextask.trim()
		 this.state.nextask =''
		 ReactDOM.findDOMNode(this.refs.answer).style.display ='none'
		 this.timerOn()
		 let url =chatID+'/'+data.Phone+'/'+encodeURIComponent(this.state.ask)
		 console.log(url)
		 this.loadajax(encodeURIComponent(url))
		 }
	 }
	
	 handleNextAskChange(e) {
		    this.setState({nextask: e.target.value});
	 }
	 
	 
	 render() {
		 let data = this.props.data

		 var status = 'odotta'
		 var answer = this.state.answer
		 var ask = this.state.ask
		 	 			 
		 if (this.state.count > 2) {
			 
			 status = 'delivered'
		 }
		 
		 if (this.state.count > 5 ){
			 
			 status = 'seen'
			 
		 }
		 
		 if (this.state.count > 7 ){
			 
			 status = 'typing'			 
		 }
		 	 		 
		 return (
		
			<div>
				<p><a className="mbigphone" href={`tel:${data.Phone}`}><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span>{data.Phone}</a></p>
				
				Chatti: {data.Name} {data.Age}v 
				<Badge ref='label_typing' pullRight>{status}</Badge>
			
				<p></p>						
			    			   
				<Alert>{ask}</Alert> 
				<div ref='answer'> 
					<Alert bsStyle="danger">{answer}</Alert>
					<form onSubmit={this.handleSubmit}>
					<Input type="text" label="Name" placeholder="Kysyä jotain!" value={this.state.nextask} onChange={this.handleNextAskChange}/>
				</form>
				<Button bsStyle="primary" onClick={this.handleSubmit}>Jatkaa</Button>	
				</div>
			</div>
		 
		 
		 )
	 }
	 	 
}

module.exports = Chat