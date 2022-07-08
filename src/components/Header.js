import React from 'react'
import Button from './Button'

const Header = ({title}) => {

    const onAdd = () => {
        console.log("Clicked");
    }

    return (
    <>
    <header className="header">
        <h1>인사말 : {title}</h1>
    </header>
    <Button text="add" onAdd={onAdd}/>
    </>
    )
}

export default Header