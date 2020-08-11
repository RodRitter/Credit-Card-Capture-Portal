/** @jsx jsx */
import { jsx } from '@emotion/core'
import styles from '../style/variables'

export default function Logo(props) {
    return (
        <h1 css={{
            fontSize: '18px',
            fontWeight: '500',
            textAlign: 'center',
            height: '60px',
            lineHeight: '60px',
            color: styles.secondaryColor,
            margin: '0'
        }}>

            {props.first}

            <span css={{
                marginLeft: '2px',
                color: '#4259C1'
            }}>{props.second}</span>

        </h1>
    )
}
