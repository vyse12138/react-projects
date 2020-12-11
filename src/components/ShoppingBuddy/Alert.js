import React, { useEffect } from 'react'

const Alert = ({ msg, color, removeAlert }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert();
        }, 2000);
        return () => clearTimeout(timeout);
    })
    return (
        <div className={`mt-4 py-2  col text-center alert alert-${color}`}>{msg}</div>
    );
}

export default Alert
