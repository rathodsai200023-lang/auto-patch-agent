async function createOrder(order, customer) {
  const customerId = customer.id;

  return {
    id: "order-" + Date.now(),
    customerId,
    productId: order.productId,
    quantity: order.quantity
  };
}

module.exports = { createOrder };
