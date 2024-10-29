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
    ShoppingListCheckOffService.alreadyBought(index); 
  }
  toBuy.isEmpty = function()
    return ShoppingListCheckOffService.emptytoBuy();
}
  
  toBuy.items = ShoppingListCheckOffService.showtoBuy();
    }
  
  // Already Bought Controller
    
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
 function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;
    
    alreadyBought.items = ShoppingListCheckOffService.showalreadyBought();
    
	alreadyBought.isEmpty = function() {
			return ShoppingListCheckOffService.emptyalreadyBought();
		}
	}

  //Service Definition
   function ShoppingListCheckOffService () {
    var service = this;
    var toBuy = [
      { name: "Cookies", quantity: "10"},
      { name: "Snickers" , quantity: "2"},
      { name: "Pears" , quantity: "4"},
      { name: "Cucumbers" , quantity: "5"},
      { name: "Apples" , quantity: "6"}
      ];
  var alreadyBought = [];

   service.alreadyBought = function (index) {
    alreadyBought.push(toBuy[index]);
    toBuy.splice(index,1);
  }

  service.showtoBuy = function () {
    return toBuy;
  };

  service.showalreadyBought = function () {
    return alreadyBought;
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
      
    
