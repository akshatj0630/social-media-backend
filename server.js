import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import connectDB from './src/db/db.js';

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static('frontend'));

import authRoutes from './src/routes/auth.routes.js';
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
