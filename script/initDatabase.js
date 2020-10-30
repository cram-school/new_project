//initData.js
const users = require('../model/user')
users.sync({force: true});
const articles = require('../model/articles')
articles.sync({force: true});
const fans = require('../model/fans')
fans.sync({force: true});
const photos = require('../model/photos')
photos.sync({force: true});
const subscribe = require('../model/subscribe')
subscribe.sync({force: true});
const black_list = require('../model/black_list')
black_list.sync({force: true});
const collect_list = require('../model/collect_list')
collect_list.sync({force: true});
const like_list = require('../model/like_list')
like_list.sync({force: true});
const comments = require('../model/comments')
comments.sync({force: true});
