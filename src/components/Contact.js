import "./Contact.css";

export default function Location() {
  return (
    <div className="map-cont">
      <div className="socials-cont">
        <p>Address: Kavaja St, Tirana, Albania</p>
        <p className="timeSlot">Everyday 11:30 AM - 11:30 PM</p>

        <a href="tel:+355697268387">
          <p className="nrBtn">+355 69 7268 387</p>
        </a>

        <a
          href="https://www.instagram.com/explore/locations/105144621888978/restorant-tymi/?utm_source=ig_embed&ig_rid=eaf405be-211f-44f7-a2d8-87bd16c5f3d2"
          target="_blank"
        >
          <p className="igBtn">Instagram</p>
        </a>
        <a href="https://www.facebook.com/TymiVerReci/" target="_blank">
          <p className="fbBtn">Facebook</p>
        </a>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2180.6408328426164!2d19.81158755634167!3d41.328453532061495!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310603edbe4f%3A0xd8b454b0db311e19!2sRestorant%20Tymi!5e0!3m2!1sen!2sit!4v1703769116845!5m2!1sen!2sit"
        loading="lazy"
      ></iframe>
    </div>
  );
}
