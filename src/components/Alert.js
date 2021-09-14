import React from 'react'

function Alert(props) {
    const captia=(word)=>{
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (props.Alert &&
        <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
            <strong>{captia(props.Alert.type)}</strong>{props.Alert.msg}  
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert
