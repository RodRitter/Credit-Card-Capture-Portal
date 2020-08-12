/** @jsx jsx */
import { jsx, keyframes  } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

const spin = keyframes`
    100% { 
        -webkit-transform: rotate(360deg); 
        transform:rotate(360deg); 
    }
`

export default function Spinner() {
    return (
        <div css={{
            fontSize: '16px',
            alignSelf: 'center',
            animation:  `${spin} 1s linear infinite`
        }}>
            <FontAwesomeIcon icon={faSpinner} />
        </div>
    )
}
