(function () {
    'use strict';

    angular
            .module('gdgfoz.core')
            .factory('w3HttpInterceptor', w3HttpInterceptor);

    // register the interceptor as a service
    /** @ngInject */
    function w3HttpInterceptor($q, $rootScope, $log, $injector) {

        var toastr;
        var service = {
            request: function(request) {                
                request.headers['Authorization'] = 'Bearer ' + window.localStorage.getItem('token');                
                return request;                
            },
            'response': function (response) {
                //hideLoader();
                responseMensage(response.data);
                return response || $q.when(response);
            },
            'responseError': function (rejection) {

                // hideLoader();

                if (rejection.status === 400) {
                    
                    if(rejection.data.error === 'token_invalid' || rejection.data.error === "token_not_provided"){
                        $rootScope.$broadcast('w3HttpInterceptor:loginRequired', rejection);
                    }
                    
                    //Erro de validacao
                    responseMessageValidation(rejection.data);
                } else if (rejection.status === 403) {
                    //Usuario não possui essa permissão
                    $rootScope.$broadcast('w3HttpInterceptor:permissionRequired', rejection);
                } else if (rejection.status === 404) {
                    //Não encontrado
                    $rootScope.$broadcast('w3HttpInterceptor:notFound', rejection);
                    responseMessageNotFound(rejection.data);
                } else if (rejection.status === 401) {
                    //User não logado
                    $rootScope.$broadcast('w3HttpInterceptor:loginRequired', rejection);
                } else if (rejection.status) {
                    //alert(angular.toJson(rejection))
                    $log.error(rejection);
                }

                return $q.reject(rejection);
            }
        };

        return service;

        //-----------------------------------------
        function getToaster() {
            if (!toastr) {
                toastr = $injector.get("toastr");
            }
            return toastr;
        }

        // function showLoader() {
        //   $rootScope.w3Loading = true;
        // }
        //
        // function hideLoader() {
        //   $rootScope.w3Loading = false;
        // }

        function responseMensage(data) {
            if (data.status === "success" && data.message) {
                $log.info(data.message);
                getToaster().success(data.message);
            }
        }

        function responseMessageNotFound(data) {
            if (data.status === "error" && data.error.message) {
                $log.info(data.error.message);
                getToaster().error(data.error.message);
            }
        }

        function responseMessageValidation(data) {

            if (data.status === "error" && data.error.message) {

                if (data.error.validation.length) {

                    var messageTemplate = "<ul>" +
                            "<li>" +
                            data.error.validation.join('</li><li>') +
                            "</li>" +
                            "</ul>";

                    getToaster().error(messageTemplate, data.error.message);

                } else {
                    getToaster().error(data.error.message);
                }

            }

        }

    }

})();
