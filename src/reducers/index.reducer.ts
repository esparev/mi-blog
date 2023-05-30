type ActionProps = {
  type: string;
  payload: string | undefined;
};

const reducer = (state: BlogPosts | undefined, action: ActionProps) => {
  switch (action.type) {
    case 'SEE_BLOGPOST':
      return {
        ...state,
        currentBlogPost: state?.blogPosts?.find((item) => item.slug === String(action.payload)),
      };
    default:
      return state;
  }
};

export default reducer;
