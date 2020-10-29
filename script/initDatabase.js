//initData.js
const users = require('../model/user')
// const order =require('../model/order')
// const order_goods =require('../model/order_goods')
// const goods =require('../model/goods')
// const goods_image =require('../model/goods_image')
// const cart =require('../model/cart')
// const cart_goods =require('../model/cart_goods')
// const categories =require('../model/categories')
// const banners =require('../model/banners')
// const activities =require('../model/activities')
// const hot_goods =require('../model/hot_goods')
// order_goods.sync({force: true});
// order.sync({force: true});
// goods.sync({force: true});
// goods_image.sync({force: true});
// cart.sync({force: true});
// cart_goods.sync({force: true});
// categories.sync({force: true});
// banners.sync({force: true});
// activities.sync({force: true});
// hot_goods.sync({force: true});
users.sync({force: true});
