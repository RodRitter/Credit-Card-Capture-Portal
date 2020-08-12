/** @jsx jsx */
import { jsx } from '@emotion/core'
import styles from '../style/variables'

export default function Button(props) {
    return (
        <button css={{
            background: props.disabled ? '#5a669c' : '#4259C1',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            height: '35px',
            padding: '0 20px',
            margin: '0',
            cursor: props.disabled ? 'default' : 'pointer',
            alignSelf: 'center',
            transition: 'background 0.2s',
            '&:hover': {
                background: props.disabled ? '#5a669c' : styles.primaryColor,
            }, 
            '&:focus': {
                outline: 'none'
            },
            '&:active': {
                background: props.disabled ? '#5a669c' : '#4259C1',
            },
            ...props.customStyle
        }}
        onClick={!props.disabled ? props.onClick : () => {}}>
            {props.label}
        </button>
    )
}
