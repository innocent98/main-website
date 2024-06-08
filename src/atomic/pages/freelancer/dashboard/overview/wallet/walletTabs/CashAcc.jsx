import React, { useState } from 'react'
import Container from '../../../../../../atoms/container/Container'
import Button from '../../../../../../atoms/button/Button'
import Modal from "../../../../../../molecules/modal/Modal"
import { MdOutlineClose } from "react-icons/md";
const CashAcc = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <main className='wallet-sub-sec'>
            <Container variant="wrapper--flex" className="wallet--flex--header">
                <p>Balance: 0.00</p>
                <Button variant="default--fit" onClick={() => setIsModalOpen(!isModalOpen)}>Withdraw</Button>
            </Container>
            <Container variant="wrapper--flex--center" className="wallet--body">
                <p>No history to show</p>
            </Container>
            {isModalOpen &&
                <Modal>
                    <Container variant="wrapper--flex" className="modal--header">
                        <p>Withdraw</p>
                        <Button variant="transparent-black" onClick={() => setIsModalOpen(!isModalOpen)}><MdOutlineClose /></Button>
                    </Container>
                    <section className='withdrawal-location'>
                        <p>Withdraw to</p>
                        <Container variant="wrapper--flex">
                            <div>
                                {/* <div> */}
                                    <input type="radio" autoFocus="true" id="option-1" name="user-choice" value="option1" />
                                {/* </div> */}
                                <p>NIG Bank</p>
                                <p>2845790335</p>
                                <p>Mr Solomon</p>
                            </div>
                            <div>
                                {/* <div> */}
                                    <input type="radio" id="option-2" aria-checked name="user-choice" value="option2" />
                                {/* </div> */}
                                <p>NIG Bank</p>
                                <p>2845790335</p>
                                <p>Mr Solomon</p>
                            </div>
                            {/* <div></div> */}
                        </Container>
                    </section>
                    <Container variant="wrapper--flex--col">
                        <label htmlFor="amount" className='amnt--label'>EnterAmount</label>
                        <input type="text" id='amount' placeholder='input withdrawal amount' className='cashAcc-input' />
                        <span className='balanceCheck'>Available balance: 0</span>
                    </Container>
                    <Button variant="default">Proceed</Button>
                </Modal>
            }
        </main>
    )
}

export default CashAcc
