export default function Card({ imgUrl, title, description }) {
  return (
    <div>
      <img src={imgUrl} alt="" />
      {title}
    </div>
  );
}
