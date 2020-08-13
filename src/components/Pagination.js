/** @jsx jsx */
import { jsx } from '@emotion/core'
import styles from '../style/variables'

export default function Pagination(props) {

    
    
    const Pages = () => {
        let pageCount = Math.ceil(props.count/props.countPerPage)
        let pages = []

        for (let i = 1; i <= pageCount; i++) {
            pages.push(
                <div key={i} onClick={() => {props.onClick(i)}} css={{
                    width: '25px',
                    height: '25px',
                    lineHeight: '25px',
                    borderRadius: '15px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    color: styles.primaryColor,
                    margin: '10px 5px 0 0',
                    background: props.active === i ? styles.primaryColor : 'transparent',
                    color: props.active === i ? styles.secondaryColor : 'initial',
                }}>
                    {i}
                </div>
            )
        }

        return pages
    }

    return (
        <div css={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap'
        }}>

            
            <Pages />
            
        </div>
    )
}
