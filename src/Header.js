import React from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import { Menu,Search,Info } from '@material-ui/icons';
import useStyles from './Styles';

function Header({abrirDrawer,setPano,abrirModalA}) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar color="primary">
            <Toolbar>
                <IconButton color="inherit" className={classes.icon} onClick={abrirDrawer}>
                    <Menu color="inherit" className={classes.icone} />
                </IconButton>
                <Typography variant="h6" className={classes.nomeApp}>
                    Francisco
                </Typography>
                <div style={{flexGrow:1}}/>
                <IconButton color="inherit" onClick={()=>setPano(true)}>
                    <Search color="inherit" className={classes.icone}/>
                </IconButton>
                <IconButton color="inherit" onClick={abrirModalA}>
                    <Info color="inherit" className={classes.icone} />
                </IconButton>
            </Toolbar>
            </AppBar>
            <Toolbar />
        </React.Fragment>
    )
}

export default Header
