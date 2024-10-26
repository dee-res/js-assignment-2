(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .factory('ShoppingListCheckOffService' ShoppingListCheckOffService;

  // To Buy Controller
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var service = ShoppingListCheckOffService;
    var ctrl = this;
    ctrl.list = service.getToBuyList();
        ctrl.isEmpty = service.isToBuyListEmpty;
        ctrl.checkOff = service.checkOff;
    }
  
  // Already Bought Controller
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var service = ShoppingListCheckOffService;
    var ctrl = this;
    ctrl.list = service.getBoughtList();
    ctrl.isEmpty = service.isBoughtListEmpty;
  }

  function ShoppingListCheckOffService() {
    var service = this;

    service.toBuyList = [
{
      name: "Cookies"
      quantity: 10
  },
 {
      name: "Oreos"
      quantity: 10
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
      
    
