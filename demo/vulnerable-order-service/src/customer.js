const customers = {
  "cust-001": {
    id: "cust-001",
    name: "Sai"
  }
};

async function findCustomer(customerId) {
  return customers[customerId];
}

module.exports = { findCustomer };
