import currwork1 from "../../assets/currwork/currwork1.jpg";
import currwork2 from "../../assets/currwork/currwork2.png";
import currwork3 from "../../assets/currwork/currwork3.png";

const CurrentWork = () => {
  return (
    <div className="currwork-ctn">
      <div
        className="currwork"
        style={{
          backgroundImage: `url(${currwork1})`,
        }}
      >
        01
      </div>
      <div
        className="currwork"
        style={{
          backgroundImage: `url(${currwork2})`,
        }}
      >
        02
      </div>
      <div
        className="currwork"
        style={{
          backgroundImage: `url(${currwork3})`,
        }}
      >
        03
      </div>
    </div>
  );
};

export default CurrentWork;
