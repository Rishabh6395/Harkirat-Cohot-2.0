/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

const App2 = () => {

    const [exchangeData, setExchangeData] = useState({})
    const [bankData, setBankData] = useState({})

    // fetch("https://google.com", async(res) => {
    //     const json = res.json()
    //     // setBankData(json)
    //     setBankData({income: 100})
    //     // assume we get {income: 100}
    // })

    useEffect(() =>{
        setTimeout(() => {
            setBankData({income: 100})
        }, 1000);

        setTimeout(() => {
            setExchangeData({
                returns: 100
            })
        }, 1000);
    }, [])

    // setTimeout(() => {
    //     setBankData({income: 100})
    // }, 1000);

    // setTimeout(() => {
    //     setExchangeData({
    //         returns: 100
    //     })
    // }, 1000);

    const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

  return (
    <div>
      hi there your income tax returns are {incomeTax}
    </div>
  )
}

export default App2
