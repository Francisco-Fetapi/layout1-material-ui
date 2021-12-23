import React from 'react'
import { AppBar,InputBase,Toolbar,IconButton } from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import Navegacao from './Navegacao'

function Procurar({setPano,setModal}) {
    return (
        <AppBar style={{backgroundColor:'white'}}>
            <Toolbar>
                <IconButton style={{marginLeft:-20,marginRight:10}} onClick={()=>setPano(false)}>
                    <ArrowBack />
                </IconButton>
                <InputBase placeholder="Procurar anuncio" style={{flexGrow:1}}/>
            </Toolbar>
            <Navegacao style={{marginTop:0}} setModal={setModal}/>
        </AppBar>
    )
}

export default Procurar
