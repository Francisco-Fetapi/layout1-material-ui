import './App.css';
import React from 'react';
import theme from './Tema';
import {ThemeProvider,IconButton, CircularProgress} from '@material-ui/core'
import {StarOutline,Share} from '@material-ui/icons'
import Header from './Header';
import Navegacao from './Navegacao';
import Main from './Main';
import Drawer from './Drawer';
import Procurar from './Procurar';
import PanoDeFundo from './PanoDeFundo';
import Modal from './Modal';
import Pagina from './Pagina';
import Constantes from './Constantes';
import ModalApresentacao from './ModalApresentacao';

const icones2Pagina = (
  <React.Fragment>
    <IconButton color="inherit">
        <StarOutline color="inherit"/>
    </IconButton>
    <IconButton color="inherit">
        <Share color="inherit"/>
    </IconButton>
  </React.Fragment>
)

function App() {

  const [drawer,setDrawer] = React.useState(false);
  const [pano,setPano] = React.useState(false);
  const [modal,setModal] = React.useState(false);
  const [pagina,setPagina] = React.useState({
    estado:false,
    titulo:'Nome da pagina',
    componente:<Pagina />,
    tipo:2
  });
  const [modalA,setModalA] = React.useState(false);

  const [infoModal,setInfoModal] = React.useState({
    titulo:'',
    icone:'',
    lista:null,
    componente:'',
  })
  const [loading,setLoading] = React.useState(false);

  const items = Constantes.items;


  function fecharDrawer(){
    setDrawer(false);
  }
  function abrirDrawer(){
    setDrawer(true);
  }
  function abrirModal(val,inforModal){
    setDrawer(false);
    setModal(val);
    setInfoModal(inforModal)
  }
  function setarPagina(v){
    setPagina({...pagina,estado:v})
  }
  function irPara(dados){
    setPagina(dados);
  }
  function fecharModalA(){
    setModalA(false);
  }
  function abrirModalA(){
    setModalA(true);
  }

  return (
      <ThemeProvider theme={theme}>
          <div className="app">
            
            <Header abrirDrawer={abrirDrawer} abrirModalA={abrirModalA} setPano={setPano}/>
            <Navegacao setModal={abrirModal}/>
            
            <Main items={items} setarPagina={irPara} setLoading={setLoading}/>
            
            <Drawer aberto={drawer} irPara={irPara} fecharDrawer={fecharDrawer}/>
            
            <PanoDeFundo open={pano}>
              <Procurar setPano={setPano} setModal={abrirModal}/>
            </PanoDeFundo>

            <PanoDeFundo open={loading} onClose={()=>setLoading(false)}>
              <CircularProgress />
            </PanoDeFundo>

            <ModalApresentacao open={modalA} onClose={fecharModalA}/>
            
            <Modal open={modal} titulo={infoModal.titulo} icone={infoModal.icone} setModal={setModal} componente={infoModal.componente}/>

            <Modal open={pagina.estado} setModal={setarPagina} Titulo={pagina.titulo} headerIcone2={icones2Pagina} componente={pagina.componente} tipo={pagina.tipo}/>
          </div>
      </ThemeProvider>
  );
}

export default App;
