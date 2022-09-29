
interface DescriptionProps {
    text: string;
}

const Description = ({text = "This is a description"}:DescriptionProps) => {
  return (
    <p>{text}</p>
  );
};

export default Description;