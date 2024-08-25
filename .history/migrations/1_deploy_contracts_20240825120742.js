// migrations/1_eploy_contracts.js
const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function (deployer) {
    deployer.deploy(SimpleStorage);
};
