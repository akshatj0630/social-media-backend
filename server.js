import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static('frontend'));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
