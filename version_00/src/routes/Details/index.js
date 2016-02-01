module.exports = {
		  path: ':id/:moto',
				
//		  getChildRoutes(location, cb) {
//		    require.ensure([], (require) => {
//		      cb(null, [
//		        require('./routes/Details')
//	
//		      ])
//		    })
//		  },

		  getComponents(location, cb) {
		    require.ensure([], (require) => {
		      cb(null, 
		    		  require('./components/Details')
		    		  
		      )
//		        cb(null,{
//		        	chat: require('./components/Chat'),
//		        	main: require('./components/Details'),
//		        	objlist: require('./components/ObjList')
//		        })
		    })
		  }
		}