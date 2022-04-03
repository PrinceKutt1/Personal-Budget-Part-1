# Personal-budget API

Simple Node/Express API to manage a portfolio budget using a budget envelope strategy. Users can create, read, update, and delete envelopes.

## Running the app
To run locally after downloading the Zip folder, run `npm install`, then `npm run start` or `npm index.js`

Once the app is running locally, you can access the API at `http://localhost:4001/envelope`

Request Routes:

## Create Envelope

* Type: POST
* Endpoint: URL/envelope [http://localhost:4001/envelope]
* Query: name: string budget: number

## Get All Envelopes

* Type: GET
* Endpoint: URL/envelope [http://localhost:4001/envelope]


## Fetch Individual Envelope

* Type: GET
* Endpoint: `URL/envelope/:envelopeId`


## Update Individual Income or Expense

* Type: PUT
* Endpoint: `URL/envelope/:envelopeId`


## Delete Individual Envelope

* Type: DELETE
* Endpoint: `URL/envelope/:envelopeId`



## Transfer fund from an Envelope to another

Type: POST
Endpoint: `URL/envelope/{fromId}/transfer/{toId}`

## Resources
`Node.js` is used as the scripting language for the server.
`npm modules` used in the API.
* express, 
* nodemon, 
* uuid,
* body-parser


 


