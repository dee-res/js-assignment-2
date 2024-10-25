(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .factory('ShoppingListFactory' ShoppingListFactory;

  //To Buy Controller
  ToBuyController.$inject = ['ShoppingListFactory'];
  function ToBuyController(ShoppingListFactory) {
    
