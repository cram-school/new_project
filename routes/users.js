const router = require('koa-router')()

const {users: UsersModel} = require("../model/user");

router.prefix('/users')

router.get('/', async function (ctx, next) {
  const result = await UsersModel.findAll();
  ctx.body = result;
})

router.post('/', async (ctx, next) => {
  const {name, age, sex, address, phone, avatar, wechat_id, wechat_name} = ctx.request.body;
  const [result, created] = await UsersModel.findOrCreate({
    where: {
      wechat_id,
      name,
      wechat_name
    },
    defaults: {
      name, age, sex, address, phone, avatar, wechat_id, wechat_name
    }
  })

  if(created) {
    ctx.body = result
  } else {
    ctx.body = {code: -1, msg: "该用户已存在，请勿重复添加"}
  }
})

router.put('/', async (ctx, next) => {
  const {id, name, age, sex, address, phone, avatar, wechat_id, wechat_name} = ctx.request.body;
  const result = await UsersModel.update({name, age, sex, address, phone, avatar, wechat_id, wechat_name}, {where: {id}});
  if(result.length) {
    const data = await UsersModel.findByPk(id);
    ctx.body = data;
  } else {
    ctx.body = {code: -1, msg: "用户信息编辑失败"}
  }
})

router.delete('/', async (ctx, next) => {
  const {id} = ctx.request.query;
  const result = await UsersModel.destroy({where: {id}});
  !!result && (ctx.body = {code: 1, msg: "删除成功"});
})

module.exports = router
