/** @jsx jsx */
import { jsx, keyframes } from '@emotion/core'
import { useState } from 'react';

export default function Toaster(props) {

    const appear = keyframes`
        from {
            top: -30px;
            opacity: 0;
        }

        10%, 90% {
            top: 10px;
            opacity: 1;
        }

        to {
            top: -30px;
            opacity: 0;
        }
    `

    const [showing, setShowing] = useState(false);

    function test() {

    }

    return (
        <div css={{
            background: props.color ? props.color : '#f75959',
            color: '#fff',
            padding: '10px 25px',
            position: 'fixed',
            top: '-30px',
            opacity: '0',
            left: '50%',
            margin: '0 auto',
            fontSize: '14px',
            animation:`${appear} 3s ease`,
            animationFillMode: 'forwards',
            animationDirection: 'forwards'
        }}>
            {props.text}
        </div>
    )
}
