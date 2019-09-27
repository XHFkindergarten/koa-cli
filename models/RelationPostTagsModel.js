const Sequelize = require('sequelize')
const sequelize = require('../mysql/sequelize')
const Tags = require('./TagsModel')

const RelationPostTags = sequelize.define('relation_post_tags', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  post_id: Sequelize.INTEGER,
  tag_id: Sequelize.INTEGER
},{
  // 不要擅自添加时间戳属性
  timestamps: false,
  // 不要擅自将表名变为复数
  freezeTableName: true
})

RelationPostTags.belongsTo(Tags, { foreignKey: 'tag_id', as: 'tags'})

module.exports = RelationPostTags