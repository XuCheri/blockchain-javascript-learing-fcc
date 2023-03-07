/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-08 00:25:33
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-03-08 02:37:51
 * @FilePath: /blockchain-javascript-learing-fcc/deploy/01-deploy-fund-me.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const {
    networkConfig,
    developmentChains,
} = require("../helper-hardhat-config.js")
const { network } = require("hardhat")
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log, get } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    // const ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
    let ethUsdPriceFeedAddress
    if (developmentChains.includes(network.name)) {
        const ethUsdAggregator = await get("MockV3Aggregator")
        ethUsdPriceFeedAddress = ethUsdAggregator.address
    } else {
        ethUsdPriceFeedAddress = networkConfig[chainId]["ethUsdPriceFeed"]
    }
    const fundMe = await deploy("FundMe", {
        from: deployer,
        log: true,
        args: [ethUsdPriceFeedAddress],
    })
    log("------------------------")
}
module.exports.tags = ["all", "fundme"]
