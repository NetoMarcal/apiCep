
export const getCepData = cep => {
    return new Promise((resolve, reject) => {

        const isValidCEP = (/^\d{8}$/).test(cep)
        if ( !isValidCEP ) {
            return reject('CEP inválido');
        }

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then( response => {
            if (!response.ok) {                
                return reject(response.statusText);
            }
                
            resolve(response.json());
        }).catch( erro => reject(`Formato inválido: ${erro}`) )
    })
}