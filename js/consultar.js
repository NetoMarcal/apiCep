let btnConsultar = document.querySelector('#btnConsultar');
let alerta = document.querySelector('#alerta');

function addSpinners(apram) {
    
    
    spinnerLogradouro.classList.add('spinner-border');
    spinnerLogradouro.classList.add('spinner-border-sm');
    
    spinnerComplemento.classList.add('spinner-border');
    spinnerComplemento.classList.add('spinner-border-sm');
    
    spinnerBairro.classList.add('spinner-border');
    spinnerBairro.classList.add('spinner-border-sm');
    
    spinnerCidade.classList.add('spinner-border');
    spinnerCidade.classList.add('spinner-border-sm');
    
    spinnerUf.classList.add('spinner-border');
    spinnerUf.classList.add('spinner-border-sm');
    
}

function removeSpinner() {
    
    spinnerLogradouro.classList.remove('spinner-border');
    spinnerLogradouro.classList.remove('spinner-border-sm');
    
    spinnerComplemento.classList.remove('spinner-border');
    spinnerComplemento.classList.remove('spinner-border-sm');
       
    spinnerBairro.classList.remove('spinner-border');
    spinnerBairro.classList.remove('spinner-border-sm');
    spinnerBairro.classList.remove('text-info'); 
    
    spinnerCidade.classList.remove('spinner-border');
    spinnerCidade.classList.remove('spinner-border-sm');
    
    spinnerUf.classList.remove('spinner-border');
    spinnerUf.classList.remove('spinner-border-sm');
    
}