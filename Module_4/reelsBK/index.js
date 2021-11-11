import express from 'express';
import cors from "cors";
import connection from "./db"


const app=express();

app.use(express.json())

let option ={
    origin:'*'
}