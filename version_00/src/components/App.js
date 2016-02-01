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
		
		console.log("componentWillUpdate App ")
//		global.OPERATORS_OBJS =this.state.data;
	}
	
	componentDidMount(){
		
		console.log("mount App ")
		
//		this.loadajax()
				   
	}
	componentWillReceiveProps(){
		console.log("App  receive props")
		console.log(this.props)
	}
	
	
  render() {
	  
	  
//	  const { main, chat } = this.props
//	  
//	  console.log(main)
	  
//	  const { main, sidebar } = this.props
	  
	  
    return (
      <div>
      	          
      	{this.props.children || <ObjList />} 
      
  
     </div>
    )
  }
}

module.exports = App
