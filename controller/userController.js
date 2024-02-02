var db = require("../models");
var User = db.user;
const { Sequelize} = require('sequelize');
const { Op } = require("sequelize");
const addUsers = async (req, res) => {
  const jane = User.build({ firstName: "Jane", lastName: "joseph" });
  console.log(jane instanceof User); // true
  console.log(jane.firstName);
  await jane.save();
  console.log("Jane was saved to the database!");
  console.log(jane.toJSON());
  res.status(200).json(jane.toJSON());
};

var getUsers = async (req, res) => {
  const data = await User.findAll({});
  res.status(200).json({ data: data });
};

/////////////
var getUser = async (req, res) => {
  const data = await User.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ data: data });
};
////////////
var postUser = async (req, res) => {
  var adduser = req.body;
  if (adduser.length > 1) {
    var data = await User.bulkCreate(adduser);
  } else {
    var data = await User.create(adduser);
  }
  res.status(200).json({ data: data });
};
///

var deleteUser = async (req, res) => {
  const data = await User.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ data: data });
};

//////////////
var patchUser = async (req, res) => {
  var updatedData = req.body;
  const data = await User.update(updatedData, {
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ data: data });
};
//////////////////
var queryUser = async (req, res) => {
  try {
    const data = await User.findAll({ group: 'firstName',limit:1 });

    res.status(200).json({ data: data });
  } catch (error) {
    console.error("Error querying users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


module.exports = {
  addUsers,
  getUsers,
  getUser,
  postUser,
  deleteUser,
  patchUser,
  queryUser,
};
