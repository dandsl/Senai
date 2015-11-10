angular.module('senai',['ngMessages','ui.growl']);

angular.module('senai').controller('IndexController', IndexController);

IndexController.$inject = ['$scope', '$filter', 'AlertService'];

function IndexController($scope, $filter, AlertService){
    $scope.entidade = {};
    $scope.listaDePessoas = [];
    $scope.limpar = limpar;
    $scope.salvar = salvar;

    function salvar(){
        if($scope.myForm.$invalid===true){
            AlertService.showAlert('Observe','Verifique os campos invalidos!');
/*            $growl.box('Observe','Verifique os campos invalidos!',{
                class:'danger',
                timeout:3000
            }).open();*/
            return;
        }
        $scope.listaDePessoas.push($scope.entidade);

        //$scope.dataStr = $filter('date')($scope.entidade.nascimento, 'dd/MM/yyyy');

        limpar();

        //alert("Registro salvo com sucesso!!");
/*        $growl.box('Olá','Registro salvo com sucesso!',{
            class:'success',
            timeout:3000
        }).open();*/
        AlertService.showOK('Olá','Registro salvo com sucesso!');


    }
    function limpar(){
        $scope.entidade = {};

    }
}

