/**
 * 通过mock实现接口再返回随机数据
 */

import Mock from 'mockjs'
import data from './data.json'


//创建接口返回mock数据
//返回商品数据
Mock.mock('/shops_goods',{code:0,data:data.goods})
//返回商家评价数据
Mock.mock('/shops_ratings',{code:0,data:data.ratings})
//返回商家信息数据
Mock.mock('/shops_info',{code:0,data:data.info})