const api = require('../services/api');
const validateCEP = require('../util/validateCEP');

module.exports = {
    async show(req, res){
        const { cep } = req.body

        const validatedCEP = validateCEP(cep)

        if(validatedCEP){
            const stringfyCEP = String(cep)

            const response = await api.get(stringfyCEP)
            
            const rua = response.data.logradouro
            const { cidade, bairro, estado } = response.data
            
            return res.json({
                rua,
                cidade,
                bairro,
                estado
            })
        }

        return res.json({validatedCEP})
    }
}