const EventCardLG = ({
  item,
  title,
  image,
  setModalActiveHandler,
  setSingleArticleHandler,
}) => {
  return (
    <div className="event-card-lg">
      <div className="event-card__info">
        <img className="event-card__img" src={image} alt={title} />
        <div className="event-card__img-bg"></div>
        <h5 className="event-card__title">
          {title}
          <button
            className="btn"
            onClick={() => {
              setModalActiveHandler(true);
              setSingleArticleHandler(item);
            }}
          >
            Read Now
          </button>
        </h5>
      </div>
    </div>
  );
};

export default EventCardLG;
