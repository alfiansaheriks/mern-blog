import React from 'react'
import { RegisterBg } from '../../../assets'
import './blogitem.scss'
import { Button } from '../../atoms'
import { useNavigate } from 'react-router-dom'

const BlogItem = (props) => {
  const {image, title, name, date, body, _id, onDelete} = props;
  const navigate = useNavigate();
  const navigateDetailBlog = () => {
    navigate(`/detail-blog/${props._id}`)
  }
  const navigateEditBlog = () => {
    navigate(`/create-blog/${props._id}`)
  }
  return (
    <div className="blog-item">
        <img className="image-thumb" src={image} alt="post"/>
        <div className="content-detail">
          <div className="title-wrapper">
            <p className="title">{title}</p>
              <div className="edit-wrapper">
                <p className="edit" onClick={navigateEditBlog}>Edit</p> | <p className="delete" onClick={() => onDelete(_id)}>Delete</p>
              </div>
          </div>
            <p className="author">{name} - {date}</p>
            <p className="body">{body}</p>
            <Button title="View Detail" onClick={navigateDetailBlog} />
        </div>
    </div>
  )
}

export default BlogItem
