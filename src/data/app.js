var uiApp = window.uiApp;

uiApp.evt.on('module-demo', 'beforeMount', function () {
    console.log('data.js', 'beforeMount');
    uiApp.router.on(function () {
        var $route = uiApp.router.getRoute();
        console.log('data.js', JSON.stringify($route));
    });
});

var app = new uiApp.constructor();
app.$mount('#app');
