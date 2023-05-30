export const seeBlogPost = (payload: string | undefined) => ({
  type: 'SEE_BLOGPOST',
  payload,
});

export default seeBlogPost;
