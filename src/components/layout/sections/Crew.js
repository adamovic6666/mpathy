import { OUR_CREW } from "../../../data/crew";
import classes from "./Crew.module.css";
import CrewMember from "./CrewMember";

const Crew = () => {
  const boradOfDirectos = OUR_CREW.slice(0, 3);
  const advisoryBoard = OUR_CREW.slice(3, 13);
  return (
    <div className={`${classes.CrewWrapper} container`}>
      <h2>Board of Directors Mpathy Apps CIC</h2>
      <ul className={classes.CrewList}>
        {boradOfDirectos.map((member, index) => {
          return <CrewMember key={index} member={member} />;
        })}
      </ul>
      <h2>Advisory Board Mpathy Apps CIC</h2>
      <ul className={classes.CrewList}>
        {advisoryBoard.map((member, index) => {
          return <CrewMember key={index} member={member} />;
        })}
      </ul>
    </div>
  );
};

export default Crew;
