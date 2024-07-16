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
  const truncate = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }
  return (
    <div className="blog-item">
        <img className="image-thumb" src={image} alt="post"/>
        <div className="content-detail">
          <div className="title-wrapper">
            <p className="title">{truncate(title, 40)}</p>
              <div className="edit-wrapper">
                <p className="edit" onClick={navigateEditBlog}>Edit</p> | <p className="delete" onClick={() => onDelete(_id)}>Delete</p>
              </div>
          </div>
            <p className="author">{name} - {date}</p>
            <p className="body">{truncate(body, 100)}</p>
            <Button className="mt-2 w-full text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800" title="View Detail" onClick={navigateDetailBlog} />
        </div>
    </div>
  )
}

export default BlogItem
