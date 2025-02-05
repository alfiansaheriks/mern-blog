import React, { useEffect, useState } from 'react';
import { Button, Input, TextArea, Upload, Gap, Link } from '../../components';
import './createBlog.scss';
import { useNavigate, useParams } from 'react-router-dom';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { postToAPI, setForm, setImgPreview, updateToAPI } from '../../config/redux/action';

const CreateBlog = () => {
  const { form, imgPreview } = useSelector(state => state.createBlogReducer);
  const { title, body } = form;
  const [isUpdate, setIsUpdate] = useState(false);
  const [file, setFile] = useState(null); // Separate state for the actual file object
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams(); 
  const navigateHome = () => {
    navigate('/');
  }

  useEffect(() => {
    console.log('params: ', id)
    if(id){
      setIsUpdate(true);
      Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
      .then(res => {
        const data = res.data.data;
        console.log('res: ', data);
        dispatch(setForm('title', data.title));
        dispatch(setForm('body', data.body));
        dispatch(setImgPreview(`http://localhost:4000/${data.image}`));
      })
      .catch(err => {
        console.log('err: ', err)
      })
    }
  }, [id]);

  const onSubmit = () => {
    if(isUpdate) {
      console.log('update data');
      updateToAPI({ ...form, file }, id);
    } else {
      console.log('create data');
      postToAPI({ ...form, file });
    }
  }

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setFile(file);
    dispatch(setImgPreview(URL.createObjectURL(file)));
  }

  

  return (
    <div className="blog-post">
      <Link title="Kembali" onClick={navigateHome} />
      <p className="title">{isUpdate ? 'Update' : 'Create New'} Blog Post</p>
      <Input label="Post Title" value={title} onChange={(e) => dispatch(setForm('title', e.target.value))} />
      <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
      <TextArea value={body} onChange={(e) => dispatch(setForm('body', e.target.value))} />
      <Gap height={20} />
      <div className="button-action">
        <Button title={isUpdate ? 'Update' : 'Simpan'} onClick={onSubmit} />
      </div>
    </div>
  )
}

export default CreateBlog;
