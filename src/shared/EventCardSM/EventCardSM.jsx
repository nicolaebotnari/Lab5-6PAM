import save from "../../assets/images/icons/bookmark.svg";
import like from "../../assets/images/icons/like.svg";
import comment from "../../assets/images/icons/comment.svg";

const EventCardSM = ({
  item,
  author,
  title,
  views_count,
  image,
  category,
  setModalActiveHandler,
  setSingleArticleHandler,
}) => {
  return (
    <div
      className="event-card-sm"
      onClick={() => {
        setModalActiveHandler(true);    //deschide modal
        setSingleArticleHandler(item);  //transmite informatia spre modal
      }}
    >
      <div className="event-card-sm__img-wrapper">
        <img src={image} alt={title} className="event-card-sm__img" />
      </div>
      <div className="event-card-sm__text">
        <h5>{title.slice(0, 30)}</h5>
      </div>
      <div className="event-card-sm__chanel">
        <div className="chanel-section">
          <img className="like" src={author.avatar} alt="" />
          <h4>{author.name}</h4>
          <div className="category">
                <button className="category-news">{category.title}</button>
            </div>
        </div>
      </div>
      <div className="event-card-sm__ratings">
        <div className="like-section">
          <img className="like" src={like} alt="" />
          <p>{views_count}</p>
        </div>
        <div className="comment-section">
          <img className="comment" src={comment} alt="" />
          <p>{views_count}</p>
        </div>
        <button className="save-event">
          <img src={save} alt="Save this event to favorites." />
        </button>
      </div>
    </div>
  );
};

export default EventCardSM;
