import React from "react";
import "./contact.scss";

const Contact = () => {

  return (
    <>
      <div className="contact">
        <div className="textContainer">
          <div className="our-partner-content-7">
            <div className="top-7">
              <div>Train teams fast, with The Wise Blend!</div>
              <div>Speak to an Expert Today!</div>
            </div>
          </div>
        </div>
        <div className="formContainer">
          <form
            action="https://forms.zohopublic.in/thewiseblend/form/ContactUs11Jan2025/formperma/Amb7Xm-bNBeEtjP7Lln53zAJXVXxJkv_cYBjNikBMbg/htmlRecords/submit"
            name="form"
            id="form"
            method="POST"
            acceptCharset="UTF-8"
            enctype="multipart/form-data"
          >
            <input type="hidden" name="zf_referrer_name" value="" />
            <input type="hidden" name="zf_redirect_url" value="" />
            <input type="hidden" name="zc_gad" value="" />
            <input type="hidden" name="utm_source" value="" />
            <input type="hidden" name="utm_medium" value="" />
            <input type="hidden" name="utm_campaign" value="" />
            <input type="hidden" name="utm_term" value="" />
            <input type="hidden" name="utm_content" value="" />
            <div className="First-Name">
              <div className="input-group">
                <input
                  type="text"
                  maxlength="255"
                  name="Name_First"
                  placeholder="First Name*"
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  maxlength="255"
                  name="Name_Last"
                  placeholder="Last Name*"
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <input
                type="email"
                maxlength="255"
                name="Email"
                placeholder="Email*"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="tel"
                name="PhoneNumber_countrycode"
                maxlength="10"
                placeholder="Mobile*"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="SingleLine"
                maxlength="255"
                placeholder="Company"
              />
            </div>
            <div className="input-group">
              <textarea
                name="MultiLine"
                maxlength="65535"
                placeholder="Message"
              />
            </div>
            <button type="submit">
             Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
