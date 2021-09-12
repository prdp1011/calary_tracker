
module.exports = {
  server: {
    port: 3001
  },
  database: {
    url: `mongodb+srv://admin:admintataaig@cluster0.sqlv9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  },
  key: {
    privateKey: 'test_tata_aig',
    tokenExpireInMinutes: 144000
  },
  User: [],
  Item: [],
  id: function(prefix) {
    return prefix + '_' + new Date().getTime()
  }
};
