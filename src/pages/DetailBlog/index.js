import React, { useEffect, useState } from 'react';
import { RegisterBg } from '../../assets';
import './detailBlog.scss';
import { Gap, Link } from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';

const DetailBlog = () => {
  const [data, setData] = useState(null);
  const { id } = useParams(); // Access the route parameter
  const navigate = useNavigate();

  useEffect(() => {
    // console.log('params: ', id);
    Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
      .then(res => {
        // console.log('success: ', res);
        setData(res.data.data);
      })
      .catch(err => {
        console.log('err: ', err);
      });
  }, [id]);

  const navigateToHome = () => {
    navigate('/');
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={`http://localhost:4000/${data.image}`} alt="thumb" />
      <p className="blog-title">{data.title}</p>
      <p className="blog-author">{data.author.name} - {new Date(data.createdAt).toLocaleDateString()}</p>
      <p className="blog-body">{data.body}</p>
      <Gap height={20} />
      <Link title="Kembali ke Home" onClick={navigateToHome} />
    </div>
  );
}

export default DetailBlog;
