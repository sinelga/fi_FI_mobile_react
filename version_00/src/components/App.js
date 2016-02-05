import React from 'react'
import ObjList from './ObjList'
//import $ from 'jquery'

class App extends React.Component {
	constructor(props){
	    super(props);
	    this.state = {
	    		data: []
	    	
	    }
	    
	  }
		
	
	componentWillUpdate(){
		
//		console.log("componentWillUpdate App ")
//		global.OPERATORS_OBJS =this.state.data;
	}
	
	componentDidMount(){
		
//		console.log("mount App ")
				   
	}
	componentWillReceiveProps(){
//		console.log("App  receive props")
		console.log(this.props)
	}
	
	
  render() {
	  
	  
	  
    return (
      <div>
      	          
      	{this.props.children || <ObjList />} 
        
     </div>
    )
  }
}

module.exports = App
