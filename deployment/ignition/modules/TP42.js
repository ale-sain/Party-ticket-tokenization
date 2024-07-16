const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("TP42MetaModule", (m) => {
    const tp42 = m.contract("TechnoParty42", []);
    return { tp42 };
  });