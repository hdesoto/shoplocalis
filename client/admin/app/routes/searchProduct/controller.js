
myApp.controller('searchProductController',[function($routeParams, $location, DataService){

  console.log('search Product Controller loaded...')
  var self = this;
  //self.query = $routeParams.query

  function searchProduct() {
    console.log("searchProduct from Controller")
    DataService.searchProducByName(self.query, function(response){
      self.searchResultArray = response
      $location.path('/search/' + self.query)
      console.log(self.searchResultArray)
    })
  }


}])