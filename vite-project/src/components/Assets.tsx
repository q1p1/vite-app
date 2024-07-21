import "./Card.css";

function Assets() {
  return (
    <div className="card">
      <div className="card-title">Assets</div>
      <div className="card-value">90</div>
      <div className="card-details , text">
        <div>
          <span className="status active"></span> Active 2
        </div>
        <div>
          <span className="status inactive"></span> Inactive 3
        </div>
        <div>
          <span className="status unassigned"></span> Unassigned 84
        </div>
        <div>
          <span className="status offline"></span> Offline 1
        </div>
      </div>
    </div>
  );
}

export default Assets;
