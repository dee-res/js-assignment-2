(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  // To Buy Controller
  
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this; 
  
  toBuy.bought = function (index) {
    ShoppingListCheckOffService.alreadyBoughtItems(index); 
  }
  toBuy.isEmpty = function()
    return ShoppingListCheckOffService.emptyBuy();
}
  
  toBuy.items = ShoppingListCheckOffService.showtoBuyItems();
    }
  
  // Already Bought Controller
    
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
 function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;
    
    alreadyBought.items = ShoppingListCheckOffService.showalreadyBoughtItems();
    
	alreadyBought.isEmpty = function()
		{
			return ShoppingListCheckOffService.emptyalreadyBought();
		}
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
  var alreadyBoughtItems = [];

   service.alreadyBoughtItems = function (index) {
    alreadyBought.push(toBuyItems[index]);
    toBuy.splice(index,1);
  }

  service.showtoBuyItems = function () {
    return toBuyItems;
  };

  service.showalreadyBoughtItems = function () {
    return alreadyBoughtItems;
  };
service.emptytoBuy = function(){
  if (toBuy.length === 0) {
    return true;
    else return false;
}
     
service.emptyalreadyBought = function(){
			if (alreadyBought.length === 0){
				return true;
			}
			else return false;
		}
 
}  
})();
      
    
