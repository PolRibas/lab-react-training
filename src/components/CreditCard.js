import React, { Component } from 'react'

 class CreditCard extends Component {
    render() {
        return (
            <article>
                <h2>{this.props.number}</h2>
                <p>Expires {this.props.expirationMonth}/{this.props.expirationYear-2000}</p>
                <p>{this.props.bank}</p>
                <p>{this.props.owner}</p>
            </article>
        )
    }
}

export default CreditCard;