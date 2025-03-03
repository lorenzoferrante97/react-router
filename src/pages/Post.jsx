import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Post() {
  const { post, setPost } = useState({ id: 0, title: '', content: '', image: '', tags: [] });

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <main className="container-fluid bg-smoke-50 mt-10u rounded-xl">
      <section className="row-flex"></section>
    </main>
  );
}
