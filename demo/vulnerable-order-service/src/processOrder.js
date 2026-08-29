const { findCustomer } = require("./customer");
const { createOrder } = require("./createOrder");

async function processOrder(order) {
  const customer = await findCustomer(order.customerId);

  if (!customer) {
    const error = new Error("Customer not found");
    error.status = 400;
    throw error;
  }

  return createOrder(order, customer);
}

module.exports = { processOrder };
