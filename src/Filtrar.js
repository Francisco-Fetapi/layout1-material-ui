import React from 'react'
import Lista from './Lista'
import {Switch, Button} from '@material-ui/core'
import {MyLocation} from '@material-ui/icons'

function Filtrar({titulo,items}) {
    const item = [{
        label:'Minha Localizacao',
        icone:<MyLocation />,
        comp2:<Switch />
    }
    ]
    return (
        <div style={{padding:'0 10px 20px 10px'}}>
            <Lista items={item} icone={true} comp2={true} />
            <Lista titulo={titulo} items={items}/>
            <Button color="primary" fullWidth variant="contained">Filtrar</Button>
        </div>
    )
}

export default Filtrar
