(function (angular) {
    "use strict";

    if (document.location.protocol === "file:") {
        var script = document.createElement("script");
        script.src = "cordova.js";
        document.head.appendChild(script);
        document.addEventListener("deviceready", bootstrap);
    } else {
        angular.element(document)
            .ready(bootstrap);
    }

    function bootstrap() {
        angular.bootstrap(document, ["app"]);
    }
})(angular);
