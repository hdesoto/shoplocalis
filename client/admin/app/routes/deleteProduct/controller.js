/* global myApp */

myApp.controller('deleteProductController', function ($routeParams, $location, DataService, SweetAlert) {
  // console.log('delete Product Controller loaded...')
  var self = this
  self.id = $routeParams.id
  // console.log(self.id)

  DataService.getProduct(self.id, function (response) {
    self.product = response
  })

  self.deleteProduct = function () {
    console.log('delete Product method called')

    SweetAlert.swal({
      title: 'Eliminar el producto?',
      text: 'No podrá deshacer los cambios.',
      type: 'error',
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      closeOnConfirm: false,
      closeOnCancel: false },
    function (isConfirm) {
      if (isConfirm) {
        DataService.deleteProduct(self.id, function (response) {
          SweetAlert.swal('Hecho!', 'Producto eliminado.', 'success')
          $location.path('/')
        })
      } else {
        SweetAlert.swal('Cancelado', 'Producto NO elimnado :)', 'error')
      }
    })
  }
})
