import React from 'react';

import './file-upload.style.scss'

const FileUpload = ({ postType }) => (
  postType === 'announcement' || postType === 'feedback' || postType === 'response' ?
  <input className='upload' type='file' /> :
  null
)

export default FileUpload;
