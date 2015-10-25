angular.module('projectsApp')
.service('Msg', [function(){

  var message = new EventEmitter();

  var _typeList = ['message', 'warning', 'error'];

  var _prepareMessage = function(params){
    if (!params) {return null;}

    var autoClose = params.autoClose === false ? false : true;
    var type = _.contains(_typeList, params.type) ? params.type : 'message';
    var msg = {
        text: params.text || "Message from PROJECTS",
        header: params.header || type,
        time: params.time || 10000,
        autoClose: autoClose,
        type: type
      };

    if (typeof params === 'string') {msg.text = params;}

    return msg;

  };

  message.alert = function(params){
    var msg = _prepareMessage(params);
    console.log("alert1", msg, this);
    message.emitEvent('show:alert', [msg]);
  };

  return message;

 }]);