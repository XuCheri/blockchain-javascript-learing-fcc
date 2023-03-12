/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-11 19:37:56
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-03-11 21:01:02
 * @FilePath: /blockchain-javascript-learing-fcc/scripts/fund.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { getNamedAccounts, ethers } = require("hardhat")

async function main() {
    const { deployer } = await getNamedAccounts()
    const fundme = await ethers.getContract("FundMe", deployer)
    console.log("funding contract ................")
    const transactionReponse = await fundme.fund({
        value: ethers.utils.parseEther("0.1"),
    })
    await transactionReponse.wait(1)
    console.log("funded")
}
main()
    .then(() => {
        process.exit(0)
    })
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
