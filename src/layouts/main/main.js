import React from "react";
import "./main.css";

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
            <div className="search-inputs"></div>
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
            <p>پیشنهادهای جهانگردی آلترابو</p>
          </section>
          <section className="third-section">
            <p>پیشنهادهای ایرانگردی آلترابو</p>
          </section>
          <section className="newsletter">
            <img src="/Group-vacation.png" alt="Group-vacation" />
            <span>
              <p>
                با عضویت در خبرنامه آلترابو از پیشنهادات شگفت انگیز ما زودتر از
                بقیه باخبر میشین
              </p>
              <input placeholder="آدرس ایمیلتان را وارد کنید" />
              <button>عضویت در خبرنامه</button>
            </span>
          </section>
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
