(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  //Service Definition
   function ToBuyController(ShoppingListCheckOffService) {
    var service = this;
    list.toBuyItems = [
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


  service.buyItems = function (itemIndex) {
    boughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex, 1);
  };
}  

  // To Buy Controller
  
  ShoppingListCheckOffService.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyCtrl = this; // Use 'this' or a variable assigned to 'this'
  buyCtrl.toBuyItems = ShoppingListCheckOffService.getToBuyItems(); 
  buyCtrl.buyItems = function(itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
    }
  
  // Already Bought Controller
    
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
 
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtCtrl = this;
    
    boughtCtrl.boughtItems = ShoppingListCheckOffService.getAlreadyBoughtItems();
  
  }



})();
      
    
