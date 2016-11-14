(function(){
    angular.module('parallexApp', ['ngMaterial']).controller('mycontroller',function($scope){
   
    angular.element( document.querySelector( '#parallax1' ) ).css("background-color:red");
});
})();
