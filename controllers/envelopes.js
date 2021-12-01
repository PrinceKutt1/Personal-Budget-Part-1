const express = require('express');
const { v4: uuidv4 } = require('uuid');



let envelope = [
    { 
        tittle : "Glossary",
        budget : 1000,
        id:uuidv4()
    },

    {
        tittle : "Transportation",
        budget : 700,
        id:uuidv4()
},

    {
        tittle : "Tuition",
        budget : 1700,
        id:uuidv4()
},
];

//get envelopes
const getEnvelopes= (req, res)=>{
    res.send(envelope);
};

//create envelopes

const createEnvelope = (req,res)=>{
    const envelop = req.body;
    //const envelopeId =  uuidv4(); 
    //const envelopes = { ...envelop, Id : envelopeId }
    //envelope.push(envelopes);
    envelope.push({...envelop, id: uuidv4()});
    res.send(`The envelope, ${envelop.tittle} added to the database successfully`);
};

//get an envelope

const getEnvelope= (req,res)=>{
    const {id} = req.params;
    const foundEnvelope = envelope.find((value)=>value.id == id);

    if(!foundEnvelope){
        return res.status(404).send({message : "No Envelope with such Id",})
  
    };
     
         res.send(foundEnvelope);
};

//delete an envelope

const deleteEnvelope=(req,res)=>{
    const {id} = req.params;
    envelope = envelope.filter((value)=>value.id !== id);
    
   /* if(!envelope){
        return res.status(404).send({message : "Delete unsuccessful, No Envelope with such Id",})
    }*/
    
        res.send(`Envelope with the ${id} deleted successfully`); 
    
};

//update an envelope

const updateEnvelope=(req,res)=>{
    const {id} = req.params;
    const {tittle, budget} = req.body;

    const user = envelope.find((value)=>value.id == id);
    if(tittle){
        user.tittle = tittle
    }
    if(budget){
        user.budget = budget
    }
res.send(`Envelope with the ${id} has been updated`)

};


const transferEnvelope = (fromId, fund, toId) => {
    let envelopFrom = envelope.find((value)=> value.id == fromId);

    let envelopTo = envelope.find((value)=> value.id == toId);
    
    if(!envelopTo || !envelopFrom){
        return 'No envelope with such Id'
    }
    else if(fund > envelopFrom.budget)
    {
        return "Insufficient fund to perform transaction"
        }
    
    else {

        //substract the fund from source envelope
        envelopFrom.budget -= Number(fund)

        //add the fund to destination envelope
        envelopTo.budget += Number(fund)

        return [envelopFrom, envelopTo]
    }
    
    }
  
    const transferFunds= (req, res) => {
        const to = req.params.to
        const amount = req.params.amount
        const from = req.params.from
        const updatedTransfer = transferEnvelope(from, amount, to)
        return res.status(200).send(updatedTransfer);
    };


module.exports = {
 envelope,
 getEnvelope,
 createEnvelope,
 getEnvelopes,
 deleteEnvelope,
 updateEnvelope,
 transferEnvelope,
 transferFunds
};