/** @jsx jsx */
import { jsx } from '@emotion/core'
import styles from '../style/variables'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SidebarToggle(props) {
    return (
        <div css={{
            width: '30px',
            height: '30px',
            background: styles.primaryColor,
            position: 'absolute',
            right: '10px',
            top: '15px',
            borderRadius: '0 5px 5px 0',
            cursor: 'pointer',
            '@media (max-width: 420px)': {
                right: props.mobileOffset
            }
        }}
        onClick={props.onClick}>
            <div css={{
                color: styles.secondaryColor,
                textAlign: 'center',
                lineHeight: '30px',
                fontSize: ' 14px'
            }}>
                <div css={{
                    '@media (max-width: 420px)': {
                        display: 'none'
                    }
                }}>
                    <FontAwesomeIcon icon={props.icon} />
                </div>
                
                <div css={{
                    '@media (min-width: 420px)': {
                        display: 'none'
                    }
                }}>
                    <FontAwesomeIcon icon={props.mobileIcon} />
                </div>
            </div>
            
        </div>
    )
}
