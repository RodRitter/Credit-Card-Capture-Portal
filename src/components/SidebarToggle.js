/** @jsx jsx */
import { jsx } from '@emotion/core'
import styles from '../style/variables'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SidebarToggle(props) {
    return (
        <div css={{
            width: props.compact ? '100%' : '30px',
            height: '30px',
            background: props.compact ? styles.primaryColor : 'transparent',
            position: 'absolute',
            right: '0',
            top: '15px',
            borderRadius: '0 5px 5px 0',
            cursor: 'pointer',
            '@media (max-width: 799px)': {
                right: props.mobileOffset,
                background: styles.primaryColor,
                width: '30px'
            }
        }}
        onClick={props.onClick}>
            <div css={{
                color: styles.secondaryColor,
                textAlign: 'center',
                lineHeight: '30px',
                fontSize: ' 14px',
            }}>
                <div css={{
                    '@media (max-width: 799px)': {
                        display: 'none'
                    }
                }}>
                    <FontAwesomeIcon icon={props.icon} />
                </div>
                
                <div css={{
                    '@media (min-width: 799px)': {
                        display: 'none'
                    }
                }}>
                    <FontAwesomeIcon icon={props.mobileIcon} />
                </div>
            </div>
            
        </div>
    )
}
