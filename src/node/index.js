let mysql = require("mysql");
let auth = require("../../AUTH.json");

let connection = mysql.createConnection({
  host: auth.host,
  user: auth.user,
  password: auth.password,
  database: auth.database,
});

/**
 * Retourne les éléments d'une table
 */

function getTable(table, name) {
  return new Promise((resolve, reject) => {
    connection.query(
    `SELECT * from ${table} where nom like LOWER('${name}')`,
      (err, result) => {
        return err ? reject(err) : resolve(result);
      }
    );
  });
}

// TODO
function insertIntoPersonne(connection, info) {
  connection.query(
    `INSERT INTO personne values ${info})`,
    function (err, rows, fields) {
      if (err) throw err;
      return rows;
    }
  );
}

(async() => {
    connection.connect();
    let result = await getTable("personne", "Louis");
    console.log(result);
    connection.end();
})();


