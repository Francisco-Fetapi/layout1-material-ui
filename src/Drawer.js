import React from 'react'
import DrawerMui from '@material-ui/core/Drawer'
import {Avatar, Typography,Grid,Box,Divider,List,ListItem,ListItemText,ListItemIcon, ListItemSecondaryAction, ListSubheader} from '@material-ui/core'
import {ArrowForwardIos,Create,StarOutline,AddShoppingCart,AccountBox,AddAPhoto} from '@material-ui/icons'
import useStyles from './Styles'
import Login from './Login'

function Drawer({aberto,fecharDrawer,irPara}) {
    const classes = useStyles();
    const items = [
        {
            label:'Minha conta',
            icon:<AccountBox />
        },
        {
            label:'Editar minhas fotos ',
            icon:<Create />
        },
        {
            label:'Meus favoitos',
            icon:<StarOutline />
        },
        {
            label:'Adicionar ao carrinho',
            icon:<AddShoppingCart />
        },
        {
            label:'Adicionar foto',
            icon:<AddAPhoto />
        },
    ];

    const items2 = [
        {
            label:'Duvidas Frequentes'
        },
        {
            label:'Dicas de Anuncio',
        },
        {
            label:'Termos de uso'
        },
    ]
    return (
        <div>
            <DrawerMui variant="temporary" open={aberto} onClose={fecharDrawer} classes={{paper:classes.drawer}}>
                <Grid container className={classes.gridDrawer}>
                    <Grid item xs={4}>
                        <Avatar variant="square" className={classes.avatar2}/>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="h6">Nome do Usuario</Typography>
                        <Typography style={{fontSize:13}}>email@akongo.com.ao</Typography>
                    </Grid>
                </Grid>
                <Box display="flex" flexDirection="column">
                    <Box>
                        <Lista items={items} titulo="Selecione uma opcao" irPara={irPara}/>
                    </Box>
                    <Box marginTop={5}>
                        <Lista items={items2} irPara={irPara}/>
                    </Box>
                </Box>
            </DrawerMui>
        </div>
    )
}

function Lista({items,titulo,irPara}){


    return(
        <React.Fragment>
            <List>
                {titulo && 
                    <ListSubheader>{titulo}</ListSubheader>
                }
                {items.map(item=>(
                    <React.Fragment key={item.label}>
                        <ListItem button onClick={()=>irPara({
                            titulo:item.label,
                            icone:item.icon,
                            componente:(item.label==="Minha conta"?<Login />:item.label),
                            estado:true,
                            tipo:2
                        })}>
                            { item.icon &&
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                            }
                            <ListItemText primary={item.label}/>
                            <ListItemSecondaryAction>
                                <ArrowForwardIos style={{fontSize:12,color:'#333'}}/>
                            </ListItemSecondaryAction>
                            
                        </ListItem>
                        <Divider variant="inset"/>
                    </React.Fragment>
                ))}
            </List>
        </React.Fragment>
    )
}

export default Drawer
