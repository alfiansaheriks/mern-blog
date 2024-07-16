import Axios from 'axios';

export const getDataBlog = (page) => (dispatch) => {
    Axios.get(`http://localhost:4000/v1/blog/posts?page=${page}&perPage=2`)
      .then(res => {
        console.log('Fetched articles:', res.data.data); // Debugging
        const responseAPI = res.data;

        dispatch({type: 'GET_DATA_BLOG', payload: responseAPI.data})
        dispatch({type: 'UPDATE_PAGE', payload: {
            currentPage: responseAPI.current_page,
            totalPage: Math.ceil(responseAPI.total_data / responseAPI.per_page),
        }
    })
    })
      .catch(err => {
        console.log('Error fetching articles:', err);
      });
}

