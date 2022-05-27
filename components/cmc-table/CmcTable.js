import React, { useState, useEffect, useContext, useCallback } from 'react'
import btc from '../../assets/btc.png'
import { CoinMarketContext } from '../../context/context'

const CmcTable = () => {
  let { getTopTenCoins } = useContext(CoinMarketContext)
  const [coinData, setCoinData] = useState(null)

  useEffect(() => {
    setData()
  }, [])
  const setData = useCallback(async () => {
    try {
      let apiResponse = await getTopTenCoins()
      let filteredResponse = []
      for (let i = 0; i < apiResponse.length; i++) {
        const element = apiResponse[i]
        if (element.cmc_rank <= 10) filteredResponse.push(element)
      }
      setCoinData(filteredResponse)
    } catch (e) {
      console.log(e.message)
    }
  }, [getTopTenCoins])
  console.log('coinData', coinData)
  return (
    <div className="font-bold text-white">
      <div className="mx-auto max-w-screen-2xl">
        <table className="w-full"></table>
      </div>
    </div>
  )
}

export default CmcTable
