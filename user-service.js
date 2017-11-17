(function () {
    'use strict';
    angular.module('app')
        .service('MpUserService', SysUserService);
    SysUserService.$inject = ['$http', '$q', 'APP_CONST'];
    function SysUserService($http, $q, APP_CONST) {

        this.retrieve = function retrieve() {
            var d = $q.defer();

            $http.get(APP_CONST.PROPERTY.API_URL + '/mp/user/info')
                .success(function (data) {
                    d.resolve(data);
                })
                .error(function () {
                    d.reject();
                });
            return d.promise;
        };

        this.list = function list(params) {
            var d = $q.defer();
            $http.get(APP_CONST.PROPERTY.API_URL + '/mp/user/list', {
                params: params
            })
                .success(function (data) {
                    d.resolve(data);
                })
                .error(function () {
                    d.reject();
                });
            return d.promise;
        };

        this.deleteById = function deleteById(id) {
            var d = $q.defer();

            $http.delete(APP_CONST.PROPERTY.API_URL + '/mp/user/' + id)
                .success(function (data) {
                    d.resolve(data);
                })
                .error(function () {
                    d.reject();
                });

            return d.promise;
        };

        this.getById = function getById(id) {
            var d = $q.defer();

            $http.get(APP_CONST.PROPERTY.API_URL + '/mp/user/' + id)
                .success(function (data) {
                    d.resolve(data);
                })
                .error(function () {
                    d.reject();
                });

            return d.promise;
        };

        this.saveData = function saveData(data) {
            var d = $q.defer();

            $http.post(APP_CONST.PROPERTY.API_URL + '/mp/user', data)
                .success(function (data) {
                    d.resolve(data);
                })
                .error(function () {
                    d.reject();
                });

            return d.promise;
        };

        this.saveInfo = function saveData(data) {
            var d = $q.defer();

            $http.post(APP_CONST.PROPERTY.API_URL + '/mp/user/info', data)
                .success(function (data) {
                    d.resolve(data);
                })
                .error(function () {
                    d.reject();
                });

            return d.promise;
        };

        this.resetPwd = function saveData(data) {
            var d = $q.defer();

            $http.put(APP_CONST.PROPERTY.API_URL + '/mp/user/password', data)
                .success(function (data) {
                    d.resolve(data);
                })
                .error(function () {
                    d.reject();
                });

            return d.promise;
        };

        this.changePwd = function saveData(data) {
            var d = $q.defer();

            $http.put(APP_CONST.PROPERTY.API_URL + '/mp/user/resetPassword', data)
                .success(function (data) {
                    d.resolve(data);
                })
                .error(function () {
                    d.reject();
                });

            return d.promise;
        };

        this.getAuthUrl = function list() {
            var d = $q.defer();
            $http.post(APP_CONST.PROPERTY.API_URL + '/mp/open/getAuthUrl')
                .success(function (data) {
                    d.resolve(data);
                })
                .error(function () {
                    d.reject();
                });
            return d.promise;
        };

        this.getImage = function getImage() {
            var d = $q.defer();
            $http.post(APP_CONST.PROPERTY.API_URL + '/mp/open/getAppUrl')
                .success(function (data) {
                    d.resolve(data);
                })
                .error(function () {
                    d.reject();
                });
            return d.promise;
        };
        this.checkLoginStatus = function checkLoginStatus(ticket) {
            var d = $q.defer();
            $http.get(APP_CONST.PROPERTY.API_URL + '/mp/employee/scan/login/'+ticket)
                .success(function (data) {
                    d.resolve(data);
                })
                .error(function () {
                    d.reject();
                });
            return d.promise;
        };
        this.mobileLogin = function mobileLogin(mobile) {
            var d = $q.defer();
            $http.get(APP_CONST.PROPERTY.API_URL + '/mp/employee/mobile/login/'+mobile)
                .success(function (data) {
                    d.resolve(data);
                })
                .error(function () {
                    d.reject();
                });
            return d.promise;
        }
    }
})();