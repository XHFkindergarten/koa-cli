// const router = require('koa-router')()
// 新建路由实例
const Router = require('koa-router')
const router = new Router()


const Posts = require('../models/PostModel')
const Tags = require('../models/TagsModel')
const RelationPostTags = require('../models/RelationPostTagsModel')
// 引入UserModel实例
const User = require('../models/UserModel')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/test1', async ctx => {
  const tags = await RelationPostTags.findAll({
    where: {
      post_id: 181
    },
    attributes: ['id'],
    include: {
      model: Tags,
      as: 'tags'
    }
  })
  ctx.body = {
    tags
  }
})

router.get('/test2', async ctx => {
  ctx.body = {
    msg: 'success'
  }
})

module.exports = router.routes()
