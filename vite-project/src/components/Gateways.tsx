import "./Card.css";

function Gateways() {
  return (
    <div className="card">
      <div className="card-title">Gateways</div>
      <div className="card-value">7</div>
      <div className="card-details">
        <div>
          <span className="status online"></span> Online 0
        </div>
        <div>
          <span className="status offline"></span> Offline 7
        </div>
        <div>
          <span className="status unapproved"></span> Unapproved 0
        </div>
      </div>
    </div>
  );
}

export default Gateways;
