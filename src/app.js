import { getCepData } from '../api'
import { formatCep, setError, showCep } from '../api/util'

VMasker(document.getElementById("cep")).maskPattern('99.999-999');

const getCep = cep => {
    getCepData(formatCep(cep))
    .then( res => showCep(res) )
    .catch( err => setError(err) )
}

/**
 * Consulta do cep
 */
const btnConsultar = document.querySelector('#btnConsultar');
btnConsultar.addEventListener('click', () => {
    const cep = document.querySelector('#cep')
    getCep(cep.value);
});