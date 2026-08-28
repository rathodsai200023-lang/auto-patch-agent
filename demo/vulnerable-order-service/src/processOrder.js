const { findCustomer } = require("./customer");
const { createOrder } = require("./createOrder");

async function processOrder(order) {
  const customer = await findCustomer(order.customerId);
  return createOrder(order, customer);
}

module.exports = { processOrder };
