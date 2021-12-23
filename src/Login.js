import React from 'react'
import { Box,IconButton,Divider,List,ListItem,ListItemAvatar,Avatar,ListItemText,ListItemSecondaryAction, TextField,Button,Typography,AppBar,Toolbar,Tabs,Tab } from '@material-ui/core'
import {ArrowBack,ArrowForwardIos} from '@material-ui/icons'
import useStyles from './Styles';
import Pagina from './Pagina'
import Constantes from './Constantes';
import Lista from './Lista';

function Login() {
    const [login,setLogin] = React.useState(true);
    const [itemAtivo,setItemAtivo] = React.useState('a');
    const classes = useStyles();
    const items = Constantes.items;
    const items2 = Constantes.dadosPessoais;
    function AltenarPagina(){
        setLogin(!login)
    }
    return (
        <section className="tudoLogin">
            <div style={{padding:10}}>
                {login && <Box display="flex" flexDirection="column">
                    <Typography variant="h4" align="center">Login</Typography>
                    <br />
                    <TextField type="email" placeholder="E-mail cadastrado" InputLabelProps={{shrink:true}}  color="primary" label="E-mail"/>
                    <br />
                    <TextField type="password" placeholder="Sua senha" InputLabelProps={{shrink:true}}  color="primary" label="Senha"/>
                    <br />
                    <Button style={{padding:10}} fullWidth variant="contained" color="primary" onClick={AltenarPagina}>Entrar na Conta</Button>
                    <br />
                    <Button style={{padding:10}} fullWidth variant="contained" color="secondary" onClick={AltenarPagina}>Ainda não é cadastrado</Button>
                    <br />
                </Box>}
            </div>
            {!login && 
            
            <AppBar>
                <Toolbar>
                    <IconButton color="inherit" style={{marginLeft:-20,marginRight:10}} onClick={AltenarPagina}>
                        <ArrowBack color="inherit"/>
                    </IconButton>
                    <Typography variant="h6" className={classes.nomeApp}>
                        Minha conta
                    </Typography>
                </Toolbar>
                <Tabs variant="fullWidth" TabIndicatorProps={{style:{backgroundColor:'white'}}} style={{width:'100%'}} value={itemAtivo} onChange={(e,nv)=>setItemAtivo(nv)}>
                    <Tab value="a" label="Meus Anuncios"/>
                    <Tab value="b" label="Meu Perfil" />
                </Tabs>
            </AppBar>
            }

            {itemAtivo==='a' && !login &&
                <React.Fragment>
                    <br />
                    <List>
                    {items.map(item=>(
                        <React.Fragment key={item.titulo}>
                            <ListItem button alignItems="flex-start">
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
            </React.Fragment>
            }

            {itemAtivo === 'b' && !login &&
                <React.Fragment>
                    <br />
                    <Lista titulo="Dados pessoais" items={items2} comp2={true}/>
                </React.Fragment>
            }
        </section>
    )
}

export default Login
