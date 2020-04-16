const express = require("express");
const router = express.Router();
const db = require("../models");
const { sendDataController } = require("../controllers/sendData_controller");
const {
  refreshDataController,
} = require("../controllers/refreshData_controller");

// module.exports = {
//   userSearch: router.post("/sendData", (req, res) => {}),
//   refresh: router.post("/refreshData", (req, res) => {}),
// };

const addRoutes = (app) => {
  router.route("/sendData").post(sendDataController);
  router.route("/refreshData").post(refreshDataController);
  app.use('/', router)
};

module.exports = {addRoutes}
