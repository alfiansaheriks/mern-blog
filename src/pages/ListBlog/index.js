import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDataBlog } from '../../config/redux/action';
import { TableArticle, Button, Gap } from '../../components';

const ArticleList = () => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(1);
  const { dataBlog, page } = useSelector(state => state.listArticleReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataBlog(counter));
  }, [counter, dispatch]);

  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1)
    console.log(counter);
  }

  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1)
    console.log(counter)
  }
  
  const navigateCreate = () => {
    navigate('/create-blog');
  }

  if (!dataBlog) {
    return <p>Loading...</p>; // Handle case when data is not yet loaded
  }

  const columns = [
    {
      header: 'Title',
      accessor: 'title'
    },
    {
      header: 'Author',
      render: (article) => article.author.name // Custom render function for nested data
    },
    {
      header: 'Actions',
      render: (article) => (
        <Link
          to={`/create-blog/${article._id}`}
          className="text-blue-500 hover:underline"
        >
          Edit
        </Link>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Articles</h1>
      <div className="flex flex-wrap space-between mb-4">
        <Button className="inline-block text-black hover:text-black border border-gray-700 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-xs px-5 py-2.5 text-center dark:border-gray-200 dark:text-black dark:hover:text-black dark:hover:bg-gray-100 dark:focus:ring-gray-100 pointer-events-auto" title="Create" onClick={navigateCreate} />
      </div>
      <TableArticle columns={columns} data={dataBlog} />
      <div className="flex m-auto w-fit mt-4">
        <Button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800" title="Previous" onClick={previous} />
        <Gap width={20} />
        <p className="text-3xl">{page.currentPage} / {page.totalPage}</p>
        <Gap width={20} />
        <Button className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800" title="Next" onClick={next} />
      </div>
    </div>
  );
};

export default ArticleList;
