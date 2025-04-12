const dbConnection = require("../utils/db-connection");

const addUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ Error: "Name and email are mandatory" });
  }
  const createUser = "INSERT INTO users (name, email) VALUES (?, ?)";
  dbConnection.execute(createUser, [name, email], (err) => {
    if (err) {
      console.log("Error creating user", err);
      dbConnection.end();
      return res
        .status(500)
        .json({ Error: `Error creating user ${err.message}` });
    }
    res.json({ message: "User created successfully" });
  });
};

const getAllUsers = (req, res) => {
  const getUsersQuery = "SELECT * FROM users";
  dbConnection.execute(getUsersQuery, (err, result) => {
    if (err) {
      console.log("Error fetching users", err);
      dbConnection.end();
      return res
        .status(500)
        .json({ Error: `Error fetching users ${err.message}` });
    }
    res.json(result);
  });
};

module.exports = {
  addUser,
  getAllUsers,
};
