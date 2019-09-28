/**
 * 会话Conversation Class
 */
const Conversation = class Conversation {
  constructor(ctx, name = '') {
    if (!ctx) return null
    this.ctx = ctx
    this.name = name
  }
}

module.exports = Conversation