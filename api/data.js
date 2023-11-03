import { success, error, successMiddleware, errorMiddleware, verifySign } from '../lib/utils.js'
import dotenv from 'dotenv';
dotenv.config();

const key = process.env.user;

//获取用户消息
export const getdata = async (req, res) => {
  try {
    const formData = req.body;
    const name = formData.name;
    if (!name) {
      throw new Error('name cannot be empty');
    }

    // 验证签名
    const isValidSignature = verifySign(formData, key);
    if (!isValidSignature) {
      throw new Error('Invalid signature');
    }
    const data = [];
    res.success(data);
  } catch (error) {
    res.error(error.message);
  }
};