import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

import dotenv from 'dotenv'
dotenv.config();

import RecipeController from './controllers/RecipeController';
const Recipe = new RecipeController();

const app = express();

const PORT = process.env.PORT || 5000;
const mongoUri = process.env.mongoUri || 'mongodb://localhost:27017/recipes';

mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/recipes', Recipe.post);

app.get('/recipes', Recipe.get);

app.delete('/recipes/:id', Recipe.delete);

app.listen(PORT, ()=>{
   console.log(`Server is up on ${PORT} port.`)
});