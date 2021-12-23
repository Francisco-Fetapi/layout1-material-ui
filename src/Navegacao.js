import React from 'react'
import {ButtonGroup,Button, Paper, } from '@material-ui/core'
import {Sort,MyLocation,FormatListBulleted} from '@material-ui/icons'
import useStyles from './Styles'
import Regiao from './Regiao';
import Filtrar from './Filtrar';

function Navegacao({style,setModal}) {
    const classes = useStyles();
    const regioes = [
        {label:'Benguela'},
        {label:'Luanda'},
        {label:'Uige'},
        {label:'Lubango'},
        {label:'Huila'},
        {label:'Kwaza-Norte'},
        {label:'Kwanza-Sul'},
        {label:'Lunda-Norte'},
        {label:'Lunda-Sul'},
      ]
      const categorias = [
        {label:'Entreteimento'},
        {label:'Agro e Industria'},
        {label:'Animais de estimacao'},
        {label:'Artigos Infantis'},
        {label:'Automoveis'},
        {label:'Comercio e Escritorio'},
        {label:'Esporte e Lazer'},
      ];

      const filtros = [
        {label:'Estado',label2:'Selecione o Estado'},
        {label:'Regiao',label2:'Aguardando Estado'},
        {label:'Cidade',label2:'Aguardando Regiao'},
        {label:'Ordenar por',label2:'Data'},
      ]
    return (
        <Paper className={classes.paperNavegacao}>
            <ButtonGroup fullWidth variant="text" style={style} className={classes.navegacao}>
                <Button startIcon={<MyLocation />} 
                    onClick={()=>setModal(true,{
                        titulo:'Regiao',
                        icone:<MyLocation style={{marginRight:5}}/>,
                        componente:<Regiao titulo="Provincias de Angola" items={regioes}/>,
                        lista:regioes
                    })}
                >Angola</Button>
                <Button startIcon={<FormatListBulleted />}
                    onClick={()=>setModal(true,{
                        titulo:'Categorias',
                        icone:<FormatListBulleted style={{marginRight:5}}/>,
                        componente:<Regiao titulo="Todas as Categorias" items={categorias}/>,
                        lista:categorias
                    })}
                >Categoria</Button>
                <Button startIcon={<Sort />}
                    onClick={()=>setModal(true,{
                        titulo:'Filtrar',
                        icone:<Sort style={{marginRight:5}}/>,
                        componente:<Filtrar titulo="Formas de Filtro" items={filtros}/>,
                        lista:filtros
                    })}
                >Filtrar</Button>
            </ButtonGroup>
        </Paper>
    )
}

export default Navegacao
