import React from 'react';
import {css, StyleSheet} from 'aphrodite';
import {SearchIcon, PinIcon, PowerIcon, BackIcon, ListIcon} from './Icons';

const styles = StyleSheet.create({
    icon: {
        padding: '16px 8px',
        ':hover': {
            cursor: 'pointer',
        }
    },
});

const ToolbarIcon = ({icon, onClick}) => {
    const icons = {
        back: <BackIcon/>,
        search: <SearchIcon/>,
        map: <PinIcon/>,
        power: <PowerIcon/>,
        list: <ListIcon/>,
    };

    return (
        <a
            className={css(styles.icon)}
            onClick={onClick}>
            {icons[icon]}
        </a>
    );
};

export default ToolbarIcon;