import React from 'react'
import Button from './Button'


const Gdpr = ({x}) => {
    
    return(
        <div id='gdpr' className='gdprNotification'>
            <div>
                <div className='upperBox'>
                    <p style={{ fontSize: '15px', fontWeight: '700' }}>Review our Cookie policy</p>
                    <button className='x' onClick={x}>X</button>
                </div>
                <div className='lowerBox'>
                    <div className='leftBox'>
                        <div style={{ fontSize: '16px', padding: "0 0 25px 0", fontWeight: 300, lineHeight: '30px' }}>What do we use Cookies for?</div>
                        We use cookies for
                    <strong> absolutely nothing, and don't even save them. </strong>
                        To learn more about our cookie policy, including how to disable them, view our <a /* without rel=noopener the opened website can target the staying one https://mathiasbynens.github.io/rel-noopener/*/ rel="noopener noreferrer" target='_blank' href="https://www.google.com/search?rlz=1C1GGRV_enFI753FI753&sxsrf=ACYBGNQUO6p6ATyWk55gvLSXH8G7aP_omQ%3A1570476687065&ei=j5KbXZ7QA4ORkwXMppywCQ&q=how+to+disable+cookies&oq=how+to+disable+cookies&gs_l=psy-ab.3..0i203l10.5658.8689..8917...0.0..0.202.2023.21j0j1......0....1..gws-wiz.......35i39j35i39i19j0i67j0.WEcRiB9IopM&ved=0ahUKEwje073I8YrlAhWDyKQKHUwTB5YQ4dUDCAs&uact=5">Cookie Policy</a>.
                        By clicking "I Accept" or "X" on this banner, or by continuing using our site,
                        you consent to the use of cookies according to our cookie policy unless you have disabled them.
                </div>
                    <div className='rightBox'>
                        <Button link='accept' msg='I ACCEPT' x={x}></Button>
                    </div>

                </div>
            </div>
            
        </div>
    )
}


export default Gdpr