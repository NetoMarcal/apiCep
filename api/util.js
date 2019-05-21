/**
 * Formata o cep removendo strings
 * @param {string} cep
 * @returns {string}
 */
export const formatCep = cep => VMasker.toNumber(cep)

export const clearFields = () => {
    document.querySelector('#cep').innerHTML = "";
    document.querySelector('#logradouro').innerHTML = "";
    document.querySelector('#complemento').innerHTML = "";
    document.querySelector('#bairro').innerHTML = "";
    document.querySelector('#cidade').innerHTML = "";
    document.querySelector('#uf').innerHTML = "";
}

/**
 * Seta a mensagem de erro
 * @param {string} error
 */
export const setError = error => {
    clearFields()
    if ( error !== "" ) {
        alerta.innerHTML = error;
        alerta.classList.add("alert");
        alerta.classList.add("alert-danger");         
        return
    }

    clearError();
    //removeSpinner();
}

/**
 * Exibe o cep no box
 */
export const showCep = params => {
    const alerta = document.querySelector('#alerta');

    const clearError = () => {
        alerta.innerHTML ="";
        alerta.classList.remove("alert");
        alerta.classList.remove("alert-danger");
    }

    window.setTimeout(() => {
        if ( !params.logradouro ) {
            return setError('CEP inexistente.');
        }
        
        logradouro.innerHTML = params.logradouro;
        complemento.innerHTML = params.complemento;
        bairro.innerHTML = params.bairro;
        cidade.innerHTML = params.localidade;
        uf.innerHTML = params.uf; 
        clearError();
        //removeSpinner();
    }, 500);
}