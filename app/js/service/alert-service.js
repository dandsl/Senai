angular.module('senai')
    .service('AlertService',AlertService);

AlertService.$inject = ['$growl'];

function AlertService($growl){
    this.showOK = showOK;
    this.showError = showError;
    this.showAlert = showAlert;
    this.showInfo = showInfo;

    function showOK(titulo,mensagem){
        $growl.box(titulo,mensagem, {
            class: 'success', //verde
            timeout: 3000
        }).open();
    }

    function showError(titulo,mensagem){
        $growl.box(titulo,mensagem, {
            class: 'danger', //vermelho
            timeout: 3000
        }).open();
    }

    function showAlert(titulo,mensagem){
        $growl.box(titulo,mensagem, {
            class: 'warning', //larnja
            timeout: 3000
        }).open();
    }

    function showInfo(titulo,mensagem){
        $growl.box(titulo,mensagem, {
            class: 'primary', //azul
            timeout: 3000
        }).open();
    }

}
