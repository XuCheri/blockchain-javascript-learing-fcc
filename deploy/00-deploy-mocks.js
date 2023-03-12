/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-08 01:34:11
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-03-08 01:55:17
 * @FilePath: /blockchain-javascript-learing-fcc/deploy/00-deploy-mock.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const { network } = require("hardhat")
const {
    developmentChains,
    DECIMALS,
    INITIAL_ANSWER,
} = require("../helper-hardhat-config")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    if (developmentChains.includes(network.name)) {
        log("Local network detected! Deploying mocks...")
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_ANSWER],
        })
        log("Mocks deployed!")
        log("----------------------------------------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]
