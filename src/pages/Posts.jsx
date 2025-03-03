import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Posts() {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then((response) => response.json())
      .then((data) => setPostsList(data))
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <main className="container-fluid bg-smoke-50 mt-10u rounded-xl">
      <section className="row-grid gap-x-5u gap-y-10u px-3u py-7u xl:px-7u">
        {/* ciclare cols con dentro posts */}

        {postsList.map((singlePost) => {
          const { id, title, tags } = singlePost;

          return (
            <>
              <div className="col-span-full md:col-span-4 flex flex-col gap-4u border border-black/10 p-5u rounded-lg shadow-sm bg-white" key={id}>
                <p className="font-body-l-bold">{title}</p>
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
                <Link to={`/posts/${id}`} className="px-7u py-2u bg-black text-white rounded-full w-fit">
                  Vai al post
                </Link>
              </div>
            </>
          );
        })}
      </section>
    </main>
  );
}

// end code
