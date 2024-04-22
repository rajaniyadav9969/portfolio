import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toDefault, toText } from '../Redux/animateSlice'

function TextWithCursor({ children }) {

    const dispatch = useDispatch()
    return (
        <div onMouseEnter={() => dispatch(toText())} onMouseLeave={() => dispatch(toDefault())} >
            {children}
        </div>
    )
}

export default TextWithCursor