

const sendDataController = (req,res) =>{
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
}

module.exports = {sendDataController}