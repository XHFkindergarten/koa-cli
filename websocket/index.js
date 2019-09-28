var Koa = require('koa')
const websocket = require('koa-websocket')
const Conversation = require('./Conversation')

/**
 * Create WebSocket server
 */
var wsOption = {reconnectInterval:1000}
var wsapp = websocket(new Koa(), wsOption)

// 会话列表，用来记录和所有用户的对话，主键为ctx
const conversationList = []

// TODO 这个route.all的作用是什么？？
wsapp.ws.use((ctx) => {

  // 将这个连接放入连接列表
  conversationList.push(new Conversation(ctx))

  // the websocket is added to the context as `ctx.websocket`.
  ctx.websocket.on('open', function() {
    console.log('open websocket')
  })
  ctx.websocket.on('message', function(message) {
    // print message from the client
    console.log(message)
    this.send('收到收到收到')
  });
  ctx.websocket.on('close', function(opt) {
    console.log('close websocket')
  })
});

module.exports = wsapp