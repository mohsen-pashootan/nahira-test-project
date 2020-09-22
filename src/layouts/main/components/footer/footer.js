import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="main-footer">
      <section>
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <i class="fa fa-google-plus" aria-hidden="true"></i>
        <i class="fa fa-linkedin" aria-hidden="true"></i>
        <i class="fa fa-twitter" aria-hidden="true"></i>
      </section>
      <section className="content-footer">
        <article className="about-us-footer">
          <h3>درباره آلترابو</h3>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
          </p>
        </article>
        <article className="contact-us-footer">
          <h3>تماس با آلترابو</h3>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
          </p>
        </article>
        <article className="services-footer">
          <table>
            <tbody>
              <tr>
                <td>بلیط هواپیما</td>
                <td>بلیت اتوبوس</td>
              </tr>
              <tr>
                <td>بلیط قطار</td>
                <td>رزرو هتل</td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>
      <span className="copyright">
        تمامی حقوق این وبسایت متعلق به مجموعه آلترابو است
      </span>
    </footer>
  );
}
