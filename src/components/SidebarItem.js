/** @jsx jsx */
import { jsx } from '@emotion/core'
import styles from '../style/variables'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SidebarItem(props) {

    return (
        <div 
            css={{
                display: 'flex',
                padding: '15px 20px',
                color: styles.secondaryColor,
                cursor: 'pointer',
                transition: 'background 0.2s',
                borderBottom: '1px solid #1b244e',
                '&:hover': {
                    background: styles.tertiaryColor,
                    'div:first-of-type': {
                        color: styles.secondaryColor
                    }
                },
                '@media (max-width: 799px)': {
                    display: props.compact ? 'none' : 'flex'
                }
            }}
            onClick={() => {console.log('click')}} >

            <div css={{
                marginRight: '20px',
                color: styles.tertiaryColor,
                transition: 'color 0.2s',
                textAlign: 'center',
                width: '24px'
            }}>
                <FontAwesomeIcon icon={props.icon} />
            </div>

            <div css={{
                fontWeight: '300',
                fontSize: '14px',
                display: props.compact ? 'none' : 'initial',
                '@media (max-width: 799px)': {
                    display: 'initial'
                }
            }}>{props.label}</div>
        </div>
    )
}
