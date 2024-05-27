import Card from "./Card";
import "./discovertalent.scss";
import talentdata from "./dummydata";

const DiscoverTalent = () => {
  return (
    <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
      {talentdata.map((talent, index) => (
        <Card
          key={index}
          isNew={talent.new}
          name={talent.name}
          location={talent.location}
          skills={talent.skills}
        />
      ))}
    </div>
  );
};

export default DiscoverTalent;
