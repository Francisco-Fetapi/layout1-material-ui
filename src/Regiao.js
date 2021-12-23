import React from 'react'
import Lista from './Lista'

function Regiao({titulo,items}) {
    return (
        <div>
            <Lista titulo={titulo} items={items}/>
        </div>
    )
}

export default Regiao
