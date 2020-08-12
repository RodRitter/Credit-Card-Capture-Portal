/** @jsx jsx */
import { jsx } from '@emotion/core'
import styles from '../style/variables'

export default function Panel(props) {
    return (
        <div css={{
            padding: '5px',
            flexGrow: props.grow ? props.grow : '1',
            flexBasis: props.basis ? props.basis : '',
        }}>
            <div css={{
                background: '#fff',
                // border: '1px solid #eaebef',
                borderRadius: '3px',
                boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.03)',
                padding: '10px',
                height: '100%',
                boxSizing: 'border-box'
            }}>
                <h2 css={{
                    margin: '0 0 10px 0',
                    color: styles.darkGrey,
                    fontSize: '16px',
                    fontWeight: '500'
                }}>{props.title}</h2>

                {props.children}

            </div>
        </div>
    )
}
