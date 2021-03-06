const route = require('express').Router()
const SearchingRecord = require('../models/SearchingRecordModel')
const { verifyToken, isAdmin } = require('../middleware/authenticationVerification')

route.get('/', verifyToken, isAdmin, async (req, res, next) => {
    try {
        const records = await SearchingRecord.find()
        res.status(200).json({ 'message': 'success', records: records })
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: 'faile' })
    }
})

module.exports = route