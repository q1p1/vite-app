import "./Card.css";

function Anchors() {
  return (
    <div className="card">
      <div className="card-title">Anchors</div>
      <div className="card-value">16</div>
      <div className="card-details">
        <div>
          <span className="status online"></span> Online 4
        </div>
        <div>
          <span className="status offline"></span> Offline 9
        </div>
        <div>
          <span className="status unapproved"></span> Unapproved 3
        </div>
      </div>
    </div>
  );
}

export default Anchors;
