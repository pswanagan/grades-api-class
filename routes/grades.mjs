import express from "express";
import db from '../db/conn.mjs';
import { ObjectId } from "mongodb";
const router = express.Router();

const BASE_URL = "localhost:5050/grades";

//BASE URL
// localhost:5050/grades/

//Get a single grade entry
router.get('/:id', async (req, res) => {
    let collection = await db.collection("grades");
    let query = {_id: new ObjectId(req.params.id)}
    let result = await collection.findOne(query);

    if (!result) res.send("Not Found").status(404)
    else res.send(result).status(202)
})

router.get('/student/:id', (req, res) => {
   res.redirect(`/learner/${req.params.id}`);
})

// Get grades by Student ID

router.get('/learner/:id', async (req, res) => {
    let collection = await db.collection("grades");
    let query = {learner_id: Number(req.params.id)};
    let result = await collection.find(query).toArray();

    if (!result) res.send("Not Found").status(404)
    else res.send(result).status(202)
})

// Get grades by Class ID
router.get('/class/:id', async (req, res) => {
    let collection = await db.collection("grades");
    let query = {class_id: Number(req.params.id)};
    let result = await collection.find(query).toArray();

    if (!result) res.send("Not Found").status(404)
    else res.send(result).status(202)
})

export default router;