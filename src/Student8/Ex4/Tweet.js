import React from 'react'
import './Tweet.scss'

export const Tweet = ({message, color, onClicked}) => {
    
    let className = "Message";

    switch (color) {
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
                {message}
                <button onClick={() => (onClicked(color))}>Like</button>
            </div>
        </div>
    )
}
