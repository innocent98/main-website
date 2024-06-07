import React from 'react'
import SearchSection from '../../header/SearchSection'
import WalletTab from './walletTabs/WalletTab'
import { Outlet } from 'react-router-dom'

const Wallet = () => {
  return (
    <div>
      <SearchSection />
      <WalletTab />
      <Outlet/>
      {/* wallet */}
    </div>
  )
}

export default Wallet
