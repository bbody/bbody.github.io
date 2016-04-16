// app.js
// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes 
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })
        .state('form.introduction', {
            url: '/introduction',
            templateUrl: 'pages/1-form-introduction.html'
        })
        // url will be /form/interests
        .state('form.demographics', {
            url: '/demographics',
            templateUrl: 'pages/2-form-demographics.html'
        })
        .state('form.pregnant', {
            url: '/pregnant',
            templateUrl: 'pages/3-form-pregnant.html'
        })
        .state('form.cough', {
            url: '/cough',
            templateUrl: 'pages/4-form-cough.html'
        })
        .state('form.cold', {
            url: '/cold',
            templateUrl: 'pages/5-form-cold.html'
        })
        .state('form.aches', {
            url: '/aches',
            templateUrl: 'pages/6-form-aches.html'
        })
        .state('form.fever', {
            url: '/fever',
            templateUrl: 'pages/7-form-fever.html'
        })
        .state('form.long', {
            url: '/long',
            templateUrl: 'pages/8-form-long.html'
        })
        .state('form.heart', {
            url: '/heart',
            templateUrl: 'pages/9-form-heart.html'
        })
        .state('form.anti', {
            url: '/anti',
            templateUrl: 'pages/10-form-anti.html'
        })

        .state('form.doctor', {
            url: '/doctor',
            templateUrl: 'end/doctor.html'
        })
        .state('form.pharmacy', {
            url: '/pharmacy',
            templateUrl: 'end/pharmacy.html'
        })
        .state('form.recommendation', {
            url: '/recommendation',
            templateUrl: 'end/recommendation.html'
        })


        
        
        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('form.profile', {
            url: '/profile',
            templateUrl: 'form-profile.html'
        })
        
        // url will be /form/interests
        .state('form.interests', {
            url: '/interests',
            templateUrl: 'form-interests.html'
        })
        
        // url will be /form/payment
        .state('form.payment', {
            url: '/payment',
            templateUrl: 'form-payment.html'
        });
        
    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/form/introduction');
})

// our controller for the form
// =============================================================================
.controller('formController', function($scope, $state, $stateParams) {
    //console.log($state.current.name);
    if (!($state.current.name == "form.introduction" || $state.current.name == "form.demographics")){
        $state.transitionTo('form.introduction');
    }
    // we will store all of our form data in this object
    $scope.formData = {};
    $scope.results = {
        "0":
            [
                {
                "title": "Panadol",
                "image":"panadol.jpg"
                }
            ]
        ,
        "1":
            [
                {
                "title": "Codral Cold & Flu",
                "image":"codral.png"
                }
            ]
        ,
        "2":
            [
                {
                "title": "Pholcodine",
                "image":"pholcodine.jpg"
                },
                {
                "title": "Panadol",
                "image":"panadol.jpg"
                },
                {
                "title": "Oxymetazoline",
                "image":"oxy.jpg"
                }
            ]
        ,
        "3":
            [
                {
                "title": "Sudafed",
                "image":"sudafed.png"
                }
            ]
        

    };
    // function to process the form
    $scope.processForm = function() {

        //$state.href('form.payment');
        var result = {};

        var fm = $scope.formData;
        if (fm["cough"] === "yesc" && 
            fm["heart"] === "no" &&
            (fm["aches"] === "yes" ||
                fm["fever"] === "yes")){
            result = $scope.results["1"];
        } else if (fm["anti"] === "no" &&
            fm["heart"] === "no" &&
            (fm["aches"] === "yes" ||
                fm["fever"] === "yes")){
            result = $scope.results["2"];
        } else if (fm["cough"] === "no" &&
            fm["cold"] === "yesr"){
            result = $scope.results["3"];
        } else if (fm["fever"] === "yes" &&
            fm["cold"] === "yesr"){
            result = $scope.results["0"];
            // Xylo
        } else if (fm["cough"] === "no" &&
            fm["heart"] === "no" &&
            (fm["aches"] === "yes" ||
                fm["fever"] === "yes")){
            result = $scope.results["0"];

            // ???
        } else {
            result = $scope.results["0"];
        }

        //console.log(result);
        //alert('awesome!');
        $scope.recommendations = result;
        $state.transitionTo('form.recommendation');
    };
    
})


.directive('nextButton', function(){
    return {
        restrict: 'AE',
        replace: 'true',
        templateUrl: 'next-button.html',
        link: function (scope, element, attrs) {
           scope.pageLink = attrs.pageLink;
           scope.pageLabel = attrs.pageLabel;
        }
    }
});