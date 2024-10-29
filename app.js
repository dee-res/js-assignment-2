(function (){
  'use strict';

angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// To Buy Controller
	
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var buyList = this; 
  
  buyList.bought = function(index){
    ShoppingListCheckOffService.boughtItems(index); 
  };
  buyList.isEmpty = function(){
    return ShoppingListCheckOffService.emptyBuy();
};
  
  buyList.items = ShoppingListCheckOffService.showbuyItems();
    }
  
  // Already Bought Controller
    
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
 function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtList = this;
    
    boughtList.items = ShoppingListCheckOffService.showBoughtItems();
    
	boughtList.isEmpty = function(){
			return ShoppingListCheckOffService.emptyBought();
		};
	}

  //Service Definition
   function ShoppingListCheckOffService(){
    var service = this;
    var toBuy = [
      { name: "Cookies", quantity: "10"},
      { name: "Snickers", quantity: "2" },
      { name: "Pears", quantity: "4" },
      { name: "Cucumbers", quantity: "5" },
      { name: "Apples", quantity: "6" }
      ];
  
var alreadyBought = [];

service.boughtItems = function(index){
alreadyBought.push(toBuy[index]);
toBuy.splice(index, 1);
  };

  service.showbuyItems = function(){
    return toBuy;
  };

  service.showBoughtItems = function(){
    return alreadyBought;
  };
service.emptyBuy = function(){
 return toBuy.length === 0;
};
     
service.emptyBought = function(){
	return alreadyBought.length === 0;
};
   }
})();
      
    
