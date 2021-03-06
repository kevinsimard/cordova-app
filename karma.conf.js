module.exports = function (config) {
    config.set({
        singleRun: true,
        reporters: ["dots", "coverage"],
        browsers: ["PhantomJS"],
        frameworks: ["jasmine"],
        preprocessors: {
            "dev/app/**/*.js": ["coverage"]
        },
        coverageReporter: {
            type: "lcov",
            dir: "test/coverage",
            subdir: "."
        },
        exclude: [
            "dev/app/bootstrap.js"
        ],
        files: [
            "dev/vendors/angular/angular.js",
            "dev/vendors/angular-mocks/angular-mocks.js",
            "dev/vendors/ionic/release/js/ionic.js",
            "dev/vendors/ionic/release/js/ionic-angular.js",
            "dev/vendors/angular-animate/angular-animate.js",
            "dev/vendors/angular-sanitize/angular-sanitize.js",
            "dev/vendors/angular-translate/angular-translate.js",
            "dev/vendors/ui-router/release/angular-ui-router.js",
            "dev/vendors/underscore/underscore.js",
            "dev/app/**/module.js",
            "dev/app/**/*.js",
            "test/specs/**/*.js"
        ]
    });
};
