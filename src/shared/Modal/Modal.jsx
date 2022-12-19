import React from "react";
import like from "../../assets/images/icons/like.svg";
import comment from "../../assets/images/icons/comment.svg";
import arrowBack from "../../assets/images/icons/arrow-back.svg";

const Modal = ({ item, setModalActiveHandler }) => {
  const {
    author,
    category,
    tags,
    content,
    description,
    title,
    views_count,
    image,
  } = item;
  console.log(item);
  return (
    <div className="modal">
      <button
        onClick={() => {
          setModalActiveHandler(false);
        }}
      >
        <img src={arrowBack} alt="" />
      </button>
      <img src={image} alt="" />
      <p className="title-text">{title}</p>
      <div className="ratings">
            <div className="category">
                <button className="category-news">{category.title}</button>
            </div>
            <div className="like-section">
                <img className="like" src={like} alt="" />
                <p>{views_count}</p>
            </div>
            <div className="comment-section">
                <img className="comment" src={comment} alt="" />
                <p>{views_count}</p>
            </div>

        </div>
        <div className="chanel-blog">
            <div className="media">
            <img className="like" src={author.avatar} alt="" />
                <div className="time">
                    <h4>{author.name}</h4>
                    <p>5 days ago</p>
                </div>
            </div>
            <button className="btn">+ Follow</button>
        </div>
        <p className="content-news">{content}</p>
      <div className="tags">
        {tags.map((item, index) => {
          return <span className="btn-tags" key={index}> #{item}</span>;
        })}
      </div>
    </div>
  );
};

export default Modal;
