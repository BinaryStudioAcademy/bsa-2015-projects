angular.module('projectsApp')
.service('Msg', [function(){

  self = this;

  self.message = new EventEmitter();

  self._typeList = ['message', 'warning', 'error'];

  self._prepareMessage = function(params){
    if (!params) {return null;}

    var autoClose = params.autoClose === false ? false : true;
    var type = _.contains(self._typeList, params.type) ? params.type : 'message';
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

  self.message.alert = function(params){
    var msg = self._prepareMessage(params);
    self.message.emitEvent('show:alert', [msg]);
  };

  self.message.confirm = function(params, callback){ 
    var msg = self._prepareMessage(params);
    msg.autoClose = false;
    self.message.emitEvent('show:confirm', [msg, callback]);
  };

  return self.message;

 }]);