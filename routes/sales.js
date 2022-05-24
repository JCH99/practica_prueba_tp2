const express = require("express");
const router = express.Router();
const controller = require("../controllers/sales");

router.get("/", async (req, res) => {
  console.log("check");
  res.json(await controller.getSales());
});

router.get("/", async (req, res) => {
  console.log("check");
  res.json(await controller.getSales());
});

router.get("/filterByMethod", async (req, res) => {
  const sales = await controller.getSalesByPurchaseMethod(
    req.query.purchaseMethod
  );
  res.json(sales);
});

router.get("/filterByMail", async (req, res) => {
  const sales = await controller.getSalesByMail(req.query.mail);
  res.json(sales);
});

router.get("/angryClients", async (req, res) => {
  const angryClients = await controller.getAngryClients();
  res.json(angryClients);
});

router.get("/:id", async (req, res) => {
  const sale = await controller.getAngryClients();
  res.json(sale);
});

// router.get("/filterByMethod", async (req, res) => {
//
// });

module.exports = router;
