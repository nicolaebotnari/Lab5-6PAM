import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import LocationBar from "./components/LocationBar/LocationBar";
import EventCardLG from "../../shared/EventCardLG/EventCardLG";
import EventCardSM from "../../shared/EventCardSM/EventCardSM";
import Modal from "../../shared/Modal/Modal";

import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [singleArticle, setSingleArticle] = useState({});

  const params = {
    slidesPerView: "auto",
    spaceBetween: 16,
    freeMode: true,
  };

  useEffect(() => {
    fetch("https://news-app-api.k8s.devebs.net/articles")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArticles(data.results);
      });
  }, []);

  return (
    <div className="homepage">
      <LocationBar />
      <Swiper {...params} className="events-slider" modules={[FreeMode]}>
        {!!articles &&
          articles.length > 0 &&
          articles.map((item, index) => {
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
            return (
              <SwiperSlide key={index}>
                <EventCardLG
                  item={item}
                  author={author}
                  category={category}
                  tags={tags}
                  content={content}
                  description={description}
                  title={title}
                  views_count={views_count}
                  image={image}
                  setModalActiveHandler={setModalActive}
                  setSingleArticleHandler={setSingleArticle}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className="upcoming-events">
        <div className="upcoming-events__title">
          <h5>News</h5>
          <a href="/upcoming-events">See all</a>
        </div>
        {!!articles &&
          articles.length > 0 &&
          articles.map((item, index) => {
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
            return (
              <EventCardSM
                item={item}
                key={index}
                author={author}
                category={category}
                tags={tags}
                content={content}
                description={description}
                title={title}
                views_count={views_count}
                image={image}
                setModalActiveHandler={setModalActive}
                setSingleArticleHandler={setSingleArticle}
              />
            );
          })}
      </div>
      {!!modalActive && (
        <Modal item={singleArticle} setModalActiveHandler={setModalActive} />
      )}
    </div>
  );
};

export default Home;
