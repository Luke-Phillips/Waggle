import React from 'react';

import './file-upload.style.scss'

const FileUpload = ({ postType, onChoose }) => (
  postType === 'announcement' || postType === 'feedback' || postType === 'response' ?
  <input className='upload' type='file' onChange={onChoose} /> :
  null
)

export default FileUpload;
