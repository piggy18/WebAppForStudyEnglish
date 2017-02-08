Wafse_client.Activator.AppBody = function(_appDataManager){
    
    'use strict';

    const appBody = $('#appBody');
    
    let self, appendRender, afterRender, clearPage,
        appDataManager
    ;

    //////////////////////////////////////////////
    //////////////////////////////////////////////
    
    appendRender = function(jQueryObj, __callback){
        appBody.append(jQueryObj).ready(function(){ 
            if (__callback) __callback(self); 
        });    
        return self;
    };

    //////////////////////////////////////////////
    //////////////////////////////////////////////

    afterRender = function(jQueryObj, callback){
        appBody.after(jQueryObj).ready(function(){ 
            if (callback) callback(self); 
        });  
        return self;
    };
    
    //////////////////////////////////////////////
    //////////////////////////////////////////////
    
    clearPage = function(){
        appBody.empty();
        return self;
    };

    //////////////////////////////////////////////
    //////////////////////////////////////////////

    (function constructor () {
        appDataManager = _appDataManager;        
    })();

    //////////////////////////////////////////////
    //////////////////////////////////////////////

    self = { appendRender:appendRender, afterRender:afterRender, clearPage:clearPage };
    return self;
};