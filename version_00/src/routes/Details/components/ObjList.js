import React from 'react'
import $ from 'jquery'
import { Link } from 'react-router'
import {Grid,Image} from 'react-bootstrap'

class ObjList extends React.Component {
	
	constructor(props){
	    super(props);
	    this.state = {
	    		data: []
	    	
	    }
	    
	  }
		
	loadajax() {
		$.ajax({
		      url: 'http://www.paljaat.fi:8000/api',
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
	
	componentDidMount(){
		
		this.loadajax()
				   
	}
		
	 render() {

		 var rentobjs = this.state.data;
//		 global.OPERATORS_OBJS =this.state.data;
		 var images = [];
		 
		 for  (var i = 0; i <  rentobjs.length; i++) {
			
			 var space = ' ';
			 var arrayOfStrings = rentobjs[i].Moto.split(space);
			 var permlink = "/" +rentobjs[i].Id+"/"+arrayOfStrings[0]+'_'+arrayOfStrings[1]+'.html'
			 
//			 images.push(<li className="media" key={`${i}`}><Link  to={`/${rentobjs[i].Id}/${permlink}`}><div className="media-left"><img src={`http://www.paljaat.fi:8000/img/${rentobjs[i].ImgId}/${rentobjs[i].Img_file_name}/100/150`} /></div></Link><div className="media-body">lssls</div></li>); 
			 images.push(<Link key={`${i}`} to={permlink}><Grid fluid><Image className="boxImageSmall" src={`http://www.paljaat.fi:8000/img/${rentobjs[i].ImgId}/${rentobjs[i].Img_file_name}/100/150`} thumbnail><p className='phone'>{rentobjs[i].Phone}</p><p>{rentobjs[i].Name}</p><p>{rentobjs[i].City}</p></Image></Grid></Link>)
	    	  	 
		 }
		 		 
		 return (
		    <div>
		    	       
		    	{images}
		    	  
		    </div>
		 )
	 	
	 	}
	 }


module.exports = ObjList