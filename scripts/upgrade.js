const hre = require("hardhat");

const { ethers, upgrades } = hre;

const deploySingle = async (contractName, label, params = []) => {
  const Contract = await hre.ethers.getContractFactory(contractName);
  const instance = await Contract.deploy(...params);

  await instance.waitForDeployment();

  console.log(`${label} contract deployed at: ${await instance.getAddress()}`);

  return instance;
};

const main = async () => {
  const newFellowshipLogic = await deploySingle(
    "FellowshipLogic",
    "New FellowshipLogic"
  );

  const BeaconFactory = await hre.ethers.getContractFactory("Beacon");

  const fellowshipBeacon = BeaconFactory.attach(
    "0x534FD7aFb41b73cEC6d7d37f2245610Ec632AF07"
  );

  await fellowshipBeacon.upgradeTo(await newFellowshipLogic.getAddress());

  console.log("fellowship logic upgraded");
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
