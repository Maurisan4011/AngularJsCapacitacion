angular.module("firstApp").controller("PerfilCtrl", function ($scope) {
  $scope.datos = [
    {
      nombre: "Mario",
      apellido: "Bros",
      id: 01,
      perfil: 3,
      email: 'mimail@gmail.com',
      presentacion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, commodi asperiores. Iste porro molestiae impedit assumenda, voluptas tempore hic qui, magnam saepe rerum fugit nisi tempora, unde explicabo. Iusto, facilis."
    },
    {
      nombre: "Pepe",
      apellido: "Argento",
      id: 002,
      perfil: 4,
      email: 'mimail@gmail.com',
      presentacion:
        "Rerum saepe incidunt rem harum unde ipsa eum nostrum itaque natus eos optio, perspiciatis vel ipsam obcaecati dolorem quibusdam eveniet, laborum pariatur, explicabo repudiandae consequatur quasi. Ad, aut itaque. Debitis."
    },
    {
      nombre: "Goku",
      apellido: "Legend",
      id: 03,
      perfil: 2,
      email: 'mimail@gmail.com',
      presentacion:
        "Obcaecati nisi quidem molestias placeat dolore laboriosam autem nam nostrum. Autem reprehenderit iste eos, quidem doloremque omnis accusantium repellendus tempore, in officiis alias cum. Eum odio aliquid tempora laboriosam sint."
    },
    {
      nombre: "Rebeca",
      apellido: "Rebelde",
      id: 004,
      perfil: 1,
      email: 'mimail@gmail.com',
      presentacion: "No controla sus sentidos"
    },

    {
      nombre: "Fernando",
      apellido: "Molinero",
      id: 005,
      perfil: 2,
      email: 'mimail@gmail.com',
      presentacion: "Pelicula Dibujos Animados "
    },

    {
      nombre: "Sergio",
      apellido: "Nicotina",
      id: 06,
      perfil: 4,
      email: 'mimail@gmail.com',
      presentacion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, commodi asperiores. Iste porro molestiae impedit assumenda, voluptas tempore hic qui, magnam saepe rerum fugit nisi tempora, unde explicabo. Iusto, facilis."
    },
    {
      nombre: "Magui",
      apellido: "Dinamita",
      id: 07,
      perfil: 3,
      email: 'mimail@gmail.com',
      presentacion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, commodi asperiores. Iste porro molestiae impedit assumenda, voluptas tempore hic qui, magnam saepe rerum fugit nisi tempora, unde explicabo. Iusto, facilis."
    },
    {
      nombre: "Diego",
      apellido: "Maradona",
      id: 08,
      perfil: 4,
      email: 'mimail@gmail.com',
      presentacion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, commodi asperiores. Iste porro molestiae impedit assumenda, voluptas tempore hic qui, magnam saepe rerum fugit nisi tempora, unde explicabo. Iusto, facilis."
    },
    {
      nombre: "Rasputin",
      apellido: "Bros",
      id: 09,
      perfil: 1,
      email: 'mimail@gmail.com',
      presentacion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, commodi asperiores. Iste porro molestiae impedit assumenda, voluptas tempore hic qui, magnam saepe rerum fugit nisi tempora, unde explicabo. Iusto, facilis."
    },
    {
      nombre: "Tito",
      apellido: "Pellegrino",
      id: 10,
      perfil: 1,
      email: 'mimail@gmail.com',
      presentacion: "No controla sus sentidos"
    }
  ];

  $scope.perfiles = [{
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

  //Gurada nuevo perfil
  $scope.Guardar = function () {
    $scope.datos.push({ id: $scope.nuevoPerfil.id, nombre: $scope.nuevoPerfil.nombre, apellido: $scope.nuevoPerfil.apellido, perfil: $scope.obtenerPerfildue, email: $scope.nuevoPerfil.email });
    //Para vialualizar denuevo el form
    $scope.formVisibility = false;
    console.log($scope.formVisibility)
  }

  //Visualizar formulario
  $scope.formVisibility = false;

  $scope.ShowForm = function () {
    $scope.formVisibility = true;
    console.log($scope.formVisibility)
  }

  $scope.getDescripcionPerfil = function (perfil) {
    for (let i = 0; i < $scope.perfiles.length; i++) {
      if ($scope.perfiles[i].id == perfil) {
        return $scope.perfiles[i].descripcion;
      }
    }
  };
  $scope.obtenerPerfildue = function (idPerfil) {
    var perfil = '';
    for (var i = 0; i <= $scope.perfiles.length; i++) {
      if ($scope.perfiles[i].id == idPerfil) {
        perfil = $scope.perfiles[i].descripcion;
        break;
      }
    }
    return perfil
  }

  $scope.changeName = function (id) {
    for (let i = 0; i < $scope.datos.length; i++) {
      if ($scope.datos[i].id == id) {
        $scope.datos[i].nombre = $scope.username;
        break;
      }
    }
  };
  //buscador nombre y apellido
  $scope.$watch('search', function (val) {
    $scope.autocomplete = (val && val.length >= 3) ?
      $scope.datos.filter(function (item) {
        return (item['nombre'].toLowerCase().includes(val.toLowerCase()) || item['apellido'].toLowerCase().includes(val.toLowerCase()));
      }) : $scope.datos;
  });


  //buscador Perfiles

  $scope.searchPerfil = function (id) {
    $scope.autocomplete = $scope.datos.filter(function (item) {
      return (item['perfil'] == id);
    });
  }

  $scope.borrarApellido = function (id) {
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
  //mayusculas
  .filter('mayuscula', function () {
    return function (val) {
      return val.charAt(0).toUpperCase() + val.slice(1, -1) + val.charAt(val.length - 1).toUpperCase();
    }


  })





