import React, { useState } from "react";
import Carousel from "../../components/carousel/carousel";
import NewsLetter from "./../../components/newsletter/newsletter";
import { SeederCarouselTorism } from "../../containers/seeder-carousel";
import { seederCarouselIranTorism } from "../../containers/seeder-carousel";
import "./main.css";

export default function MainPage() {
  const [goBack, setGoBack] = useState("");
  const [ages, setAges] = useState("");

  return (
    <div className="main-wrapper">
      <div className="container">
        <header className="header">
          <nav className="nav">
            <span className="logo-nav">
              <img src="/logo-altra.png" alt="logo-altra" />
              <h4>آلترابو</h4>
            </span>
            <span className="tickets-nav">
              <p>بلیط هواپیما</p>
              <p>بلیط قطار</p>
              <p> بلیط اتوبوس </p>
              <p>رزرو هتل</p>
              <p>
                <img src="/ic_account_circle.png" alt="ic_account_circle" />
                ورود/عضویت
              </p>
              <p className="lang">
                <span>&#10094;</span>
                <img src="/ir.png" alt="ir" />
                فارسی
                <span>&#10095;</span>
              </p>
            </span>
          </nav>

          <section className="search-service">
            <div className="tickets">
              <span className="tickets-airplane">
                <img src="/airplane.png" alt="airplane" />
                <p>بلیط هواپیما</p>
              </span>
              <span className="train-airplane">
                <img src="/train.png" alt="train" />
                <p>بلیط قطار</p>
              </span>
              <span className="bus-airplane">
                <img src="/bus.png" alt="bus" />
                <p>بلیط اتوبوس</p>
              </span>
              <span className="hotel-airplane">
                <img src="/hotel.png" alt="hotel" />
                <p>رزرو هتل</p>
              </span>
            </div>
            <div className="search-inputs">
              <div>
                <select
                  value={goBack}
                  onChange={(e) => setGoBack(e.target.value)}
                  name="flight"
                  className="select-tag-goback"
                >
                  <option value="1طرفه">یک طرفه</option>
                  <option value="2طرفه">دو طرفه</option>
                </select>
                <select
                  value={ages}
                  onChange={(e) => setAges(e.target.value)}
                  name="ages"
                  className="select-tag-ages"
                >
                  <option value="بزرگسال">بزرگسال </option>
                  <option value="کودک"> کودک</option>
                </select>
              </div>
              <div>
                <input type="text" className="from-origin" />
                <span className="change-way-destination">Toggle</span>
                <input type="text" className="to-destination" />
                <input type="date" className="trip-date" />
                <button>جستجو</button>
              </div>
            </div>
          </section>
        </header>
        <main>
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
              <img src="/hotel2.png" alt="hotel" />
              <h3>لورم ایپسوم</h3>
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </p>
            </article>
          </section>

          <section className="second-section">
            <h2>پیشنهادهای جهانگردی آلترابو</h2>
            <Carousel seederCarouse={SeederCarouselTorism} />
          </section>

          <section className="third-section">
            <h2>پیشنهادهای ایرانگردی آلترابو</h2>
            <Carousel seederCarouse={seederCarouselIranTorism} />
          </section>

          <NewsLetter />

          <section className="fancy">
            <h2>هر جای دنیا که برید آلترابو ههمراهتونه!</h2>

            <span className="fancy-img">
              <img src="Group-park.png" alt="Group-park" />
              <img src="/Group-WindMill.png" alt="Group-WindMill" />
              <img src="/Group-pisaTower.png" alt="Group-pisaTower" />
              <img
                src="/Group-forbiddenCastle.png"
                alt="Group-forbiddenCastle"
              />
              <img src="/Group-eiffelTower.png" alt="Group-eiffelTower" />
              <img src="/Group-mountain.png" alt="Group-mountain" />
            </span>
          </section>
        </main>
      </div>
    </div>
  );
}
