import Head from "next/head";
import Link from "next/link";

export default () => (
  <div>
    <Head>
      <title>Sticky BBQ Menu</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel="stylesheet" type="text/css" href="../static/menu.css" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Anton"
        rel="stylesheet"
      />
    </Head>
    <div id="pageBody">
      <section id="landingContent">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link href="/">
            <a className="navbar-brand">
              <img
                src="../static/Sticky-BBQ-logo-1.png"
                alt="Sticky Fingers logo"
                height="48"
              />
            </a>
          </Link>
          <div className="d-flex justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/menu">
                  <a className="nav-link">Menu</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  </div>
);
