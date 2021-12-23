import React from 'react'
import { Paper,Divider,Fab, List,ListItem,Avatar, ListItemAvatar, ListItemText, ListItemSecondaryAction, ListItemIcon } from '@material-ui/core'
import {ArrowForwardIos,Camera} from '@material-ui/icons'
import useStyles from "./Styles"
import Pagina from './Pagina'

function Main({items,setarPagina,setLoading}) {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <List>
                {items.map(item=>(
                    <React.Fragment key={item.titulo}>
                        <ListItem button alignItems="flex-start" onClick={()=>setarPagina({
                            titulo:'Informações Adicionais',
                            icone:null,
                            componente:<Pagina imagem={item.imagem} titulo={item.titulo}/>,
                            estado:true,
                            tipo:0
                        })}>
                            <ListItemAvatar className={classes.avatar}>
                                <Avatar style={{width:'inherit',height:'inherit'}} variant="square" src={item.imagem}/>
                            </ListItemAvatar>
                            <ListItemText primary={item.titulo} secondary={item.msg}/> 
                            <ListItemSecondaryAction>
                                <ArrowForwardIos style={{fontSize:12,color:'#333'}}/>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider variant="middle"/>
                    </React.Fragment>
                ))}
            </List>

            <Fab color="secondary" className={classes.fab} onClick={setLoading}>
                <Camera />
            </Fab>
        </Paper>
    )
}

export default Main
