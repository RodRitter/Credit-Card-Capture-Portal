/** @jsx jsx */
import { jsx } from '@emotion/core'
import styles from '../style/variables'

import Sidebar from '../components/Sidebar'

export default function CreditCardCapture() {
    return (
        <div css={{
            display: 'flex',
            background: styles.secondaryColor
        }}>
            <Sidebar />
        </div>
    )
}
