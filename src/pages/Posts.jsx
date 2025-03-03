import { useEffect, useState } from 'react';

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
      <section className="row-grid">
        {/* ciclare cols con dentro posts */}

        {postsList.map((singlePost) => {
          const { id, title, content, image, tags } = singlePost;

          return (
            <>
              <div
                className="col-span-full flex flex-col perfect-center min-h-[60vh] gap-7u"
                key={id}
              >
                <span className="w-full h-28u flex perfect-center bg-smoke-100">{image}</span>
                <h1 className="font-h1">{title}</h1>
                <div className="flex gap-2u">
                  {tags.map((singleTag, i) => {
                    return (
                      <>
                        <span
                          className="px-3u py-2u font-body-s-regular border border-black rounded-full"
                          key={i}
                        >
                          {singleTag}
                        </span>
                      </>
                    );
                  })}
                </div>
                <p className="font-body-base-light">{content}</p>
              </div>
            </>
          );
        })}
      </section>
    </main>
  );
}

// end code
