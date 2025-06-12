const db = require('../config/db');

// Crée un nouvel utilisateur avec ses informations
const createUser = (user, callback) => {
  const { firstName, email, password, role } = user;
  const sql = "INSERT INTO user (firstName, email, password, role) VALUES (?, ?, ?, ?)";
  
  try {
    db.query(sql, [firstName, email, password, role], (err, result) => {
      if (err) {
        console.error("Erreur MySQL:", err);
        callback(err, null);
      } else {
        console.log("Utilisateur ajouté avec succès !");
        callback(null, result);
      }
    });
  } catch (error) {
    console.error("Erreur inattendue:", error);
    callback(error, null);
  }
};

// Supprime un utilisateur existant par son identifiant
const deleteUser = (id , callback) =>{
  const idUser = id;
  const sql = "DELETE FROM user WHERE idUser = ?"

  try{
    db.query(sql, [idUser] , (err, result)=>{
      if (err){
        console.error("Erreur MySQL :", err);
        callback(err, null)
      } else {
        console.log("Utilisateur supprimé avec succès !");
        callback(null, result);
      }
    })
  } catch (error){
    console.err("Erreur inattendue:", error);
    callback(error, null)
  }
}

module.exports = {
  createUser,
  deleteUser
};
