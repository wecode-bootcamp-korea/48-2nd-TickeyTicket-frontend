import React, { useState } from 'react';
import PostFormSection from '../components/Post/PostFormSection';

export default function PostForm() {
  const [product, setProduct] = useState({});

  return (
    <section className="max-w-[500px] mx-auto pt-[30px] pb-[50px]">
      <div>
        <PostFormSection />
      </div>
    </section>
  );
}
