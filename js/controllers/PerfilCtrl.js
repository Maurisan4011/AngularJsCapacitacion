angular.module("firstApp").controller("PerfilCtrl", function($scope) {
  $scope.datos = [
    {
      nombre: "Mario",
      apellido: "Bros",
      id: 01,
      perfil: 3,
      email : 'mimail@gmail.com',
      presentacion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, commodi asperiores. Iste porro molestiae impedit assumenda, voluptas tempore hic qui, magnam saepe rerum fugit nisi tempora, unde explicabo. Iusto, facilis."
    },
    {
      nombre: "Pepe",
      apellido: "Argento",
      id: 002,
      perfil: 4,
      email : 'mimail@gmail.com',
      presentacion:
        "Rerum saepe incidunt rem harum unde ipsa eum nostrum itaque natus eos optio, perspiciatis vel ipsam obcaecati dolorem quibusdam eveniet, laborum pariatur, explicabo repudiandae consequatur quasi. Ad, aut itaque. Debitis."
    },
    {
      nombre: "Goku",
      apellido: "Legend",
      id: 03,
      perfil: 2,
      email : 'mimail@gmail.com',
      presentacion:
        "Obcaecati nisi quidem molestias placeat dolore laboriosam autem nam nostrum. Autem reprehenderit iste eos, quidem doloremque omnis accusantium repellendus tempore, in officiis alias cum. Eum odio aliquid tempora laboriosam sint."
    },
    {
      nombre: "Rebeca",
      apellido: "Rebelde",
      id: 004,
      perfil: 1,
      email : 'mimail@gmail.com',
      presentacion: "No controla sus sentidos" 
    },

    {
      nombre: "Fernando",
      apellido: "Molinero",
      id: 005,
      perfil: 2,
      email : 'mimail@gmail.com',
      presentacion: "Pelicula Dibujos Animados "
    },

    {
      nombre: "Sergio",
      apellido: "Nicotina",
      id: 06,
      perfil: 4,
      email : 'mimail@gmail.com',
      presentacion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, commodi asperiores. Iste porro molestiae impedit assumenda, voluptas tempore hic qui, magnam saepe rerum fugit nisi tempora, unde explicabo. Iusto, facilis."
    },
    {
      nombre: "Magui",
      apellido: "Dinamita",
      id: 07,
      perfil: 3,
      email : 'mimail@gmail.com',
      presentacion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, commodi asperiores. Iste porro molestiae impedit assumenda, voluptas tempore hic qui, magnam saepe rerum fugit nisi tempora, unde explicabo. Iusto, facilis."
    },
    {
      nombre: "Diego",
      apellido: "Maradona",
      id: 08,
      perfil: 4,
      email : 'mimail@gmail.com',
      presentacion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, commodi asperiores. Iste porro molestiae impedit assumenda, voluptas tempore hic qui, magnam saepe rerum fugit nisi tempora, unde explicabo. Iusto, facilis."
    },
    {
      nombre: "Rasputin",
      apellido: "Bros",
      id: 09,
      perfil: 1,
      email : 'mimail@gmail.com',
      presentacion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, commodi asperiores. Iste porro molestiae impedit assumenda, voluptas tempore hic qui, magnam saepe rerum fugit nisi tempora, unde explicabo. Iusto, facilis."
    },
    {
      nombre: "Tito",
      apellido: "Pellegrino",
      id: 10,
      perfil: 1,
      email : 'mimail@gmail.com',
      presentacion: "No controla sus sentidos"
    }
  ];

  var perfiles = [{
    id: 1,
    descripcion: 'Full Stack'
  },
  {
    id: 2,
    descripcion: 'Back-end'
  },
  {
    id: 3,
    descripcion: 'Front-end'
  },
  {
    id: 4,
    descripcion: 'Disenador'
  }
  ];

  $scope.obtenerPerfil = function (idPerfil) {
    var perfil = '';
    for (var i = 0; i <= perfiles.length; i++) {
      if (perfiles[i].id == idPerfil) {
        perfil = perfiles[i].descripcion;
        break;
      }
    }
    return perfil
  }
  
  $scope.changeName = function(id) {
    for (let i = 0; i < $scope.datos.length; i++) {
      if ($scope.datos[i].id == id) {
        $scope.datos[i].nombre = $scope.username;
        break;
      }
    }
  };

  $scope.changeName = function(id) {
    for (let i = 0; i < $scope.datos.length; i++) {
      if ($scope.datos[i].id == id) {
        $scope.datos[i].nombre = $scope.username;
        break;
      }
    }
  };

  $scope.borrarApellido = function(id) {
    for (let i = 0; i < $scope.datos.length; i++) {
      if ($scope.datos[i].id == id) {
        $scope.datos[i].apellido = "";
        break;
      }
    }
  };

$scope.editar = function () {
  window.location = "#/editar";
}
})
.filter('mayuscula', function () {
  return function (val) {
    return val.charAt(0).toUpperCase() + val.slice(1, -1) + val.charAt(val.length - 1).toUpperCase();
  }





  $scope.propertyName = 'apellido';
  $scope.reverse = true;
  $scope.datos = orderBy(datos, $scope.propertyName, $scope.reverse);



  $scope.sortBy = function (propertyName) {
    $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    $scope.propertyName = propertyName;
  };

})




