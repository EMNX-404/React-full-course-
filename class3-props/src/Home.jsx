function Home(props) {
  return (
    <div className="premium-card">
  <div className="card-badge">⭐ Premium</div>

  <img
    src={props.image}
    alt="Car"
    className="card-image"
  />

  <div className="card-content">
    <h2>{props.title}</h2>

    <p>
      {props.content}
    </p>

    <div className="card-footer">
      <span className="price">Starting from <strong>$19/mo</strong></span>

      <button>Explore →</button>
    </div>
  </div>
</div>
  );
}

export default Home;