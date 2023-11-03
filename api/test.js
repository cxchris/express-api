import { success, error, successMiddleware, errorMiddleware, verifySign } from '../lib/utils.js'
import dotenv from 'dotenv';
dotenv.config();

const key = process.env.user;

//获取用户消息
const test = async (req, res) => {
    try {
        const data = [];
        res.success(data);
    } catch (error) {
        res.error(error.message);
    }
};

export default test