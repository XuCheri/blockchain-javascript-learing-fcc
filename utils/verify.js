/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-08 14:03:44
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-03-08 14:17:17
 * @FilePath: /blockchain-javascript-learing-fcc/utils/verify.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { run } = require("hardhat")

const verify = async (contractAddress, args) => {
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (error) {
        if (error.message.toLowerCase().includes("already verified")) {
            console.log("Already verified")
        } else {
            console.log(error)
        }
    }
}

module.exports = { verify }
