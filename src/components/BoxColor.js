import React from 'react'

function BoxColor(props) {
    const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
    
    const color = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}
    return (
        <section style={color}>
            <p>rgb({props.r},{props.g},{props.b})</p>
            <p>#{RGBToHex(props.r, props.g, props.b)}</p>
        </section>
    )
}

export default BoxColor;




