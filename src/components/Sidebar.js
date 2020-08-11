/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useState } from 'react';
import styles from '../style/variables'

import { faCreditCard, faSignOutAlt, faAngleRight, faAngleLeft, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import SidebarToggle from '../components/SidebarToggle'
import Logo from '../components/Logo'
import SidebarItem from '../components/SidebarItem'

export default function Sidebar() {

    const [compact, setCompact] = useState(false);

    return (
        <div css={{
            background: styles.primaryColor,
            width: compact ? '56px' : '240px',
            height: '100vh',
            position: 'relative',
            transition: 'all ease-in-out 0.15s',
            '@media (max-width: 420px)': {
                width: compact ? '0' : '100%',
            }
        }}>

            <SidebarToggle 
                icon={compact ? faAngleRight : faAngleLeft}
                compact={compact}
                mobileOffset={compact ? '-30px' : '10px'}
                mobileIcon={compact ? faBars : faTimes}
                onClick={() => setCompact(!compact)} />
            
            <Logo 
                first={compact ? 'c' : 'capture'} 
                second={compact ? 'p' : 'portal'} />

            <SidebarItem compact={compact} icon={faCreditCard} label='Credit Cards' route='/capture' />
            <SidebarItem compact={compact} icon={faSignOutAlt} label='Sign Out' route='/' />
            
        </div>
    )
}
