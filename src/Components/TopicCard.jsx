import React from "react";
import { useNavigate } from "react-router";

function TopicCard({ topic }) {
  const navigate = useNavigate();
  return (
    <div>
      <section
        className="topics-card"
        onClick={() => navigate(`/topics/${topic.slug}`)}
      >
        <img className="topic-card-img" src={topic.img_url ||   "https://images.unsplash.com/photo-1543058871-74a1d669ba70?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      } alt={topic.slug} />
        <h1 className="topic-card-title">{topic.slug}</h1>
        <p className="topic-card-description">{topic.description}</p>
      </section>
    </div>
  );
}

export default TopicCard;
