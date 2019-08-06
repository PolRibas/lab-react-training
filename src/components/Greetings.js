import React from 'react'

function Greetings(props) {

    const selectGreeting = (lang) => {
        if (lang === 'de'){
            return 'hallo'
        } else if (lang === 'en') {
            return 'hello'
        } else {
            return 'bonjeour'
        }
    }
    return ( 
        <div>
            <h2>{selectGreeting(props.lang) + ' ' + props.children}</h2>    
        </div>
        )
}

export default Greetings;
