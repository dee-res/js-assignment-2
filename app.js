(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  // To Buy Controller
  
  ShoppingListCheckOffService.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
    var service = this;
    list.toBuyItems = [
      { item.name: "Cookies", item.quantity: "10"},
      { item.name: "Snickers" , item.quantity: "2"},
      { item.name: "Pears" , item.quantity: "4"},
      { item.name: "Cucumbers" , item.quantity: "5"},
      { item.name: "Apples" , item.quantity: "6"}
      ];
    
    list.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
    
        toBuyItems.buyItem = function(itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
    }
  
  // Already Bought Controller
    
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
 
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var service = this;
    
    list.alreadyBoughtItems = ShoppingListCheckOffService.getAlreadyBoughtItems();
  
  }

list.alreadyBoughtItems = [];

list.buyItem = function (itemIndex) {
  var item = list.toBuyItems.splice(itemIndex, 1)[0];
  list.alreadyBoughtItems.push(item);
};

  }


})();
      
    
