const express = require('express');
const {envelope,
    getEnvelope,
    createEnvelope,
    getEnvelopes,
    deleteEnvelope,
    updateEnvelope,
    transferEnvelope,
    transferFunds} = require('../controllers/envelopes.js');
const router = express.Router();
//const { v4: uuidv4 } = require('uuid');
//All routes in here are starting with /envelope

router.get('/', getEnvelopes);
router.post('/', createEnvelope);
//Get envelope with an Id
router.get('/:id', getEnvelope);    
//Delete envelope with an Id
router.delete('/:id', deleteEnvelope);
//update an envelope
router.put('/:id', updateEnvelope);
 //transfer funds   
router.post('/transfer/:from/:amount/:to',transferFunds);

module.exports = router;
