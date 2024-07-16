import React from 'react'
import './textarea.scss'
const TextArea = ({label, ...rest}) => {
  return (
    <div>
      <p className="label" >{label}</p>
      <textarea className="text-area" {...rest}>
      </textarea>
    </div>
  )
}

export default TextArea
