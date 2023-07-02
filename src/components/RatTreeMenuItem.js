import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import RatIcon from 'ratComponents/RatIcon';
import 'ratStyles/admin';

function RatTreeMenuItem(props) {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();

    function handleClick (url) {
        if (url) {
            navigate(url);
        } else {
            setOpen(!open);
        }
    }

    return (
    <>
        <ListItemButton onClick={() => handleClick(props.menuData.url)}>
            <ListItemIcon>
                <RatIcon name={props.menuData.icon} />
            </ListItemIcon>
            <ListItemText primary={props.menuData.title} />
            {props.menuData.childMenuItems.length > 0 && <>
                {open ? <RatIcon name="expand_less" />
                    : <RatIcon name="expand_more" />
            }</>}
        </ListItemButton>
        {props.menuData.childMenuItems.length > 0 &&
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {props.menuData.childMenuItems.map((menuItem, index) => {
                        return (
                            <ListItemButton key={index} onClick={() => handleClick(menuItem.url)} sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <RatIcon name={menuItem.icon} />
                                </ListItemIcon>
                                <ListItemText primary={menuItem.title} />
                            </ListItemButton>
                        );
                    })}
                </List>
            </Collapse>
        }
    </>
    );
}

export default RatTreeMenuItem;
