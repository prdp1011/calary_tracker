
module.exports = {
  server: {
    port: 3001
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
