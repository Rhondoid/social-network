const { connect, connection } = require('mongoose');


const connectionString =
//atlas connection string added here so Heroku will not assume this is local
  process.env.MONGODB_URI || 'mongodb+srv://smackeral69:password@cluster0.jkwlztb.mongodb.net/?retryWrites=true&w=majority/social-network';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;