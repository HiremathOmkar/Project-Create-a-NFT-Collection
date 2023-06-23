// create a variable to hold your NFT's

const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

function mintNFT(_name, _eyecolor, _shirtcolor, _shoescolor) {
    const NFT = {
        "name": _name,
        "eyecolor": _eyecolor,
        "shirtcolor": _shirtcolor,
        "shoescolor": _shoescolor
    }
    NFTs.push(NFT);
    console.log("Minting NFT" + ":" + NFT.name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()

function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log(NFTs[i]);
    }
}

// print the total number of NFTs we have minted to the console

function getTotalSupply() {
    console.log(NFTs.length);
}

// call your functions below this line
mintNFT("Sam", "blue", "red", "black");
mintNFT("Ron", "black", "blue", "brown");
listNFTs();
getTotalSupply();
