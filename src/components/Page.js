/** @jsx jsx */
import { jsx } from '@emotion/core'

export default function Page(props) {
    return (
        <div css={{
            padding: '0 20px',
            width: '100%',
            '@media (max-width: 799px)': {
                padding: '0 15px 0 5px',
            }
        }}>
            {props.children}
        </div>
    )
}
