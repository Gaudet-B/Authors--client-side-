import React from 'react'

const Button = props => {

    const { title, clickHandler, submitHandler, arg } = props

    return (
        <div>
            {
            (arg) ?
            <button onClick={() => clickHandler(arg)} className="btn btn-primary me-2">
                {title}
            </button>
            :
            <button className="btn btn-primary me-2">
                {title}
            </button>
            }
        </div>
    )
}

export default Button
