import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePost } from "../../redux/postSlice";
import Header from '../Header/Header';
import Footer from '../Footer';

function OmConCommunity() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const postList = useSelector((state) => state.posts.value);
  const dispatch = useDispatch();

  const handlePostSubmit = () => {
    if (name.trim()) {
      dispatch(
        addPost({
          id: postList.length + 1,
          name: name,
          content: content,
        })
      );

      setName("");
      setContent("");
    }

  };
  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <Header />

      <div>
        <div className="flex flex-col mb-8">
          <input
            className="title"
            type="text"
            placeholder="タイトル"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <textarea
            className="content"
            type="text"
            placeholder="投稿内容"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
          <button className="border-2 w-10" onClick={handlePostSubmit}>投稿</button>
        </div>

        <div className="flex flex-col gap-8">
          {postList.map(p => (
            <div key={p.id}>
              <h1>{p.name}</h1>
              <h1>{p.content}</h1>
              <div className="flex gap-4">
                <button className="border-2 w-35" onClick={() => dispatch(deletePost({ id: p.id }))}>Delete</button>
                <button className="border-2 w-35">書き込む</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div >
  );
}

export default OmConCommunity