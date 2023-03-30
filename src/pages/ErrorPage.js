import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>Page was not found...</i>
      </p>
      <Link to="/posts">Go to posts</Link>
    </div>
  );
  }