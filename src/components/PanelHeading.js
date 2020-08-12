/** @jsx jsx */
import { jsx } from '@emotion/core'
import styles from '../style/variables'

export default function PanelHeading(props) {
    return (
        <div css={{
            margin: '15px 0 0 0',
            color: '#a1a6a9',
            fontSize: '14px',
            textTransform: 'uppercase',
        }}>
            {props.children}
        </div>
    )
}
