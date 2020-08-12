/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState } from 'react';

import { faCreditCard } from "@fortawesome/free-solid-svg-icons"
import Input from '../components/Input'

export default function CardInput(props) {

    function onSetNumber(val) {
        props.onChange(val)
    }

    function onInputChange(e) {
        const lastValue = e.target.value[e.target.value.length-1]
        const pureNum = e.target.value.replace(/\s+/g, '')

        if((!isNaN(lastValue) || e.target.value === '') && pureNum.length <= 16) {
            let regex = /[0-9]{1,4}/g
            const found = pureNum.match(regex)

            if(found) {
                let formatted = ''
                found.forEach((group, index) => {
                    const spacer = index !== found.length-1 ? ' ' : ''
                    formatted += (group+spacer)
                })
                
                onSetNumber(formatted)
            } else if(e.target.value === '') {
                onSetNumber('')
            }
        }
    }

    return (
        <div css={{
            marginRight:'20px'
        }}>
            <Input
            placeholder='0000 0000 0000 0000'
            icon={faCreditCard}
            onChange={onInputChange}
            value={props.value}
            customStyle={{
                fontFamily: '"Inconsolata", monospace',
                ...props.customStyle
            }} />
        </div>
    )
}
