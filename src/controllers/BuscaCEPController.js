const api = require('../services/api');
const validateCEP = require('../util/validateCEP');
const addZero = require('../util/addZero');

module.exports = {
    async show(req, res){
        try{
            const { body } = req

            let stringfyCEP = String(body.cep)
            validateCEP(stringfyCEP)

            let response = await api.get(stringfyCEP)

            while((response.data).hasOwnProperty('error')){
                stringfyCEP = addZero(stringfyCEP)
                response = await api.get(stringfyCEP)
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
        catch(e){
            res.status(400).json({ error: 'CEP Inválido.'})
        }
    }
}