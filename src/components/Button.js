import React from 'react'

const Button = ({text,onAdd}) => {


  return (
    <>
    <button
    style = {{ backgroundColor: 'green' }}
    className="btn"
    onClick={onAdd}
    >
        {text}
    </button>
    </>
    )
}

export default Button
