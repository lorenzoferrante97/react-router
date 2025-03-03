import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Post() {
  const [post, setPost] = useState({ id: 0, title: '', content: '', image: '', tags: [] });
  const { id } = useParams();
  const { title, content, image, tags } = post;

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <main className="container-fluid bg-smoke-50 mt-10u rounded-xl">
      <section className="row-grid p-10u">
        <div className="col-span-full flex flex-col gap-4u">
          <span>{image}</span>
          <h1 className="font-h1">{title}</h1>
          <div className="flex flex-wrap gap-2u">
            {tags.map((singleTag, i) => {
              return (
                <>
                  <span className="px-3u py-2u font-body-s-light border border-black rounded-full" key={i}>
                    {singleTag}
                  </span>
                </>
              );
            })}
          </div>
          <p className="font-body-base-light">{content}</p>
        </div>
      </section>
    </main>
  );
}
