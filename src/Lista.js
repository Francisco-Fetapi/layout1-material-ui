import React from 'react'
import {List,ListItemText,Divider, ListSubheader, ListItem, ListItemSecondaryAction, Typography, ListItemIcon } from '@material-ui/core'
import {ArrowForwardIos} from '@material-ui/icons'
function Lista({titulo,items,icone,comp2}) {
    return (
        <React.Fragment>
            <List>
                {titulo && <ListSubheader>{titulo}</ListSubheader>}
                {items.map(item=>(
                    <React.Fragment key={item.label}>
                        <ListItem button>
                            {icone && <ListItemIcon>
                                        {items[0].icone}
                                </ListItemIcon>
                            }
                            <ListItemText secondary={item.label2?item.label2:null}>
                                <Typography color="textSecondary">{item.label}</Typography>
                            </ListItemText>
                            <ListItemSecondaryAction>
                                {!comp2 && <ArrowForwardIos style={{fontSize:12,color:'#333'}}/>}
                                {comp2 && items[0].comp2}
                        </ListItemSecondaryAction>
                        </ListItem>
                        <Divider variant="middle"/>
                    </React.Fragment>
                ))}
            </List>
        </React.Fragment>
    )
}

export default Lista
