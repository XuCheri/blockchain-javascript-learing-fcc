/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-11 21:03:16
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-03-11 21:06:46
 * @FilePath: /blockchain-javascript-learing-fcc/scripts/withdraw.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { getNamedAccounts, ethers } = require("hardhat")

async function main() {
    const { deployer } = getNamedAccounts()
    const fundMe = await ethers.getContract("FundMe", deployer)
    console.log("funding ...")
    const transactionResponse = await fundMe.withdraw()
    await transactionResponse.wait(1)
    console.log("withdrawed")
}
main()
    .then(() => {
        process.exit(0)
    })
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
