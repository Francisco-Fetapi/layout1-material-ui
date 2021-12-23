import React from 'react'
import { Button,Dialog,Slide, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'

const Transition = React.forwardRef(function(props,ref){
    return <Slide direction="left" ref={ref} {...props}/>
})

function ModalApresentacao(props) {
    return (
     <Dialog fullScreen {...props} TransitionComponent={Transition}>
         <DialogTitle>Apresentação</DialogTitle>
         <DialogContent dividers>
             <DialogContentText style={{fontSize:14}}>
                Este Layout foi montado com <b>React</b> usando o <b>Material-ui</b>(uma biblioteca de componentes do React).<br/><br/>
                <b>Aviso:</b> Este App não faz absolutamente nada, é só um layout que fiz para treinar os conceitos aprendidos tanto do <b>React</b> quanto do <b>Material-UI</b>. <br /><br/>
                Ao Assistir um video no meu computador vi uma pagina parecida com essa então decidi replicar, só isso!
             </DialogContentText>
         </DialogContent>
         <DialogActions>
             <Button variant="outlined" color="default" onClick={props.onClose}>Entendi</Button>
         </DialogActions>
     </Dialog>
    )
}

export default ModalApresentacao
