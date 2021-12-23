import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme=>({
    icon:{
        marginLeft:-10,
        marginRight:10
    },
    icone:{
        fontSize:28,
    },
    navegacao:{
        marginTop:10,
        '& button':{
            padding:10,
            color:'#999',
            border:'none !important',
        }
    },
    nomeApp:{
        fontWeight:600,
        fontSize:22,
        fontFamily:'cursive'
    },
    paper:{
        width:'100%',
        minHeight:'95vh',
        padding:5,
    },
    avatar:{
        width:60,
        height:60,
        marginRight:10
    },
    fab:{
        position:'fixed',
        bottom:20,
        right:10
    },
    drawer:{
        width:'80%',
        maxWidth:350,
    },
    gridDrawer:{
        padding:20,
        backgroundColor:'rgb(94, 247, 102)',
        color:'white',
        '& h6':{
            fontWeight:600
        }
    },
    avatar2:{
        fontSize:30,
        color:'white',
        backgroundColor:'rgb(24, 117, 0)'
    },
    paperNavegacao:{
        display:'flex',
        justifyContent:'center'
    },
    backdrop:{
        zIndex:theme.zIndex.appBar+2,
        transition:'all 1s ease-in',
    },
    appBarBottom:{
        position:'absolute',
        bottom:0,
        top:'auto'
    }
}))

export default useStyles;