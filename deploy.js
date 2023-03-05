const { ethers } = require("ethers")
const fs = require("fs-extra")
require("dotenv").config()
async function main() {
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL)
    const encryptedJson = fs.readFileSync("./.encryptedKey.json", "utf8")
    let wallet = ethers.Wallet.fromEncryptedJsonSync(
        encryptedJson,
        process.env.pwd
    )
    wallet = await wallet.connect(provider)
    const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8")
    const binary = fs.readFileSync(
        "./SimpleStorage_sol_SimpleStorage.bin",
        "utf8"
    )
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet)
    console.log("Deploying, please wait...")
    const contract = await contractFactory.deploy()
    const deployedContract = await contract.waitForDeployment()
    //   console.log(contract.deploymentTransaction);
    //   console.log(deployedContract);
    //    console.log(contract);

    const transactionResponse = await contract.store("6")
    const transactionReceipt = await transactionResponse.wait(1)
    const currentFavoriteNumber = await contract.retrieve()

    console.log(`our favorite number is ${currentFavoriteNumber.toString()}`)
}

main()
    .then(() => {
        process.exit(0)
    })
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
