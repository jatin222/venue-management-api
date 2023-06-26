// src/controllers/userController.js

// Sample user data (replace with your database implementation)
//let users = [];
//const Usersdata = require('../src/models/Users.model');
//const users = require('../models/Users');
// Get all users
const getUsers = (req, res) => {
  res.json(users);
};

// Get a single user by ID
const getUserById = (req, res) => {
  const userId = req.params.id;
  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
};
//const usersmodel = require('../models/Users');
// Create a new user
const StudentModel = require('../models/studentschema');
const createUser = (req, res) => {
    console.log('Creating user')

    const newStudent = new StudentModel({
      name: "Sam", email: "Deva@gmail.com"
  });

  newStudent.save(function (err, data) {
      if (err) {
          //console.log(error);
          res.send("error Data inserted");
      }
      else {
          res.send("Data inserted");
      }
  });
  /*const { name, email } = req.body;
  const newUser = { id: Date.now().toString(), name, email };

  users.push(newUser); */

 // res.status(201).json(newUser);
};

// Update an existing user
const updateUser = (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  const user = users.find((user) => user.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  user.name = name;
  user.email = email;

  res.json(user);
};

// Delete a user
const deleteUser = (req, res) => {
  const userId = req.params.id;
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  const deletedUser = users.splice(userIndex, 1)[0];

  res.json(deletedUser);
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
