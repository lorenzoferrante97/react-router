import { useEffect, useState } from 'react';

export default function Posts() {
  const { postsList, setPostsList } = useState({ id: 0, title: '', content: '', image: '', tags: [] });

  useEffect(() => {
    fetch('url API')
      .then((response) => response.json())
      .then((data) => {
        setPostsList(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main className="container-fluid bg-smoke-50 mt-10u rounded-xl">
      <section className="row-grid">
        {/* ciclare cols con dentro posts */}

        <div className="col-span-full flex perfect-center min-h-[60vh]">
          <h1 className="font-h1">Titolo Posts</h1>
        </div>
      </section>
    </main>
  );
}

// end code
