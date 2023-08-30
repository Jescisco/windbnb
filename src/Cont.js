import "./styles.css";
export function Cont({
  city,
  country,
  superHost,
  title,
  rating,
  maxGuests,
  type,
  beds,
  photo,
}) {
  return (
    <section>
      <div>
        <img src={photo} width="394px" height="267px" className="mb-3"/>
      </div>
      <div className="linea-dos">
        <div className="d-flex">
          <div className={superHost ? "me-4" : ""}>
            <button disabled className={superHost ? "superhost-style":"d-none"}>SUPER HOST</button>
          </div>
          <div className="me-4">
            <p className="type-style">
              {type}
            </p>
          </div>
        </div>
        <div>
          <p className="negrita">⭐{rating}</p>
        </div>
      </div>
      <div>
        <p className="">{title}</p>
      </div>
    </section>
  );
}
