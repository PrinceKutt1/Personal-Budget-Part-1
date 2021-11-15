const express = require('express');

const router = express.Router();
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

//All routes in here are starting with /envelope
router.get('/', (req,res) =>{
    res.send(envelope);
});

router.post('/', (req,res)=>{
    const envelop = req.body;
    //const envelopeId =  uuidv4(); 
    //const envelopes = { ...envelop, Id : envelopeId }
    //envelope.push(envelopes);
    envelope.push({...envelop, id: uuidv4()});
    res.send(`The envelope, ${envelop.tittle} added to the database successfully`);
});

//Get envelope with an Id

router.get('/:id', (req,res)=>{
    const {id} = req.params;
    const foundEnvelope = envelope.find((value)=>value.id == id);


    /*if(id !== foundEnvelope){
        return res.status(404).send({message : "No Envelope with such Id",})
    };*/
     res.send(foundEnvelope);

     

});
    
     
//Delete envelope with an Id
router.delete('/:id', (req,res)=>{
    const {id} = req.params;
    envelope = envelope.filter((value)=>value.id !== id);
    
    if(id !== envelope){
        return res.status(404).send({message : "Delete unsuccessful, No Envelope with such Id",})
    }

    res.send(`Envelope with the ${id} deleted successfully`); 
    
    
});

router.put('/:id', (req,res)=>{
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

});
    



const transferEnvelope = (from, fund, to) => {
    const fromEnvelopeName = req.body.tittle.from;
    const destinatnEnvelopeName = envelope.tittle.to;
    if (Number(fund) <= fromEnvelopeName.budget) {
      fromEnvelopeName.budget -= Number(fund)
      destinatnEnvelopeName.budget += Number(fund)
      return [destinatnEnvelopeName, fromEnvelopeName]
    } else {
      throw new Error(`You can't move more than ${sourceEnvelope.budget}`)
    }
  }
    
    
    
  router.post('/transfer/:from/:amount/:to', (req, res) => {
    const to = req.params.to
    const amount = req.params.amount
    const from = req.params.from
    const updatedTransfer = transferEnvelope(source, amount, destination)
    return res.status(200).send(updatedTransfer)

    //http://localhost:3000/envelopes/transfer/:from/:to
  })



module.exports = router;