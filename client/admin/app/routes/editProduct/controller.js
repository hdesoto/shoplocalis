
myApp.controller('editProductController',function($routeParams, $location, DataService, SweetAlert){
  console.log('edit Product Controller loaded...')
  var self = this;
  self.id = $routeParams.id
  console.log(self.id)
  
  DataService.getProduct(self.id, function (response) {
    self.product = response
    self.title= self.product.title
    self.description = self.product.description
    self.price = self.product.price
    self.uom = self.product.uom
    self.stock = self.product.stock
    self.image_url = self.product.image_url
  })

  self.updateProduct = function () {
    console.log("update Product method called")
    self.updatedProduct = {
       title: self.title,
       description: self.description,
       price: self.price,
       uom: self.uom,
       stock: self.stock,
       image_url: self.image_url
    }
    SweetAlert.swal({
       title: "Confirma los nuevos datos?",
       text: "No podrá deshacer los cambios.",
       type: "warning",
       showCancelButton: true,
       confirmButtonColor: "#DD6B55",confirmButtonText: "Confirmar",
       cancelButtonText: "Cancelar",
       closeOnConfirm: false,
       closeOnCancel: false }, 
    function(isConfirm){ 
       if (isConfirm) {
        DataService.updateProduct(self.id, self.updatedProduct, function(response){
        SweetAlert.swal("Actualizado!", "Producto actualizado.", "success")
        $location.path('/')
        })
       } else {
        SweetAlert.swal("Cancelado", "Producto NO actualizado :)", "error");
       }
    })
  }
})
