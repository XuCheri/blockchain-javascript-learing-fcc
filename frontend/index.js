/*
 * @Author: cheri 1156429007@qq.com
 * @Date: 2023-03-12 15:27:34
 * @LastEditors: cheri 1156429007@qq.com
 * @LastEditTime: 2023-03-18 17:35:59
 * @FilePath: /blockchain-javascript-learing-fcc/script.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ethers } from "./node_modules/ethers/dist/ethers.esm.js"
import { abi, contractAddress } from "./constants.js"
console.log(abi, contractAddress)
async function connect() {
    if (typeof window.ethereum != "undefined") {
        console.log("I see the metamask")
        await window.ethereum.request({ method: "eth_requestAccounts" })
        connectbtn.innerHTML = "connected"
    } else {
        connectbtn.innerHTML = "please intall metamask"
    }
}
var connectbtn = document.getElementsByClassName("connect")[0]
console.log(connectbtn)
connectbtn.addEventListener("click", connect)

async function fund() {
    const ethAmount = document.getElementById("ethAmount").value

    console.log(`Funding with ${ethAmount}`)
    if (typeof window.ethereum != "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signers = await provider.getSigner()
        const contract = new ethers.Contract(contractAddress, abi, signers)
        try {
            const transactionResponese = await contract.fund({
                value: ethers.utils.parseEther(ethAmount),
            })
            await listenForTransactionMine(transactionResponese, provider)
            console.log(`done`)
        } catch (error) {
            console.log(error)
        }
    }
}

function listenForTransactionMine(transactionResponese, provider) {
    console.log(`Mining ${transactionResponese.hash} ...`)
    return new Promise((resolve, reject) => {
        provider.once(transactionResponese.hash, (transactionReceipt) => {
            console.log(
                `Completed with ${transactionReceipt.confirmations} confirmations`
            )
            resolve()
        })
    })
}

var fundbtn = document.getElementsByClassName("fund")[0]
fundbtn.addEventListener("click", fund)
