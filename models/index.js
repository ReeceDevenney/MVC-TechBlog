const User = require('./User')
const Post = require('./Post')
const Comment = require('./Comment')

User.hasMany(Post, {
    foreignKey: 'user_id'
})

Post.belongsTo(User, {
    foreginKey: 'user_id'
})

User.hasMany(Comment, {
    foreignKey: 'user_id'
})

Comment.belongsTo(User, {
    foreginKey: 'user_id'
})

Post.hasMany(Comment, {
    foreignKey: 'post_id'
})

Comment.belongsTo(Post, {
    foreginKey: 'post_id'
})

module.exports = { User, Post, Comment };