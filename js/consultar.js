let cep = document.querySelector('#cep');
let logradouro = document.querySelector('#logradouro');
let complemento = document.querySelector('#complemento');
let bairro = document.querySelector('#bairro');
let cidade = document.querySelector('#cidade');
let uf = document.querySelector('#uf');
let btnConsultar = document.querySelector('#btnConsultar');
let alerta = document.querySelector('#alerta');

btnConsultar.addEventListener('click', function () {
    addSpinners();
    limpaCampos();
    consultaCep(splitCep());
});

function splitCep() {
    
    let x = cep.value.split('.');
    let y = x.join('');
    let xy = y.split('-');
    let a = xy.join('');

    return a;
}

function consultaCep(cep) {
    
    if (!testeCep()) {
        fetch('https://viacep.com.br/ws/'+cep+'/json/')
        .then(function (response) {
            if (!response.ok) {                
            throw Error(response.statusText);
            }else{
                return response.json();
            }
        }) 
        .then(function (response) {   
            exibeCep(response);             
        })
        .catch(function(erro) {
            setaErro('Formato inválido!');
        })
   }else{
        setaErro("Favor informar o CEP");
   }
}

function exibeCep(params) {

    window.setTimeout(function () {
        if (params.logradouro===undefined) {
            setaErro('CEP inexistente.');
        }
        else {
    
            logradouro.innerHTML = params.logradouro;
            complemento.innerHTML = params.complemento;
            bairro.innerHTML = params.bairro;
            cidade.innerHTML = params.localidade;
            uf.innerHTML = params.uf; 
            limpaErro();
        }
        removeSpinner();
    }, 500);
}

function limpaCampos() {
    
    logradouro.innerHTML = "";
    complemento.innerHTML = "";
    bairro.innerHTML = "";
    cidade.innerHTML = "";
    uf.innerHTML = ""; 
}

function setaErro(params) {
    limpaCampos();   
    if (!params == "") {
        
        alerta.innerHTML = params;
        alerta.classList.add("alert");
        alerta.classList.add("alert-danger");         
    }else{

        limpaErro();
    }
    removeSpinner();
}

function limpaErro() {
    alerta.innerHTML ="";
    alerta.classList.remove("alert");
    alerta.classList.remove("alert-danger");
}

function testeCep() {   
    if (cep.value==="") {
        return true;
    }
    return false;
}

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

