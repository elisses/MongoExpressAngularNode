
const express = require('express')

module.exports = function(server) {

    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //rotas da API
    const billingCycleService = require('../api/billingCycle/billingCycleServico')
    billingCycleService.register(router, '/billingCycles')


    // router.route('/teste').get(function(req, res, next) {
    //     res.send('funcionou')
    //
    // })

    const billingSummaryService = require('../api/billingSummary/billingSummaryService')
    router.route('/billingSummary').get(billingSummaryService.getSummary)


}