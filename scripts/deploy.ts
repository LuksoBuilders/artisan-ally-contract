// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

const { ethers, upgrades } = hre;

// Testnet Addresses
// const apexDeitiesAddress = "0xb4E32a20aa27B5891Bfa592c392c9858A1DD3945";
// const holyShitAddress = "0xAd28D1A66597f0EC79829A02Db9CCCf361f2b8Ac";
// const marketingTeamAddress = "0x455c51bf3A58A5Bc2285b4bd7E740EFeDFB619ae";
// const builderTeamAddress = "0x455c51bf3A58A5Bc2285b4bd7E740EFeDFB619ae";

// Mainnet Addresses
const apexDeitiesAddress = "0xb4E32a20aa27B5891Bfa592c392c9858A1DD3945";
const holyShitAddress = "0x2fF8dF5F47Cd67AfE425a2acb28d6506838495Ee";
const marketingTeamAddress = "0xFCAEa906cC7DE6135721C7900806e2e7Ab6fE11A";
const builderTeamAddress = "0x55E0F69F4b89d873f1d72449954F8F83C867be97";

const deploySingle = async (
  contractName: string,
  label: string,
  params: Array<any> = []
) => {
  const Contract = await hre.ethers.getContractFactory(contractName);
  const instance = await Contract.deploy(...params);

  await instance.waitForDeployment();

  console.log(`${label} contract deployed at: ${await instance.getAddress()}`);

  return instance;
};

async function main() {
  const admin = (await hre.ethers.getSigners())[0];
  console.log("Signer address is", admin.address);

  const fellowshipLogic = await deploySingle(
    "FellowshipLogic",
    "FellowshipLogic"
  );

  const fellowshipBeacon = await deploySingle("Beacon", "FellowshipBeacon", [
    await fellowshipLogic.getAddress(),
    admin.address,
  ]);

  const beaconProxyFactory = await deploySingle(
    "BeaconProxyFactory",
    "BeaconProxyFactory"
  );
  //
  //const artisanAllyImplementation = await deploySingle(
  //  "ArtisanAlly",
  //  "ArtisanAllyLogic"
  //);
  //const feeCollectorImplementation = await deploySingle(
  //  "FeeCollector",
  //  "FeeCollectorLogic"
  //);
  //const levelManagerImplementation = await deploySingle(
  //  "LevelManager",
  //  "LevelManagerLogic"
  //);

  const initialLevelExperience = ethers.parseEther("10");

  const levelManager = await upgrades.deployProxy(
    await hre.ethers.getContractFactory("LevelManager"),
    [admin.address, admin.address, initialLevelExperience, 1000]
  );

  console.log(
    "LevelManager contract deployed at: ",
    await levelManager.getAddress()
  );

  //const slotManagerImplementation = await deploySingle(
  //  "SlotManager",
  //  "SlotManagerImplementation"
  //);

  const slotManager = await upgrades.deployProxy(
    await hre.ethers.getContractFactory("SlotManager"),
    [admin.address, await levelManager.getAddress()]
  );

  console.log(
    "SlotManager contract deployed at: ",
    await slotManager.getAddress()
  );

  const endorsementTokenLogic = await deploySingle(
    "EndorsementTokenLogic",
    "EndorsementTokenLogic"
  );

  const endorsementBeacon = await deploySingle("Beacon", "EndorsementBeacon", [
    await endorsementTokenLogic.getAddress(),
    admin.address,
  ]);

  const contributionTokenLogic = await deploySingle(
    "ContributionTokenLogic",
    "ContributionTokenLogic"
  );

  const contributionBeacon = await deploySingle(
    "Beacon",
    "ContributionTokenBeacon",
    [await contributionTokenLogic.getAddress(), admin.address]
  );

  const feeCollector = await upgrades.deployProxy(
    await hre.ethers.getContractFactory("FeeCollector"),
    [
      admin.address,
      apexDeitiesAddress,
      await levelManager.getAddress(),
      builderTeamAddress,
      marketingTeamAddress,
    ]
  );

  console.log(
    "FeeCollector contract deployed at: ",
    await feeCollector.getAddress()
  );

  await levelManager.grantRole(
    await levelManager.EXPERIENCE_MANIPULATOR(),
    await feeCollector.getAddress()
  );
  console.log("Fee collector added as the experience manipulator");

  const artisanAlly = await upgrades.deployProxy(
    await hre.ethers.getContractFactory("ArtisanAlly"),
    [
      admin.address,
      await fellowshipBeacon.getAddress(),
      await beaconProxyFactory.getAddress(),
      apexDeitiesAddress,
      await slotManager.getAddress(),
      await feeCollector.getAddress(),
      holyShitAddress,
      await contributionBeacon.getAddress(),
      await endorsementBeacon.getAddress(),
    ]
  );

  console.log(
    "ArtisanAlly contract deployed at: ",
    await artisanAlly.getAddress()
  );

  await slotManager.grantRole(
    await slotManager.SLOT_MANIPULATOR(),
    await artisanAlly.getAddress()
  );

  console.log("ArtisanAlly added as the Slot Manipulator");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

/*
Signer address is 0x4cB317AFAB0292D4fF48e158e006C8bC78547173
FellowshipLogic contract deployed at: 0xA00ec8D1B3c689701C95451cb5c9115170671082
FellowshipBeacon contract deployed at: 0x0110bCF399a2f963597af3eAeCa03409850130A0
BeaconProxyFactory contract deployed at: 0x521Dc29641596fE497985cC2ed6435fe9217BB98
LevelManager contract deployed at:  0xa33aD2E0984D8bAa596D12937a9D68dc9C68Bd9d
SlotManager contract deployed at:  0x619D964e41bf82e42322319bF0480925EEEc385a
EndorsementTokenLogic contract deployed at: 0x79d110E7BC37120e22FF1a783148665Ca51C0d2F
EndorsementBeacon contract deployed at: 0xd95DA2956C1AB576Da986b33A9C0fAe1337918d6
ContributionTokenLogic contract deployed at: 0x83C02bD2C3e7E100920f70635d4526C9A7fC891F
ContributionTokenBeacon contract deployed at: 0xb6F9Cbc1ecDaec93E28fa4bA1d687aA2B76130CF
FeeCollector contract deployed at:  0x4c0aBBef8584e3c9abb39dBA62991749a0F966AC
Fee collector added as the experience manipulator
ArtisanAlly contract deployed at:  0x440a30FeC7a10d06D7A1c9391B27402cE9f8AbA8
ArtisanAlly added as the Slot Manipulator1
*/

/**
 * 
 * 
 
 
    source:
      address: "0xa33aD2E0984D8bAa596D12937a9D68dc9C68Bd9d"
      abi: LevelManager
      startBlock: 2595166
    mapping: 
      kind: ethereum/events
      apiVersion: 0.0.7
      language: wasm/assemblyscript
      entities: 
      abis:
      - name: LevelManager
        file: ./abis/LevelManager.json
      eventHandlers:
        - event: XPIncreased(uint256,uint256)
          handler: handleXPIncrease
        - event: LevelIncreased(uint256,uint256)
          handler: handleLevelIncrease
 */

/**
           * 
           * Mainnet Addresses
           * 
           
           
           Signer address is 0x4cB317AFAB0292D4fF48e158e006C8bC78547173
FellowshipLogic contract deployed at: 0x9C669d17Cc2416d0Ac7FEc4Dd5A91d40E51d7d6C
FellowshipBeacon contract deployed at: 0x534FD7aFb41b73cEC6d7d37f2245610Ec632AF07
BeaconProxyFactory contract deployed at: 0x20378EDEB17AC5af6430CC9e12B3D0bB084E68d8
LevelManager contract deployed at:  0x22957D2Fb820b7F3F0DF5503e77aCC1A5D3a66F7
SlotManager contract deployed at:  0x1b365Dc41a84479ecf285CFd9895D301a1F3E8aa
EndorsementTokenLogic contract deployed at: 0x9a32171D4ECf3e8c777136Ad212846b816c35287
EndorsementBeacon contract deployed at: 0xe3C3A38b5A72F161e233eC0A3B09a5144F5C6Ea9
ContributionTokenLogic contract deployed at: 0x4836133B5763e134E71a86eb29e345267523816E
ContributionTokenBeacon contract deployed at: 0x83A86e0531DA80Bb4D33DC11276AF793BD52323C
FeeCollector contract deployed at:  0xd7cD9902ec51010b99c7577fDa2F4c335A17E75f
Fee collector added as the experience manipulator
ArtisanAlly contract deployed at:  0x84d6022AeCb5d558Cb119A8632b79436f0575ee3
ArtisanAlly added as the Slot Manipulator
           
           * 
           */
