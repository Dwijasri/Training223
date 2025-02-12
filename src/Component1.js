export default function ProfileCard({ name, greeting, imageSrc }) {
    return (
        <div className="Card">
      <div className="Card" style={{border:'5px solid gold'}}>
        <img className="img" src={imageSrc} alt={name} style={{height:"150px", width:"200px"}}/>
        <h2>{name}</h2>
        <p>{greeting}</p>
      </div>
      </div>
    );
  }
  