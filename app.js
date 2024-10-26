(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  // To Buy Controller
  
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;
    
    toBuyList.items = ShoppingListCheckOffService.getToBuyItems();
    
        toBuyList.buyItem = function(itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
    }
  
  // Already Bought Controller
    
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
 
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBoughtList = this;
    
    alreadyBoughtlist.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
  
  }

  function ShoppingListCheckOffService() {
    var service = this;
    list.toBuyItems = [
      { name: "Cookies", quantity: "10"},
      { name: "Snickers" , quantity: "2"},
      { name: "Pears" , quantity: "4"},
      { name: "Cucumbers" , quantity: "5"},
      { name: "Apples" , quantity: "6"}
      ];

list.alreadyBoughtItems = [];

list.buyItem = function (itemIndex) {
  var item = toBuyItems[itemIndex];
    
 alreadyBoughtItems.push(item);  
  toBuyItems.splice(itemIndex, 1)[0];
};

service.getToBuyItems = function() {
  return toBuyItems;
};

service.getAlreadyBoughtItems = function() {
  return alreadyBoughtItems

service.isgetToBuyItemsEmpty = function () {
  return service.toBuyItems.length == 0;
};

service.isgetAlreadyBoughtItemsempty = function () {
            return service.boughtList.length == 0;
        };
    }

}();
      
    
