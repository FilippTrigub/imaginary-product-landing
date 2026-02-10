/**
 * NovaSphere Hello World Script
 * Compatible with both browser and Node environments.
 */
(function () {
    'use strict';

    var greeting = 'Hello, NovaSphere!';

    function sayHello() {
        return greeting;
    }

    function logHello() {
        console.log(greeting);
    }

    var api = {
        sayHello: sayHello,
        logHello: logHello
    };

    if (typeof window !== 'undefined') {
        window.NovaSphere = window.NovaSphere || {};
        window.NovaSphere.Hello = api;
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = api;
    }

    if (typeof require !== 'undefined' && require.main === module) {
        logHello();
    }
})();
