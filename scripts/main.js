(function (window) {
  'use strict';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;

  var myTruck = new Truck('ncc-1701', new DataStore());
  window.myTruck = myTruck;
})(window);


(function (window) {
  'use strict';

  var App = window.App || {};
  var launchCount = 0;

  function Spaceship() {
    //
  }

  Spaceship.prototype.blastoff = function () {
    launchCount++;
    console.log('Spaceship launched!');
  };

  Spaceship.prototype.reportLaunchCount = function () {
    console.log('Total number of launches: ' + launchCount);
  };

  App.Spaceship = Spaceship
  window.App = App;

})(window);
