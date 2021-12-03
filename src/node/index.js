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
/**
 * personne est une structure contenant chaque champs d'une personne
 */
// insert into personne (nom, prenom, naissance, mort, description) VALUES("Louis","Michel","1999-01-01","1999-01-01","lorem ipsuuum")
function insertIntoPersonne(personne) {
  connection.query(
    `INSERT INTO personne values (${personne.id}, "${personne.nom}", "${personne.prenom}", "${personne.naissance}", "${personne.mort}", "${personne.description}" )`,
    function (err, rows, fields) {
      if (err) throw err;
      return rows;
    }
  );
}

function insertIntoBateau(bateau) {
  connection.query(
    `INSERT INTO personne values (${bateau.id}, "${bateau.nom}", "${bateau.type}", "${bateau.commande}", "${bateau.miseEnService}", "${bateau.finDeService}", "${bateau.bapteme}", "${bateau.dimensions}", "${bateau.descriptions}" )`,
    function (err, rows, fields) {
      if (err) throw err;
      return rows;
    }
  );
}

function insertIntoOperation(operation) {
  connection.query(
    `INSERT INTO personne values (${operation.id}, "${operation.date}", "${operation.description}" )`,
    function (err, rows, fields) {
      if (err) throw err;
      return rows;
    }
  );
}

function insertIntoAParticipe(aParticipe) {
  connection.query(
    `INSERT INTO personne values (${aParticipe.idPersonne}, "${aParticipe.idOpe}", "${aParticipe.idBateau}" )`,
    function (err, rows, fields) {
      if (err) throw err;
      return rows;
    }
  );
}

function insertIntoSauve(sauve) {
  connection.query(
    `INSERT INTO personne values (${sauve.idBateau}, "${sauve.idPersonne}", "${sauve.idOperation}" )`,
    function (err, rows, fields) {
      if (err) throw err;
      return rows;
    }
  );
}

/*
(async() => {
    connection.connect();
    await fonction à utiliser
    connection.end();
})();
*/
