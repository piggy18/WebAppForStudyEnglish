Wafse_client.Renderer.LoginAndCoreateAccount = function(_appBody, _appDataManager, _router){
    
    'use strict';
    
    const defaultHtml_mainNav = $('.defaultHtml.loginAndCoreateAccount#defaultHtml_mainNav').html();
    const defaultHtml_mainContainer = $('.defaultHtml.loginAndCoreateAccount#defaultHtml_mainContainer').html();
    
    let self, renderAll, appBody, renderMainContainer, appDataManager, router,
        mainContainer = Wafse_client.Activator.LoginAndCoreateAccount.MainContainer,
        mainContainerInstance
    ;

    renderMainContainer = function(callback){
        
        // if get htmlTemplate from index.html
        appBody.appendRender(defaultHtml_mainContainer, function(){
            mainContainerInstance = mainContainer(appBody, self, appDataManager, router).activateAll();
            if (callback) callback();        
        });

        // if get htmlTemplate from server
        /*
        $.ajax({
            url: "/htmlTemplates/LoginAndCoreateAccount.html",
            cache: false,
            success: function(defaultHtml_mainContainer){
                appBody.appendRender(defaultHtml_mainContainer, function(){
                    mainContainerInstance = mainContainer(appBody, self, appDataManager).activateAll();
                    if (callback) callback();        
                });
            }
        });
        */
        
        return self;
    };

    //////////////////////////////////////////////
    //////////////////////////////////////////////
    
    renderAll = function(){
        appBody.clearPage();
        renderMainContainer();
        return self;
    };

    //////////////////////////////////////////////
    //////////////////////////////////////////////

    (function constructor (){
        appBody = _appBody;
        appDataManager = _appDataManager;
        router = _router;
    })();
    
    //////////////////////////////////////////////
    //////////////////////////////////////////////
    
    self = {renderAll:renderAll, renderMainContainer:renderMainContainer};
    return self;
};