Wafse_client.ComponentCreator.MdlNavigationLink = function(_appDrawer, _appDataManager, _router, _text, _callback){
    
    'use strict';
    
    const htmlTemplate_mdlNavigationLink = $($('.htmlTemplate#htmlTemplate_mdlNavigationLink').clone().html()),
          mdlNavigationLink = htmlTemplate_mdlNavigationLink
    ;
    
    let self, setMdlNavigationLinkText, activateAll, remove,
        appDrawer, appDataManager, router, text, callback
    ;
    
    //////////////////////////////////////////////
    //////////////////////////////////////////////

    setMdlNavigationLinkText = function (str) {
        mdlNavigationLink.text(str);
    };

    //////////////////////////////////////////////
    //////////////////////////////////////////////

    activateAll = function(){
        setMdlNavigationLinkText(text);
        mdlNavigationLink.click(function(){
            if(callback) callback(self);
            // remove();
        });
    };
    
    //////////////////////////////////////////////
    //////////////////////////////////////////////

    remove = function () {
        mdlNavigationLink.remove();
    };
    
    //////////////////////////////////////////////
    //////////////////////////////////////////////

    (function constructor (){
        appDrawer = _appDrawer;
        appDataManager = _appDataManager;
        router = _router;
        text = _text;
        callback = _callback;
        activateAll();
    })();

    //////////////////////////////////////////////
    //////////////////////////////////////////////
    
    self = {jQeryObj:htmlTemplate_mdlNavigationLink, remove:remove};
    return self;
};