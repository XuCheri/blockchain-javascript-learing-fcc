/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-07 00:10:35
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-03-07 00:18:55
 * @FilePath: /blockchain-javascript-learing-fcc/tasks/block-number.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { task } = require("hardhat/config")
task("block-number", "Print the current block number").setAction(
    async (taskArgs, hre) => {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Current block number: ${blockNumber}`)
    }
)
module.exports = {}
