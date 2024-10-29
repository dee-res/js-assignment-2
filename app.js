(function () {
  'use strict';

  angular
  .module("ShoppingListCheckOff", [])
  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  // To Buy Controller
  
ToBuyController.$inject = ["ShoppingListCheckOffService"];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyCtrl = this; 
  toBuyCtrl.items = ShoppingListCheckOffService.getToBuyItems(); 
  
  toBuyCtrl.buyItem = function(itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
    }
  
  // Already Bought Controller
    
  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
 function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtCtrl = this;
    
    boughtCtrl.items = ShoppingListCheckOffService.getBoughtItems();
  
  }

  //Service Definition
   function ShoppingListCheckOffService () {
    var service = this;
    var toBuyItems = [
      { name: "Cookies", quantity: "10"},
      { name: "Snickers" , quantity: "2"},
      { name: "Pears" , quantity: "4"},
      { name: "Cucumbers" , quantity: "5"},
      { name: "Apples" , quantity: "6"}
      ];
  var boughtItems = [];

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };


  service.buyItem = function (itemIndex) {
   var item = toBuyItems[itemIndex];
    toBuyItems.splice(itemIndex, 1);
    boughtItems.push(item);
  };
}  
})();
      
    
