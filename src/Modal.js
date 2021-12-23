import React from 'react'
import {Dialog,DialogContent,Slide, AppBar,Box, Toolbar, Typography,IconButton} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import useStyles from './Styles'

const Transition = React.forwardRef(function Transition(props,ref){
    return <Slide ref={ref} direction="up" {...props}/>
})

function Modal({open,setModal,icone,headerIcone2,tipo,titulo,Titulo,componente}) {
    const classes = useStyles();
    return (
        <Dialog fullScreen open={open} TransitionComponent={Transition}>
            <DialogContent style={{padding:0}}>
                <AppBar>
                    <Toolbar>
                    <IconButton color="inherit" style={{marginLeft:-20,marginRight:10}} onClick={()=>setModal(false)}>
                        <ArrowBack color="inherit"/>
                    </IconButton>
                    <Typography variant="h6" className={classes.nomeApp}>
                        {Titulo}
                    </Typography>
                    {tipo !== 2 && headerIcone2 && 
                        <React.Fragment>
                            <div style={{flexGrow:1}} />
                            {headerIcone2}
                        </React.Fragment>
                    }
                    <Box display="flex" alignItems="center">
                        {icone}
                        <Typography variant="h6" className={classes.nomeApp}>
                            {titulo}
                        </Typography>
                    </Box>
                    </Toolbar>
                </AppBar>
                <Toolbar />
                {componente}
            </DialogContent>
        </Dialog>
    )
}

export default Modal
