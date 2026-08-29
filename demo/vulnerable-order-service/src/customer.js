const customers = {
  "cust-001": {
    id: "cust-001",
    name: "Sai"
  }
};

async function findCustomer(customerId) {
  if (!Object.prototype.hasOwnProperty.call(customers, customerId)) {
    return undefined;
  }

  return customers[customerId];
}

module.exports = { findCustomer };
