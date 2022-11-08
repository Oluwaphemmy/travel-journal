const Infor = (props) => {
  return (
    <div className="display">
      <img className="pics" src={props.pics} />

      <div className="content">
        <div className="japa">
          <h1 className="country">{props.location}</h1>
          <a className="map" href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">
            {props.map}
          </a>
        </div>
        <div className="title-tag">
          <h1 className="title">{props.title}</h1>
        </div>

        <div className="date">
          <p className="start">{props.start}- </p>
          <p className="end">{props.end}</p>
        </div>
        <div className="describe">
          <p className="description">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Infor;
