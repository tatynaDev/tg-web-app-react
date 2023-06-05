import React from 'react';
import Button from "../button/Button";
import {useTelegram} from "../../hooks/useTelegram";
import './Header.css'
import {Route, Routes} from "react-router-dom";
import Form from "../form/Form";

const Header = () => {
    const {user, onClose} = useTelegram()

    return (
        <div className='header'>
            <Button onClick={onClose}>Закрыть</Button>
            <p>{user}</p>
            <Routes>
                <Route path={'/form'} element={<Form/>}/>
            </Routes>
        </div>
    );
};

export default Header;