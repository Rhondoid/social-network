const connection = require('../config/connection');
const { User, Thoughts } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  //drop existing users
  await User.deleteMany({});
  //drop existing thoughts
  await Thoughts.deleteMany({});

  //Array to contain users
  const User = [];

  //Looping over users --add users to array
  users.push({
    username,
    thoughts,
    friends,
    reactions,
  });
  await User.collection.insertMany(users);
    
  await Thoughts.collection.insertOne({
    id: Int,
    user: [...users],
  });

  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});

