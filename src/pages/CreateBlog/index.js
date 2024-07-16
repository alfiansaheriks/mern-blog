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
    if (id) {
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
    if (isUpdate) {
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
      <button type="button" className="mb-2 w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700" onClick={navigateHome}>
        <svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>
        <span>Go back</span>
      </button>
      <p className="title">{isUpdate ? 'Update' : 'Create New'} Blog Post</p>
      <Input label="Post Title" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={title} onChange={(e) => dispatch(setForm('title', e.target.value))} />
      <Upload className="block w-full border placeholder-gray-400 border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 file:bg-gray-100 file:border-0 file:me-4 file:py-3 file:px-4 dark:file:bg-neutral-700 dark:file:text-neutral-400" onChange={(e) => onImageUpload(e)} img={imgPreview} />
      <TextArea label="Post Body" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={body} onChange={(e) => dispatch(setForm('body', e.target.value))} />
      <Gap height={20} />
      <div className="button-action">
        <Button className="w-full py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" title={isUpdate ? 'Update' : 'Simpan'} onClick={onSubmit} />
      </div>
    </div>
  )
}

export default CreateBlog;
