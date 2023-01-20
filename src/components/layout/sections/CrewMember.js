import Image from "next/image";

const CrewMember = ({ member }) => {
  const { imgSrc, name, description, position } = member;
  return (
    <li>
      <Image src={imgSrc} alt="crew-member" width={175} height={175} />
      <h4>{name}</h4>
      <p>
        <span>{description}</span> <br />
        <span>{position}</span>
      </p>
    </li>
  );
};

export default CrewMember;
