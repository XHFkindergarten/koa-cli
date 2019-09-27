const Sequelize = require('sequelize')
const sequelize = require('../mysql/sequelize')
const RelationPostTagsModel = require('./RelationPostTagsModel')

const Posts = sequelize.define('posts', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  title: Sequelize.STRING(255),
  summary: Sequelize.STRING(255),
  content: Sequelize.TEXT,
  label_img: Sequelize.STRING(255),
  cat_id: Sequelize.INTEGER,
  user_id: Sequelize.INTEGER,
  is_valid: Sequelize.INTEGER,
  created_at: Sequelize.INTEGER,
  updated_at: Sequelize.INTEGER
},{
  // 不要擅自添加时间戳属性
  timestamps: false,
  // 不要擅自将表名变为复数
  freezeTableName: true
})


// Posts.belongsTo(RelationPostTagsModel, { foreignKey: 'post_id', as: 'tags'})

module.exports = Posts