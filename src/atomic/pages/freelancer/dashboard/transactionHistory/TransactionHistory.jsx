import React, { useState } from 'react'
import EmptyState from '../EmptyState'
import historyData from './historyData'
import { NavLink } from 'react-router-dom'
import { FiBookOpen } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Container from '../../../../atoms/container/Container'
import { FiFilter } from "react-icons/fi";


const TransactionHistory = () => {
    const [isStateEmpty, setIsStateEmpty] = useState(true)
    return (
        <>
            <NavLink className="link" to="/overview">Back to Dashboard</NavLink>
            {
                isStateEmpty ?
                    <EmptyState
                        stateTitle={"You have no transaction(s) yet"}
                        stateDescription={"Your history of transaction will be displayed here"}
                        toggleState={() => setIsStateEmpty(!isStateEmpty)}
                    />
                    :
                    <main className='transaction--history'>
                        <p style={{ fontSize: "20px" }}>Transactions</p>
                        <Container variant="wrapper--flex--between">
                            <Container variant="wrapper--flex--fit">
                                <p><input type="date" name="" id="" className='input-date'/></p>
                                <p className='history-filter'>All Filters <FiFilter /></p>
                            </Container>
                            <div>
                            <FiBookOpen /> Statements
                            </div>
                        </Container>
                        <section className='header'>
                            <p>All Transactions</p>
                        </section>
                        <section>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Description</th>
                                        <th>Status</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {historyData.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{item.date}</td>
                                                <td>
                                                    <p>{item.bank}</p>
                                                    <p>{item.description}</p>
                                                </td>
                                                <td>{item.status ? <IoMdCheckmarkCircleOutline className='status-check' /> : <RxCrossCircled className='status-cross' />}</td>
                                                <td>{item.amount}</td>
                                            </tr>
                                        )
                                    })
                                    }
                                </tbody>
                            </table>
                        </section>

                    </main>}
        </>
    )
}

export default TransactionHistory
