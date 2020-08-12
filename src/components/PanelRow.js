/** @jsx jsx */
import { jsx } from '@emotion/core'
import styles from '../style/variables'

export default function PanelRow(props) {
    return (
        <div css={{
            borderBottom: `1px solid ${styles.secondaryColor}`,
            padding: '0 5px',
            display: 'flex',
            height: '40px'
        }}>
            {props.children}
        </div>
    )
}
