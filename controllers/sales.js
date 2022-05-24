const sales = require("../data/supplies");

async function getSales() {
  return sales.getAllSales();
}

async function getSale(id) {
  return sales.getSale(id);
}

async function getSalesByPurchaseMethod(purchaseMethod) {
  return sales.getSalesByPurchaseMethod(purchaseMethod);
}

async function getSalesByMail(mail) {
  return sales.getSalesByMail(mail);
}

async function getAngryClients() {
  return sales.getAngryClients();
}

module.exports = {
  getSales,
  getSale,
  getSalesByPurchaseMethod,
  getSalesByMail,
  getAngryClients,
};
