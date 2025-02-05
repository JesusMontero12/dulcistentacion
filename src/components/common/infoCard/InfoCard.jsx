import { Link } from "react-router-dom";
import "./InfoCard.css";
import { BsClock, BsPinMap, BsTelephone } from "react-icons/bs";

const InfoCard = () => {
  return (
    <>
      <section className="py-5 bg-white" id="contact">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-4">
              <BsClock className="info-icon" />
              <h3 className="section-title h5">Horario</h3>
              <p className="text-secondary mb-1">Lun - Sáb: 10:00 - 21:00</p>
              <p className="text-secondary">Dom: Cerrado</p>
            </div>

            <div className="col-md-4">
              <BsTelephone className="info-icon" />
              <h3 className="section-title h5">Contacto</h3>
              <div className="link-contact">
                <Link
                  target="blank"
                  to="https://api.whatsapp.com/send?phone=56950834824&text=Hola%2C%20quisiera%20informaci%C3%B3n%20de%20..."
                  className="text-secondary mb-1"
                >
                  +56 9 50834824
                </Link>
                <Link
                  target="blank"
                  to="https://www.instagram.com/dulcistentacion_/"
                  className="text-secondary"
                >
                  Instagram: dulcistentacion
                </Link>
              </div>
            </div>

            <div className="col-md-4">
              <BsPinMap className="info-icon" />
              <h3 className="section-title h5">Ubicación</h3>
              <p className="text-secondary mb-1">Chile.</p>
              <Link
                target="blank"
                to="https://www.google.com/maps/place/Av.+Sta.+Rosa+2648,+8950041+San+Joaqu%C3%ADn,+Regi%C3%B3n+Metropolitana/@-33.4797675,-70.6441688,17z/data=!3m1!4b1!4m6!3m5!1s0x9662c5ff2f1b81e3:0x3ce779729f93d8a4!8m2!3d-33.4797675!4d-70.6415885!16s%2Fg%2F11w1dpf1pl?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D"
                className="text-secondary"
              >
                Santa Rosa 2648, San joaquín.
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoCard;
