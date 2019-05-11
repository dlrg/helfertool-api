let mysql = require('mysql');

let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  port     : '8889',
  database : 'test'
});

module.exports = {
  dbQuery: function(query){
    let result;
    return new Promise((resolve, reject) => {
      connection.connect();
      connection.query(query, function (error, results, fields) {
        if (error) reject(error);
        result = results;
        resolve(result);
      });
      connection.end();
    });
  },

  getProgramm: function(){
    return this.dbQuery('select * from prog_programmliste_detail');
  }

};
