import express from 'express';
import 'dotenv/config'

const PORT = process.env.PORT || 5050;
const app = express();
import grades from './routes/grades.mjs';

app.use(express.json());

app.use('/grades', grades);
;
app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT)
});