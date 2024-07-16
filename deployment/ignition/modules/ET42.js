const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("ET42Module", (m) => {
    const et42 = m.contract("EventTicket42", [3000]);
    return { et42 };
  });