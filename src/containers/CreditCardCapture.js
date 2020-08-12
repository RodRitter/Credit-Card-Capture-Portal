/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState } from 'react';

import { connect } from 'react-redux'
import { addCard, removeCard } from '../redux/actions/cardActions'
import { addBanned, removeBanned } from '../redux/actions/bannedActions'

import styles from '../style/variables'
import CardService from '../services/cardService'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheckCircle, faGlobeAfrica } from "@fortawesome/free-solid-svg-icons"

import Sidebar from '../components/Sidebar'
import Page from '../components/Page'
import PageHeading from '../components/PageHeading'
import PanelGroup from '../components/PanelGroup'
import Panel from '../components/Panel'

import CardInput from '../components/CardInput'
import Input from '../components/Input'
import Button from '../components/Button'
import PanelRow from '../components/PanelRow'
import Spinner from '../components/Spinner'
import Toaster from '../components/Toaster'

const CardStatus = {
    READY: 'Ready for processing',
    DONE: 'Successfully Added',
    ERROR: 'Invalid Card',
    BANNED: 'Banned country'
}

function CreditCardCapture(props) {

    const [loading, setLoading] = useState(false);
    const [cardNumber, setCardNumber] = useState('');
    const [readyCards, setReadyCards] = useState([]);
    const [countrySearch, setCountrySearch] = useState('');
    const [error, setError] = useState('');


    function showError(text) {
        setError(null)
        window.setInterval(() => setError(text), 200)
    }

    function processBatch() {
        if(readyCards.length > 0) {
            setLoading(true)
            let cardPromises = []
            readyCards.forEach((card) => {
                cardPromises.push(CardService.GetBinInfo(String(card.cardNumberClear).substring(0,8)))
            })
    
            Promise.allSettled(cardPromises)
            .then((result => {
                parseProcessed(result)
                console.log(result)
            }))
            .catch((err) => {
                console.log(err)
                showError('Processing error')
            })
            .finally(() => {
                setLoading(false)
            })
        }
    }

    function parseProcessed(results) {
        let ready = [...readyCards]
        results.forEach((res, index) => {
            const success = res.status === 'fulfilled'
            const banned = false
            let status = CardStatus.DONE

            if(banned) status = CardStatus.BANNED
            else if(!success) status = CardStatus.ERROR

            ready[index].status = status

            if(success) {
                props.addCard(ready[index])
            }
        })
    }

    function addToBatch() {
        const clearNum = cardNumber.replace(/\s+/g, '')
        if(clearNum.length < 16) {
            showError('Card numbers need to be 16 digits')
        }
        else if (readyCards.length === 5) {
            showError('Maximum of 5 cards can be processed at a time')
        }
        else {
            let cards = [...readyCards]

            let exists = false
            cards.forEach((card) => {
                if(card.cardNumberClear === clearNum) exists = true
            })
            
            if(!exists) {
                cards.push({
                    cardNumber: cardNumber,
                    cardNumberClear: clearNum,
                    status: CardStatus.READY
                })
                setReadyCards(cards)
                setCardNumber('')
            }
        }
    }

    function clearBatch() {
        setReadyCards([])
    }

    function removeCard(number) {
        let newArr = [...readyCards]
        newArr.forEach((card, index) => {
            if(card.cardNumberClear === number) {
                newArr.splice(index, 1)
            }
        })
        setReadyCards(newArr)
    }

    const RowStatus = (props) => (
        <div css={{
            display: 'flex',
            color: styles.primaryColor,
            marginLeft: '20px',
            ...props.customStyle
        }}>
            <div css={{
                fontSize: '18px',
                alignSelf: 'center',
                marginRight: '5px'
            }}>
                {props.icon ? <FontAwesomeIcon icon={props.icon} /> : ''}
            </div>

            <div css={{
                lineHeight: '40px',
                fontSize: '12px'
            }}>{props.text}</div>
        </div>
    )

    return (
        <div css={{
            display: 'flex',
            background: styles.secondaryColor
        }}>
            <Sidebar />

            {error ? <Toaster text={error} /> : ''}

            <Page>
                <PageHeading text='Credit Cards' />

                <PanelGroup>

                    <Panel 
                        title='Add Credit Cards'
                        basis='min(50%, 600px)'>
                        
                        <div css={{
                            display: 'flex'
                        }}>
                            
                            <div css={{
                                display: 'flex',
                                flexWrap: 'wrap'
                            }}>
                                <CardInput value={cardNumber} onChange={number => {setCardNumber(number)}} />
                                <Button label='Add' onClick={addToBatch} />
                            </div>

                        </div>

                        <div>
                            
                            {readyCards.map((card, index) => (
                                <PanelRow key={index}>

                                    <div css={{
                                        fontSize: '12px',
                                        lineHeight: '40px',
                                        marginRight: '20px',
                                        cursor: 'pointer',
                                    }} onClick={() => removeCard(card.cardNumberClear)}><FontAwesomeIcon icon={faTimes} /></div>

                                    <div css={{
                                        fontFamily: '"Inconsolata", monospace',
                                        fontSize: '16px',
                                        lineHeight: '40px',
                                        marginRight: '10px'
                                    }}>
                                        {card.cardNumber}
                                    </div>
                                        
                                    {loading ? <Spinner /> : ''}

                                    {card.status === CardStatus.DONE ? <RowStatus customStyle={{color: 'green'}} icon={faCheckCircle} text={card.status} /> : ''}
                                    {card.status === CardStatus.ERROR || card.status === CardStatus.BANNED ?  <RowStatus customStyle={{color: 'red'}} icon={faTimes} text={card.status} /> : ''}
                                
                                </PanelRow>
                            ))}


                                {readyCards.length > 0 ? <Button label='Clear' onClick={clearBatch} customStyle={{
                                    margin: '20px 10px 20px 0', 
                                    background: '#d2d2d2', 
                                    color: '#000',
                                    '&:hover': {background: '#b5b5b5'}
                                }} /> : ''}

                                {readyCards.length > 0 ? <Button label='Process' onClick={processBatch} customStyle={{marginTop: '20px'}} /> : ''}
                                

                        </div>
                        
                    </Panel>

                    <Panel
                        title='All Credit Cards'
                        basis='min(50%, 600px)'>
                        
                        {props.allCards.map((card, index) => {
                            return (
                                <PanelRow key={index}>

                                    <div css={{
                                        fontSize: '12px',
                                        lineHeight: '40px',
                                        marginRight: '20px',
                                        cursor: 'pointer',
                                    }} onClick={() => props.removeCard(card)}><FontAwesomeIcon icon={faTimes} /></div>
                                    
                                    <div css={{
                                        fontFamily: '"Inconsolata", monospace',
                                        fontSize: '16px',
                                        lineHeight: '40px',
                                        marginRight: '10px'
                                    }}>
                                        {card.cardNumber}
                                    </div>
                                </PanelRow>
                                
                            )
                        })}
                    </Panel>

                    <Panel
                        title='Ban a Country'
                        basis='min(50%, 600px)'>
                        
                        <div css={{
                                display: 'flex',
                                flexWrap: 'wrap'
                        }}>
                            <Input value={''} icon={faGlobeAfrica} placeholder='Search Country' customStyle={{fontSize: '16px', width: '325px'}} />
                            <Button label='Add' onClick={addToBatch} customStyle={{marginLeft: '20px'}} />
                        </div>

                        {props.allBannedCountries.map((country, index) => {
                            return (
                                <PanelRow key={index}>

                                    <div css={{
                                        fontSize: '12px',
                                        lineHeight: '40px',
                                        marginRight: '20px',
                                        cursor: 'pointer',
                                    }} onClick={() => props.removeBanned(country)}><FontAwesomeIcon icon={faTimes} /></div>
                                    
                                    <div css={{
                                        fontFamily: '"Inconsolata", monospace',
                                        fontSize: '16px',
                                        lineHeight: '40px',
                                        marginRight: '10px'
                                    }}>
                                        {country.name}
                                    </div>
                                </PanelRow>
                                
                            )
                        })}
                        
                    </Panel>

                    <Panel
                        title='Banned Countries'
                        basis='min(50%, 600px)'>
                            test
                    </Panel>

                </PanelGroup>

            </Page>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps', state)
    return {
      allCards: state.cardsReducer.cards,
      allBannedCountries: state.bannedReducer.countries
    }
}

const mapDispatchToProps = { addCard, removeCard, addBanned, removeBanned }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreditCardCapture)
