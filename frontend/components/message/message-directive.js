angular.module('projectsApp')
.directive('projectsMsg', ['Msg', '$timeout', function(Msg, $timeout){
	return {
		restrict: 'EA',
		replace: true,
		templateUrl: 'templates/components/message/message.html',
		scope: {
		},

		link: function(scope, element, atrs){

			var confirmCallback = function(){};

	    var init = function(){
	    	scope.isMsgActive = false;
		    scope.message = {};
		    scope.closeTime = null;
		    scope.msgType = null;
	    };

	    var startMsg = function(msg, type){
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

	    scope.rejectConfirm = function(){
	      scope.close();
	      confirmCallback(false);
	    };

	    scope.acceptConfirm = function(){
	      scope.close();
	      confirmCallback(true);
	    };

	    scope.close = function(){
	      $timeout.cancel(scope.closeTime);
	      init();
	    };

	    Msg.on('show:alert', function(msg){
	      if (!msg) {return scope.close();}
	      startMsg(msg, "alert");
	    });

	    Msg.on('show:confirm', function(msg, callback){
	      msg.autoClose = false;
	      startMsg(msg, "confirm");
	      confirmCallback = callback;
	    });
		}

	};

}]);