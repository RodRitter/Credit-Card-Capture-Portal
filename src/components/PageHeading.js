/** @jsx jsx */
import { jsx } from '@emotion/core'
import styles from '../style/variables'

export default function PageHeading(props) {
    return (
        <h1 css={{
            color: '#6e7380',
            fontWeight: '600',
            margin: '0',
            height: '60px',
            lineHeight: '60px',
            fontSize: '22px'
        }}>
            {props.text}
        </h1>
    )
}
