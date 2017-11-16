(function () {
    'use strict';
    angular.module('app')
        .controller('changepwdCtrl', changepwdCtrl);
    changepwdCtrl.$inject = ['$rootScope', '$scope', '$state', 'toaster', 'MpUserService' ];
    function changepwdCtrl($rootScope, $scope, $state, toaster, sysUserService) {
        $scope.data = {
            newPassword: '',
            oldPassword: ''
        };
        $scope.title = "重置密码";
        $scope.saveData = function () {
            $rootScope.loading = true;
            sysUserService.changePwd($scope.data)
                .then(function () {
                    toaster.pop('success', '', '密码修改成功');
                    $state.go('access.login',{reload:true});
                })
                .finally(function () {
                    $rootScope.loading = false;
                });

        }
    }
})();







