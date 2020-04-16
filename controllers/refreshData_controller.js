

const refreshDataController = (req,res) =>{
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
}

module.exports = {refreshDataController}