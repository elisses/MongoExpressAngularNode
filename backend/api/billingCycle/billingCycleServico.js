const BillingCycle = require('./billingCycle')
const _ = require('lodash')

//expondo os serviços que vão ser utilizados
BillingCycle.methods(['get', 'post', 'put', 'delete'])

//quando for realizar o update vai ser o novo não o antigo
BillingCycle.updateOptions({new:true, runValidators: true})

//tratando error

BillingCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next) {
    const bundle = res.locals.bundle

    if(bundle.errors){
        var errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    }else{
        next()
    }
}

function parseErrors(nodeRestfulErrors) {
    const errors =[]
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
    
}

BillingCycle.route('count', function (req, res, next) {
    BillingCycle.count(function (error, value) {
        if(error){
            res.status(500).json({errors: [error]})
        }else {
            res.json({value})
        }
    })
})


module.exports = BillingCycle