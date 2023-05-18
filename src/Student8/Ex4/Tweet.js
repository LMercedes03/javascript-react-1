import React from 'react'
import './Tweet.scss'

export const Tweet = (props) => {
    
    let className = "Message";

    switch (props.color) {
        case "red":
            className = "RedMessage"
            break;
        case "yellow":
            className = "YellowMessage"
            break;
        case "green":
            className = "GreenMessage"
            break;
        default:
            break;
    }

    return (
        <div className="Tweet">
            <div className={className}>
                {props.message}
            </div>
        </div>
    )
}
