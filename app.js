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
      { name: "Cookies", quantity: "10"},
      { name: "Snickers" , quantity: "2"},
      { name: "Pears" , quantity: "4"},
      { name: "Cucumbers" , quantity: "5"},
      { name: "Apples" , quantity: "6"}
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

list.buyItems = function (itemIndex) {
  var item = list.toBuyItems.splice(itemIndex, 1)[0];
  list.alreadyBoughtItems.push(item);
};

  }


})();
      
    
