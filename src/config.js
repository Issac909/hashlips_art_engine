const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "*REPLACE WITH COLLECTION NAME*";
const description = "*REPLACE WITH DESCRIPTION FOR COLLECTION*";
const baseUri = "ipfs://*REPLACE WITH cID TO METADATA FROM IPFS*";
// NOTE: After everything is replaced, type "node utils/updateBaseUri.js" in the terminal and push enter
// Once the URI is updated, now enter "node index.js" in the terminal and it will generate a json folder we can upload to IPFS as well for our smart contract

// UNCOMMENT ONLY IF WORKING WITH SOLANA NFTs
// const solanaMetadata = {
//   symbol: "YC",
//   seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
//   external_url: "https://www.youtube.com/c/hashlipsnft",
//   creators: [
//     {
//       address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
//       share: 100,
//     },
//   ],
// };

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  // NOTE: Using growEditionSizeTo, we can create special folders for attributes to create a special set of 1/1, 2/2, 3/3, etc. that we use to divide our collection into seperate drops, auction or promote
  {
    growEditionSizeTo: 5,
    layersOrder: [
      { name: "Background" }, // REPLACE THESE EXAMPLE ATTRIBUTES (in layers folder)
      { name: "Eyeball" },
      { name: "Eye color" },
      { name: "Iris" },
      { name: "Shine" },
      { name: "Bottom lid" },
      { name: "Top lid" },
    ],
  },  

  // {
  //   growEditionSizeTo: 10000,
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Eyeball" },
  //     { name: "Eye color" },
  //     { name: "Iris" },
  //     { name: "Shine" },
  //     { name: "Bottom lid" },
  //     { name: "Top lid" },
  //   ],
  // },
];

// NOTE: If we do end up adding a special set to the collection, we can make sure they are not minted in chronological/predictable way by changing this value to true
// For example, if we want to seperate the drops into a Genesis collection and then mint cops and then robbers, we can leave this false
// If you want the cops and robbers to be minted at random, you would need to set this to true, but then you can no longer have the Genesis collection because it would mix them in with the cops and robbers as well
// If we come across a specific case where we would need to incorporate both functionalities, I will look into it, but this is the only limit so far
const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
