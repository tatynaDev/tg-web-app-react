import React, {useEffect, useState} from 'react';
import './Form.css'
import {useTelegram} from "../../hooks/useTelegram";
const Form = () => {

    const [color, setColor] = useState("")
    const [quantity, setQuantity] = useState("")
    const [size, setSize] = useState("")
    const [sizePrint, setSizePrint] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const {tg} = useTelegram()

    useEffect(()=> {
        if(!color || !quantity || sizePrint || size){
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }, [color, quantity, size, sizePrint])

    useEffect(()=> {
        tg.MainButton.setParams({
            text: "Отправить данные"
        })
    }, [])

    const onColorChange = (e) => {setColor(e.target.value)}
    const onQuantityChange = (e) => {setQuantity(e.target.value)}
    const onSizeOfDress = (e) => {setSize(e.target.value)}
    const onSizeOfPrint = (e) => {setSizePrint(e.target.value)}
    const onSetAddress = (e) => {setAddress(e.target.value)}
    const onSetPhoneNumber = (e) => {setPhone(e.target.value)}

    return (

        <div className='form'>
            <h3>Заполните форму для заказа:</h3>

            <select className={'select'} onSelect={onColorChange}>
                <option selected={true}>Цвет</option>
                <option value="Черный" defaultValue={color}>Черный</option>
                <option value="Белый" defaultValue={color}>Белый</option>
            </select>

            <label htmlFor="quantity">Напишите количество:</label>
            <input className={'input'} type="text" id="quantity" value={quantity} onClick={onQuantityChange} required/>

            <label htmlFor="size">Размер одежды:</label>
            <input className={'input'} type="text" id="size" value={size} onClick={onSizeOfDress} required/>

            <label htmlFor="sizePrint">Размер принта:</label>
            <input className={'input'} type="text" id="sizePrint" value={sizePrint} onClick={onSizeOfPrint} required/>

            <label htmlFor="address">Если хотите с доставкой, то заполните здесь:</label>
            <input className={'input'} type="text" id="address" onClick={onSetAddress} value={address} placeholder={"Р. Ул. № дом."}/>
            <input className={'input'} type="text" id="tel" onClick={onSetPhoneNumber} value={phone} placeholder={"Номер телефона:"}/>
        </div>
    );
};

export default Form;