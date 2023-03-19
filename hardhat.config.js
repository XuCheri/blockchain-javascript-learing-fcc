/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-19 14:36:54
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-03-19 14:51:45
 * @FilePath: /blockchain-javascript-learing-fcc/hardhat.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.7",
}
