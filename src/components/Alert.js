import React from 'react'

export default function Alert(props) {
    // var word;
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }


    return (
        <div style={{ height: '40px' }}>
            {props.alert &&
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show border-0 rounded-0`} role="alert">
                    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                </div>
            }
        </div>
    )
}
