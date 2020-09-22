import React from "react";

export default function MainPage() {
  return (
    <div className="main-wrapper">
      <div className="container">
        <header className="header">
          <nav className="nav">
            <img src="/logo-altra.png" alt="" />
            <span>بلیط هواپیما</span>
            <span>بلیط قطار</span>
            <span>بلیط اتوبوس</span>
            <span>رزرو هتل</span>
            <span>ورود/عضویت</span>
            <span className="lang">فارسی </span>
          </nav>
          <section className="search-service">
            <div></div>
            <div></div>
          </section>
        </header>
        <body>
          <section className="first-section">
            <article className="article">
              <img src="/suitcase.png" alt="suitcase" />
              <h3>لورم ایپسوم</h3>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </p>
            </article>
            <article className="article">
              <img src="/globe.png" alt="globe" />
              <h3>لورم ایپسوم</h3>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </p>
            </article>
            <article className="article">
              <img src="/hotel.png" alt="hotel" />
              <h3>لورم ایپسوم</h3>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </p>
            </article>
          </section>
        </body>
      </div>
    </div>
  );
}
