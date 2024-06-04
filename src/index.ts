import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port: number = 3000;

// A simple get request
app.get('/', (request: Request, response: Response)=>{
    response.status(200).send("Hello World");

})

// This method listens for a successful connection
app.listen(port, ()=>{
    console.log('Connected successfully on port: ' + port)
})