var sequelize = new Sequelize("mwFriends", "root", null, {
  dialect: 'sqlite',
  storage: '../../mwFriends.sqlite'
});

Video = sequelize.define('Video', {
  url: Sequelize.STRING,
  title: Sequelize.STRING
  // views: Sequelize.INTEGER
});

Video.sync();
Video.create({url: 'https://www.youtube.com/watch?v=V6cMkhhqn6k', title: 'feelin alright'});