const mysql = require("mysql2");

function connectBD() {
  return new Promise((resolve, reject) => {
    var con = mysql.createConnection({
      host: "dam.inspedralbes.cat",
      user: "a22pabjimpri_user",
      password: "Qwerty123",
      database: "a22pabjimpri_prova",
    });

    con.connect(function (err) {
      if (err){
        reject(err);
      }
      else {
        console.log("conexio establida amb exit");

        const consulta = "SELECT * FROM Persona";

        con.query(consulta, function (err, result) {
          if (err) {
            console.log(err);
          } else {
            resolve(result);
          }
        });

        con.end((err) => {
          if (err) {
            reject(err);
          } else {
            console.log("es tanca la bd");
          }
        });
      }
    });
  });
}

connectBD()
  .then((resultado) => {
    // Mostrar los resultados
    console.log("Resultados del SELECT:", resultado);
  })
  .catch((error) => {
    // Manejar errores aquí
    console.error("Error en la operación:", error);
  });
