const initialState = {
  form: {
    title: '',
    body: '',
    image: {
      name: '',
      size: '',
      type: '',
      lastModified: '',
    },
  },
  imgPreview: null,
}

const createBlogReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_FORM_DATA':
      return {
        ...state,
        form: {
          ...state.form,
          [action.formType]: action.formValue
        }
      };
    case 'SET_IMG_PREVIEW':
      return {
        ...state,
        imgPreview: action.payload
      };
    default:
      return state;
  }
}

export default createBlogReducer;
