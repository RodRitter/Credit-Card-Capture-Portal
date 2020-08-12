/** @jsx jsx */
import { jsx } from '@emotion/core'

export default function PanelGroup(props) {
    return (
        <div css={{
            display: 'flex',
            flexWrap:'wrap',
        }}>

            {props.children}
            
        </div>
    )
}
