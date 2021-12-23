import React from 'react'
import { Box,Grid,Button, Typography,Card,CardContent, CardMedia } from '@material-ui/core'
import { LocationOn } from '@material-ui/icons';
import Constantes from './Constantes';

function Pagina({imagem,titulo}) {
    const infos = Constantes.infos;
    return (
        <div>
            <Card>
                <CardMedia image={imagem} style={{height:200}}/>
                <CardContent>
                    <Typography variant="h6"><b>{titulo}</b></Typography>
                    <br />
                    <Typography variant="body1"><b>KZ 2.000.000</b></Typography>
                    <Box display="flex" marginTop={1.5} alignItems="center">
                        <LocationOn color="primary" fontSize="small"/>
                        <Typography color="primary" variant="body2">
                            Benguela, Akongo 26/06/2018, 12:25
                        </Typography>
                    </Box>
                    <Informacoes items={infos} titulo="Informacoes" showDesc={true}/>
                    <Box marginTop={1}>
                        <Typography variant="body2" color="textSecondary">Contato</Typography>
                        <Grid container>
                            <Grid item xs={5}>
                                <Button fullWidth color="primary" variant="contained">Chat</Button>
                            </Grid>
                            <Grid item xs={2}></Grid>
                            <Grid item xs={5} >
                                <Box display="flex" marginTop={1.5} alignItems="center">
                                    <LocationOn color="primary" fontSize="small"/>
                                    <Typography color="primary" variant="body2">
                                        +244 912349848
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box marginTop={2}>
                        <Typography variant="body2" color="textSecondary">Algum problema</Typography>
                        <Typography variant="body2">
                            Denuncie qualquer problema
                        </Typography>
                    </Box>

                    <Box marginTop={2}>
                        <Typography variant="body2" color="textSecondary">Anunciante</Typography>
                        <Typography variant="body2">
                            teste123@gmail.com
                        </Typography>
                    </Box>
                    
                </CardContent>
            </Card>
        </div>
    )
}

function Informacoes({titulo,items,descricao,showDesc}){
    return(
        <Box marginTop={2}>
            <Typography variant="body2" color="textSecondary">{titulo}</Typography>
            <br />
            <Grid container>
                {items.map(item=>(
                    <React.Fragment key={item.label1}>
                        <Grid item xs={6}>
                            <Typography variant="body2">
                                {item.label1}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2">
                                <b>{item.label2}</b>
                            </Typography>
                        </Grid>
                    </React.Fragment>
                ))}
            </Grid>
            <Box marginTop={2}>
                <Typography variant="body2">
                    {showDesc && "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero molestiae in nam minus. Enim, itaque quisquam. Libero aspernatur laudantium ipsum repellat, praesentium!"}
                </Typography>
            </Box>
        </Box>
    )
}
export default Pagina
