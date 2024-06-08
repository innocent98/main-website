import React from 'react'
import Container from '../../../../../../atoms/container/Container'
import { NavLink } from 'react-router-dom'

const WalletTab = () => {
    const tabSchema = [
        { name: 'Cash Account', path: "", exact: true },
        { name: 'Crypto Balance', path: "/overview/wallet/crypto_balance" },
        { name: 'Referral Balance', path: "/overview/wallet/ref_balance" },
        { name: 'Transaction History', path: "/overview/wallet/transaction_history" },
    ]
    return (
        <div>
            <div className="wallet-tab">
                {tabSchema.map((tabLink, i) => {
                    return (
                        <NavLink className={({isActive}) => isActive ? "wallet-active" : "wallet-link-style"} key={i} to={tabLink.path} end={tabLink.exact}>
                            {tabLink.name}
                        </NavLink>
                    )
                })}
            </div>
        </div>
    )
}

export default WalletTab
