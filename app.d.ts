interface CustomWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}
interface BlogItem {
  cover: string;
  title: string;
  description: string;
  slug: string;
}
interface NewBlog {
  cover: string;
  title: string;
  description: string;
  route: string;
}
interface Project {
  id?: string;
  title: string;
  description: string;
}
interface Blog {
  currentBlogPost: BlogItem;
  seeBlogPost: (payload: string | undefined) => void;
}
interface BlogPosts {
  blogPosts?: BlogItem[];
}
interface Projects {
  projects?: Project[];
}
type ComponentProps = {
  children: ReactNode;
};
module '*.png' {
  const value: string;
  export default value;
}
