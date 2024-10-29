(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  // To Buy Controller
  
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyCtrl = this; 
  
  toBuyCtrl.bought = function (index) {
    ShoppingListCheckOffService.boughtItems(index); 
  }
  toBuyCtrl.isEmpty = function()
    return ShoppingListCheckOffService.emptyBuy();
}
  
  toBuyCtrl.items = ShoppingListCheckOffService.showBuyItems();
    }
  
  // Already Bought Controller
    
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
 function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtCtrl = this;
    
    boughtCtrl.items = ShoppingListCheckOffService.showBoughtItems();
    
     boughtList.isEmpty = function()
		{
			return ShoppingListCheckOffService.emptyBought();
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
  var boughtItems = [];

   service.boughtItems = function (index) {
    alreadyBought.push(toBuyItems[index]);
    toBuy.splice(index,1);
  }

  service.showtoBuyItems = function () {
    return toBuyItems;
  };

  service.showBoughtItems = function () {
    return boughtItems;
  };
service.emptyBuy = function(){
  if (toBuy.length === 0) {
    return true;
    else return false;
}
     
service.emptyBought = function(){
			if (alreadyBought.length === 0){
				return true;
			}
			else return false;
		}
 
}  
})();
      
    
