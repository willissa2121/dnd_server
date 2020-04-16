const express = require("express");
const router = express.Router();
const db = require("../models");

module.exports = {
  userSearch: router.post("/sendData", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { val, roller } = req.body;
    db.diceRoll.create({ roller, val }).then((val) => {
      console.log("success");
      const returnArray = [];
      db.diceRoll.findAll().then((data) => {
        data.map((entry) => {
          const { val, roller, createdAt } = entry.dataValues;
          const returnO = { val, roller, createdAt };
          returnArray.push(returnO);
        });

        res.json(returnArray);
      });
    });
  }),
  refresh: router.post("/refreshData", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    db.diceRoll.findAll().then((data) => {
      const returnArray = [];
      data.map((entry) => {
        const { val, roller, createdAt } = entry.dataValues;
        const returnO = { val, roller, createdAt };
        returnArray.push(returnO);
      });
     // console.log(returnArray)
      res.json(returnArray);
    });
  }),
};
