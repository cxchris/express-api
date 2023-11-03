import express from 'express';
import { getdata } from '../api/data.js'; // 调整导入路径
import test from '../api/test.js';
const router = express.Router();


const list = [
  { method: 'GET', route: '/data/getdata', handler: getdata },
  { method: 'GET', route: '/', handler: test },
];


// 将 list 数组中的路由信息注册到 Express 路由中
if(list){
	list.forEach(({ method, route, handler }) => {
		if(method){
			router[method.toLowerCase()](route, handler);
		}
	});
}

export default router;
