angular.module('projectsApp')
.directive('projectsMsg', ['Msg', '$timeout', function(Msg, $timeout){
	return {
		restrict: 'EA',
		replace: true,
		templateUrl: 'templates/components/message/message.html',
		scope: {
		},

		link: function(scope, element, atrs){


	    var init = function(){
	    	scope.isMsgActive = false;
		    scope.message = {};
		    scope.closeTime = null;
		    scope.msgType = null;
	    };

	    var startMsg = function(msg, type){
	    	console.log("alert3", msg, type);
	      $timeout( function(){
	        scope.close();
	        scope.message = msg;
	        scope.isMsgActive = true;

	        if (msg.autoClose){
	          scope.closeTime = $timeout(scope.close, msg.time);
	        }

	        scope.msgType = type;
	      });
	    };

	    scope.close = function(){
	      $timeout.cancel(scope.closeTime);
	      init();
	    };

	    Msg.on('show:alert', function(msg){
	    	console.log('alert2');
	      if (!msg) {return scope.close();}
	      startMsg(msg, "alert");
	    });
		}

	};

}]);