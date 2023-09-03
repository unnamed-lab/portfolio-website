import "assets/css/style.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="row">
        <section className="credit mx-auto text-center">
          &copy; Copyright {year}. Made by &nbsp;
          <a href="https://twitter.com/unnamed_labs" className="footer-credit">
            Unnamed
          </a>
          &nbsp;and&nbsp;
          <a href="https://twitter.com/cypheir_tech" className="footer-credit">
            Cypheir Technology
          </a>
          &nbsp;with much love 💙
        </section>
      </div>
    </>
  );
};

export default Footer;
