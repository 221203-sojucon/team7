import React from 'react'
import style from './Comment.module.scss';

export const CommentTextarea = () => {
  return (
    <div>
      <p className={ style.CommentLabel } >추천하는 행동</p>
      <textarea className={ style.CommentTextarea } />
    </div>
  )
}