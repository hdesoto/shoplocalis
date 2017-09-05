/* global myApp */

myApp.controller('newProductController', function ($routeParams, $location, DataService, SweetAlert) {
  console.log('new Product Controller loaded...')
  var self = this

  self.uploadProduct = function () {
    self.newProduct = {
      title: self.title,
      description: self.description,
      price: self.price,
      uom: self.uom,
      stock: self.stock,
      image_url: self.image_url
    }
    SweetAlert.swal({
      title: 'Confirma los datos?',
      text: '',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar',
      closeOnConfirm: false,
      closeOnCancel: false },
    function (isConfirm) {
      if (isConfirm) {
        DataService.createProduct(self.newProduct, function (response) {
          SweetAlert.swal('Creado!', 'Producto creado.', 'success')
          $location.path('/edit_product/' + response)
        })
      } else {
        SweetAlert.swal('Cancelado', 'Producto NO creado :)', 'error')
      }
    })
  }
})
