Wafse_client.main = function(){

    'use strict';
    
    const appDataManager = Wafse_client.JsonLocalStrageManager('appData', Wafse_client.appDataTemplate, ['LoginAndCoreateAccount']).load(false),
          appBody = Wafse_client.Activator.AppBody(appDataManager),
          appNavigation = Wafse_client.Activator.AppNavigation(appDataManager),
          appDrawer = Wafse_client.Activator.AppDrawer(appDataManager),
          router = Wafse_client.Router(appBody, appNavigation, appDrawer, appDataManager)
    ;
    
    console.log(Wafse_client);

    // debug.
    // const appDataManager = Wafse_client.JsonLocalStrageManager('appData', Wafse_client.appDataTemplate, ['LoginAndCoreateAccount']).load();
    // appDataManager.print().setItem('LoginAndCoreateAccount.userName', '{ueda}').print().save();

    router['/login-and-coreate-account']();
    
    // Wafse_client.Renderer.LoginAndCoreateAccount(appBody, appNavigation, appDrawer, appDataManager, router).renderAll();
    // Wafse_client.Renderer.TextSelectMenu(appBody, appNavigation, appDrawer, appDataManager, router).renderAll();

    /*
    const synthes = new SpeechSynthesisUtterance();
    synthes.text = 'Is this a pen?';
    synthes.lang = 'en-US';
    speechSynthesis.voice = 'Google US English'
    speechSynthesis.speak(synthes);
    */
};

//////////////////////////////////////////////
//////////////////////////////////////////////

$(function(){
    'use strict';
    Wafse_client.main();
});