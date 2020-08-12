/** @jsx jsx */
import { jsx } from '@emotion/core'
import styles from '../style/variables'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Input(props) {
    return (
        <div css={{
            position: 'relative',
        }}>
            <div css={{
                position: 'absolute',
                top: '50%',
                marginTop: '-10px',
                left: '10px',
                fontSize: '20px',
                lineHeight: '20px',
                height: '20px',
                color: styles.primaryColor
            }}>
                <FontAwesomeIcon icon={props.icon} />
            </div>
            <input css={{
                fontSize: '24px',
                border: 'none',
                display: 'block',
                margin: '10px 0',
                padding: '10px 10px 10px 50px',
                width: '100%',
                height: '48px',
                borderBottom: `2px solid ${styles.primaryColor}`,
                boxSizing: 'border-box',
                '&:focus': {
                    outline: 'none'
                },
                '&::placeholder': {
                    color: '#cacaca'
                },
                ...props.customStyle
            }} 
            onChange={props.onChange}
            value={props.value}
            placeholder={props.placeholder} />
        </div>
    )
}
