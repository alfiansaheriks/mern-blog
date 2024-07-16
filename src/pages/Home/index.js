import React, { useEffect, useState } from "react";
import { BlogItem, Button, Gap } from '../../components';
import './home.scss';
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setDataBlog } from "../../config/redux/action";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Axios from 'axios';

const Home = () => {
    const [counter, setCounter] = useState(1);
    // const [dataBlog, setDataBlog] = useState([]);
    //const {dataBlogs, name} = useSelector(state => state);
    const {dataBlog, page} = useSelector(state => state.homeReducer);
    const dispatch = useDispatch();
    // console.log('state global: ', stateGlobal);
    // console.log('data blog global: ', dataBlog)
    // console.log('page', page)
    useEffect(() => {
        dispatch(setDataBlog(counter))
 
    }, [counter, dispatch])
    const navigate = useNavigate();
    const navigateCreate = () => {
        navigate('/create-blog')
    }

    const previous = () => {
        setCounter(counter <= 1 ? 1 : counter -1)
        // console.log(counter);
    }

    const next = () => {
        setCounter(counter === page.totalPage ? page.totalPage : counter + 1)
        // console.log(counter)
    }

    const confirmDelete = (id) => {
        confirmAlert({
          title: 'Confirm to delete',
          message: 'Apakah Anda yakin akan menghapus post ini?',
          buttons: [
            {
              label: 'Ya',
              onClick: () => {
                // console.log(id)
                Axios.delete(`http://localhost:4000/v1/blog/post/${id}`)
                .then(res => {
                    console.log('success delete: ', res.data)
                    dispatch(setDataBlog(counter))
                })
                .catch(err => {
                    console.log('err: ', err)
                })
              }
            },
            {
              label: 'Tidak',
              onClick: () => alert('Click No')
            }
          ]
        });
      };

    return (
        <div className="home-page-wrapper">
            <div className="create-wrapper">
                <Button className="ml-13vh text-black hover:text-black border border-gray-700 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-xs px-5 py-2.5 text-center dark:border-gray-200 dark:text-black dark:hover:text-black dark:hover:bg-gray-100 dark:focus:ring-gray-100 pointer-events-auto" title="Create" onClick={navigateCreate} />
            </div>
            <Gap height={20} />
            <div className="content-wrapper">
                {dataBlog.map(blog => {
                    return <BlogItem 
                    key={blog._id} 
                    image={`http://localhost:4000/${blog.image}`} 
                    title={blog.title}
                    body={blog.body}
                    name={blog.author.name}
                    date={blog.createdAt}
                    _id={blog._id}
                    onDelete={confirmDelete}
                    />
                })}
            </div>
            <div className="pagination">
                <Button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800" title="Previous" onClick={previous} />
                <Gap width={20} />
                <p className="text-page">{page.currentPage} / {page.totalPage}</p>
                <Gap width={20} />
                <Button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800" title="Next" onClick={next}/>
            </div>
            <Gap height={20} />
        </div>
    )
}

export default Home;