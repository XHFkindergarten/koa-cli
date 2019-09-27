const Sequelize = require('sequelize')
const sequelize = require('../mysql/sequelize')

const Tags = sequelize.define('tags', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  tag_name: Sequelize.STRING(255),
  post_num: Sequelize.INTEGER
},{
  // 不要擅自添加时间戳属性
  timestamps: false,
  // 不要擅自将表名变为复数
  freezeTableName: true
})

module.exports = Tags