import express from "express";
import dotenv from'dotenv';
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
    res.send('API is Running...');
});

app.listen(PORT, () => {
    console.log('Server running on port :', PORT);
});