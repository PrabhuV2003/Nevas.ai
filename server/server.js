import express from "express";
import dotenv from'dotenv';
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";
import subscribeRoutes from "./routes/subscribeRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);
app.use('/api/subscribe', subscribeRoutes)

app.get('/', (req, res) => {
    res.send('API is Running...');
});

app.listen(PORT, () => {
    console.log('Server running on port :', PORT);
});