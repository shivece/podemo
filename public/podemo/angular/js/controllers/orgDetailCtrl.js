/**
 * Created by wangg5 on 6/1/15.
 */

(function () {
    'use strict';

    angular.module('ctrpApp')
        .controller('orgDetailCtrl', orgDetailCtrl);

    orgDetailCtrl.$inject = ['$stateParams', 'orgDetailObj'];

    function orgDetailCtrl($stateParams, orgDetailObj) {

        var vm = this;

        vm.orgId = $stateParams.orgId;
        vm.orgName = $stateParams.orgName;

        console.log('received orgDetailObj: ' + JSON.stringify(orgDetailObj));

    }


})();