const express = require("express");
const router = express.Router();
const db = require("../models");

module.exports = {
  userSearch: router.post("/sendData", (req, res) => {
    const { val, roller } = req.body;
    db.diceRoll.create({ roller, val }).then((val) => {
      console.log("success");
      const returnArray = [];
      db.diceRoll.findAll().then((data) => {
        data.map((entry) => {
          //console.log(entry.dataValues);
          const { val, roller } = entry.dataValues;
          const returnO = { val, roller };
          returnArray.push(returnO)
          
        });
        console.log(returnArray)
        res.json(returnArray)
      });
    });
  }),
};
