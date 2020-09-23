import React from "react";
import "./newsletter.css";

export default function NewsLetter() {
  return (
    <section className="newsletter">
      <img src="/Group-vacation.png" alt="Group-vacation" />
      <span>
        <p>
          با عضویت در خبرنامه آلترابو از پیشنهادات شگفت انگیز ما زودتر از بقیه
          باخبر میشین
        </p>
        <input placeholder="آدرس ایمیلتان را وارد کنید" />
        <button>عضویت در خبرنامه</button>
      </span>
    </section>
  );
}
