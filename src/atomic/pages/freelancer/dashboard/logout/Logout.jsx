import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../../../atoms/button/Button'
import Modal from '../../../../molecules/modal/Modal'
import Container from '../../../../atoms/container/Container'
import useAuthStore from '../../../../../../zustand/authstore/useAuthStore'

const Logout = () => {
    const {logout} = useAuthStore()
    return (
        <div>
            <Modal className="modal">
                <p> Youre attempting to logout of Zealworkers</p>
                <p>Do you really want to logout?</p>
                <Container variant="wrapper--flex--fit" >
                    <Button variant="border--fit">
                       Cancel
                    </Button>
                    <Button variant="default--fit">
                        <NavLink onClick={logout} to="/" className="link--white">
                            logout
                        </NavLink>
                    </Button>
                </Container>
            </Modal>
        </div>
    )
}

export default Logout
