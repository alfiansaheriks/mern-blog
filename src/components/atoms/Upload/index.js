import React from 'react';
import './upload.scss';
import { LoginBg } from '../../../assets';

const Upload = ({img, ...rest}) => {
  return (
    <div className="upload">
        {img && <img className="preview" src={img} alt="preview" />}
        <input type="file" {...rest} />
    </div>
  )
}

export default Upload
