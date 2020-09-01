const api = require('../services/api');
const validateCEP = require('../util/validateCEP');
const addZero = require('../util/addZero');

module.exports = {
    async show(req, res){
        const { body } = req

        if(!body.hasOwnProperty('cep')){
            return res.json({ error: 'CEP Inválido.'})
        }

        let stringfyCEP = String(body.cep)
        const validatedCEP = validateCEP(stringfyCEP)

        if(!validatedCEP){
            return res.json({ error: 'CEP Inválido.'})
        }

        let response = await api.get(stringfyCEP)

        while((response.data).hasOwnProperty('error')){
            stringfyCEP = addZero(stringfyCEP)
            response = await api.get(stringfyCEP)
            console.log(stringfyCEP)
            console.log(response.data)
        }

        const { endereco: rua, bairro, cidade, uf } = response.data

        return res.json({
            cep: stringfyCEP,
            rua,
            bairro,
            cidade,
            uf
        })
    }
}