(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  // To Buy Controller
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var service = ShoppingListCheckOffService;
    var ctrl1 = this;
    ctrl1.list = service.getToBuyList();
        ctrl1.isEmpty = service.isToBuyListEmpty;
        ctrl1.checkOff = service.checkOff;
    }
  
  // Already Bought Controller
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var service = ShoppingListCheckOffService;
    var ctrl2 = this;
    ctrl2.list = service.getBoughtList();
    ctrl2.isEmpty = service.isBoughtListEmpty;
  }

  function ShoppingListCheckOffService() {
    var service = this;

    service.toBuyList = [
{
      name: "Cookies"
      quantity: "10"
  },
 {
      name: "Oreos"
      quantity: "10"
}
];

service.boughtList = [];

service.checkOff = function (itemIndex) {
  var boughtItem = service.toBuyList.splice(itemIndex, 1) [0];
  service.boughtList.push(boughtItem);
};

service.getToBuyList = function() {
  return service.boughtList;
};

service.isToBuyListEmpty = function () {
  return service.toBuyList.length == 0;
};

service.isBoughtListEmpty = function () {
            return service.boughtList.length == 0;
        };
    }

})();
      
    
