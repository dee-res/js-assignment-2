(function (){
  'use strict';

angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// To Buy Controller
	
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var toBuyList = this; 
  
  toBuyList.bought = function(index){
    ShoppingListCheckOffService.alreadyBoughtItems(index); 
  }
  toBuyList.isEmpty = function(){
    return ShoppingListCheckOffService.emptyToBuy();
}
  
  toBuyList.items = ShoppingListCheckOffService.showToBuyItems();
    }
  
  // Already Bought Controller
    
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
 function AlreadyBoughtController(ShoppingListCheckOffService){
    var alreadyBoughtList = this;
    
    alreadyBoughtList.items = ShoppingListCheckOffService.showAlreadyBoughtItems();
    
	alreadyBoughtList.isEmpty = function(){
			return ShoppingListCheckOffService.emptyAlreadyBought();
		}
	}

  //Service Definition
   function ShoppingListCheckOffService(){
    var service = this;
    var toBuy = [
      { name: "Cookies", quantity: "10"},
      { name: "Snickers" , quantity: "2"},
      { name: "Pears" , quantity: "4"},
      { name: "Cucumbers" , quantity: "5"},
      { name: "Apples" , quantity: "6"}
      ];
  var alreadyBought = [];

   service.alreadyBoughtItems = function(index){
    alreadyBought.push(toBuy[index]);
    toBuy.splice(index,1);
  }

  service.showToBuyItems = function(){
    return toBuy;
  };

  service.showAlreadyBoughtItems = function(){
    return alreadyBought;
  };
service.emptyToBuy = function(){
  if (toBuy.length === 0) {
    return true;
    else {
	  return false;
}
     
service.emptyAlreadyBought = function(){
			if (alreadyBought.length === 0){
				return true;
			}
			else {
				return false;
		}
 
}  
})();
      
    
