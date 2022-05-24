const { ObjectId } = require("mongodb");
const conn = require("./conn");
const DATABASE = "sample_supplies";
const SALES = "sales";

async function getAllSales() {
  const connectiondb = await conn.getConnection();
  const supplies = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find()
    .toArray();
  return supplies;
}

async function getSale(id) {
  const connectiondb = await conn.getConnection();
  const supplies = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find({ _id: new ObjectId(id) })
    .toArray();
  return supplies;
}

async function getSalesByPurchaseMethod(purchaseMethod) {
  const connectiondb = await conn.getConnection();
  const supplies = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find({ purchaseMethod: purchaseMethod })
    .toArray();
  return supplies;
}

async function getSalesByMail(mail) {
  const connectiondb = await conn.getConnection();
  const supplies = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find({ "customer.email": mail })
    .toArray();
  return supplies;
}

async function getAngryClients() {
  const connectiondb = await conn.getConnection();
  const supplies = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find({ "customer.satisfaction": { $lt: 3 } })
    .toArray();

  const angryClients = supplies.map((supply) => supply.customer);
  return angryClients;
}

module.exports = {
  getAllSales,
  getSale,
  getSalesByPurchaseMethod,
  getSalesByMail,
  getAngryClients,
};
