import React from "react";
import Button from "./button";
import Link from "next/link";

const footerLinks = {
  data1: [
    { title: "About Us", id: "#aboutus" },
    { title: "Home", id: "#home" },
    { title: "Pricing", id: "#pricing" },
    { title: "Demo", id: "#demo" },
    { title: "Contact Us", id: "#contactus" },
  ],

  data2: [
    { title: "Blog", id: "#blog" },
    { title: "Help Center", id: "#helpcenter" },
    { title: "FAQs", id: "#faqs" },
    { title: "Product Updates", id: "#productupdates" },
  ],
  data3: [
    { title: "Community", id: "#community" },
    { title: "Contact", id: "#contact" },
    { title: "Terms of service", id: "#termsof service" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-primaryColor">
      <div className="container mx-auto">
        <div className="flex gap-[120px] py-[120px]">
          <div className="flex flex-col gap-[30px] text-white">
            <h3 className="text-[44px] font-semibold">Newsify</h3>
            <p>
              Newsify is your Email newsletter Webflow template we can build
              anything your dream.
            </p>
            <Button
              title="Try for free"
              className="bg-white text-[18px] font-bold text-black px-[52px] py-[20px] cursor-pointer"
            />
          </div>

          <ul className="flex flex-col gap-[30px] shrink-0">
            <h4 className="text-[24px] font-semibold leading-0.36 text-white mb-[12px]">
              Support Us
            </h4>
            {footerLinks.data1.map((link) => (
              <li key={link.id} className="text-[18px] leading-0.6 text-white">
                <Link href={link.id}>{link.title}</Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-[30px] shrink-0">
            <h4 className="text-[24px] font-semibold leading-0.36 text-white mb-[12px]">
              Resources
            </h4>
            {footerLinks.data2.map((link) => (
              <li key={link.id} className="text-[18px] leading-0.6 text-white">
                <Link href={link.id}>{link.title}</Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-[30px] shrink-0">
            <h4 className="text-[24px] font-semibold leading-0.36 text-white mb-[12px]">
              Company
            </h4>
            {footerLinks.data3.map((link) => (
              <li key={link.id} className="text-[18px] leading-0.6 text-white">
                <Link href={link.id}>{link.title}</Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-[34px] text-white">
            <div className="flex flex-col gap-[50px]">
              <h4 className="text-[24px] font-semibold leading-0.36 text-white">
                Address
              </h4>
              <div>
                <p>
                  101 Marlow Street. #12-05 Clife Parkview. Singapore 059020.
                </p>
                <Link href="#" className="text-[#A3DC2F]">
                  View on Maps
                </Link>
              </div>
            </div>

            <div className="flex flex-col text-white">
              <h4 className="text-[24px] font-semibold leading-0.36 text-white mb-[24px]">
                Inquiries
              </h4>
              <div className="flex flex-col">
                <span>+65 6156 5519</span>
                <span>hello@Newsify.com</span>
              </div>
            </div>

            <div className="flex items-center gap-[30px]">
              <svg
                width="31"
                height="26"
                viewBox="0 0 31 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.6751 6.92271C27.6944 7.19175 27.6944 7.46086 27.6944 7.72991C27.6944 15.9362 21.4483 25.3918 10.0324 25.3918C6.51542 25.3918 3.24827 24.3732 0.5 22.6052C0.999702 22.6628 1.48012 22.682 1.99905 22.682C4.90101 22.682 7.57244 21.7019 9.70572 20.0299C6.97667 19.9722 4.68964 18.1849 3.90167 15.7249C4.28607 15.7825 4.67042 15.8209 5.07405 15.8209C5.63137 15.8209 6.18875 15.744 6.70762 15.6096C3.86327 15.0329 1.72994 12.5346 1.72994 9.51723V9.44039C2.55631 9.90164 3.51732 10.1899 4.53583 10.2283C2.86381 9.1136 1.76839 7.21098 1.76839 5.05848C1.76839 3.90539 2.07583 2.84836 2.61399 1.92586C5.66976 5.69271 10.263 8.15265 15.4136 8.42176C15.3175 7.96051 15.2598 7.48009 15.2598 6.99961C15.2598 3.57866 18.0273 0.791992 21.4674 0.791992C23.2548 0.791992 24.8691 1.54152 26.003 2.75229C27.406 2.48324 28.7513 1.96431 29.9429 1.25324C29.4816 2.69467 28.5014 3.90544 27.2138 4.67414C28.463 4.53967 29.6738 4.19366 30.7885 3.71324C29.943 4.94318 28.8859 6.0386 27.6751 6.92271V6.92271Z"
                  fill="white"
                />
              </svg>

              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.2717 15.1818C30.2717 7.07721 23.7053 0.510742 15.6007 0.510742C7.49616 0.510742 0.929688 7.07721 0.929688 15.1818C0.929688 22.5043 6.29467 28.5738 13.3084 29.6753V19.4228H9.58145V15.1818H13.3084V11.9494C13.3084 8.27278 15.4972 6.24191 18.8496 6.24191C20.4552 6.24191 22.1341 6.52823 22.1341 6.52823V10.1368H20.2836C18.4616 10.1368 17.8931 11.2679 17.8931 12.428V15.1818H21.9619L21.3112 19.4228H17.8931V29.6753C24.9068 28.5738 30.2717 22.5043 30.2717 15.1818Z"
                  fill="white"
                />
              </svg>

              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.586 0.84082H2.86368C1.82251 0.84082 0.976562 1.6986 0.976562 2.7516V25.4325C0.976562 26.4855 1.82251 27.3433 2.86368 27.3433H25.586C26.6272 27.3433 27.4791 26.4855 27.4791 25.4325V2.7516C27.4791 1.6986 26.6272 0.84082 25.586 0.84082ZM8.98647 23.5573H5.05842V10.9094H8.99239V23.5573H8.98647ZM7.02245 9.18201C5.76239 9.18201 4.74489 8.15859 4.74489 6.90445C4.74489 5.65032 5.76239 4.62689 7.02245 4.62689C8.27658 4.62689 9.30001 5.65032 9.30001 6.90445C9.30001 8.1645 8.2825 9.18201 7.02245 9.18201ZM23.7107 23.5573H19.7827V17.4049C19.7827 15.9378 19.7531 14.0507 17.7418 14.0507C15.6949 14.0507 15.3814 15.6479 15.3814 17.2984V23.5573H11.4533V10.9094H15.2217V12.6368H15.2749C15.8014 11.643 17.0851 10.5959 18.9959 10.5959C22.9713 10.5959 23.7107 13.2165 23.7107 16.624V23.5573Z"
                  fill="white"
                />
              </svg>

              <svg
                width="33"
                height="24"
                viewBox="0 0 33 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.039 4.28775C31.6674 2.88868 30.5727 1.78681 29.1826 1.41288C26.6631 0.733398 16.5602 0.733398 16.5602 0.733398C16.5602 0.733398 6.45728 0.733398 3.93771 1.41288C2.54769 1.78687 1.45292 2.88868 1.08135 4.28775C0.40625 6.82365 0.40625 12.1146 0.40625 12.1146C0.40625 12.1146 0.40625 17.4055 1.08135 19.9414C1.45292 21.3405 2.54769 22.3964 3.93771 22.7704C6.45728 23.4498 16.5602 23.4498 16.5602 23.4498C16.5602 23.4498 26.6631 23.4498 29.1826 22.7704C30.5727 22.3964 31.6674 21.3405 32.039 19.9414C32.7141 17.4055 32.7141 12.1146 32.7141 12.1146C32.7141 12.1146 32.7141 6.82365 32.039 4.28775V4.28775ZM13.2559 16.9183V7.31081L21.7 12.1147L13.2559 16.9183V16.9183Z"
                  fill="white"
                />
              </svg>

              <svg
                width="27"
                height="28"
                viewBox="0 0 27 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.6835 7.29347C9.92107 7.29347 6.8863 10.3282 6.8863 14.0907C6.8863 17.8531 9.92107 20.8878 13.6835 20.8878C17.4459 20.8878 20.4807 17.8531 20.4807 14.0907C20.4807 10.3282 17.4459 7.29347 13.6835 7.29347ZM13.6835 18.5097C11.2521 18.5097 9.26442 16.5279 9.26442 14.0907C9.26442 11.6534 11.2462 9.67159 13.6835 9.67159C16.1208 9.67159 18.1025 11.6534 18.1025 14.0907C18.1025 16.5279 16.1148 18.5097 13.6835 18.5097ZM22.3441 7.01543C22.3441 7.89687 21.6342 8.60085 20.7587 8.60085C19.8773 8.60085 19.1733 7.89096 19.1733 7.01543C19.1733 6.1399 19.8832 5.43001 20.7587 5.43001C21.6342 5.43001 22.3441 6.1399 22.3441 7.01543ZM26.846 8.62451C26.7454 6.50076 26.2603 4.61955 24.7045 3.06963C23.1546 1.51971 21.2734 1.03462 19.1496 0.928134C16.9608 0.803903 10.4002 0.803903 8.21142 0.928134C6.09359 1.0287 4.21238 1.51379 2.65654 3.06371C1.10071 4.61364 0.621531 6.49484 0.515048 8.61859C0.390817 10.8074 0.390817 17.368 0.515048 19.5568C0.615615 21.6805 1.10071 23.5617 2.65654 25.1117C4.21238 26.6616 6.08767 27.1467 8.21142 27.2532C10.4002 27.3774 16.9608 27.3774 19.1496 27.2532C21.2734 27.1526 23.1546 26.6675 24.7045 25.1117C26.2544 23.5617 26.7395 21.6805 26.846 19.5568C26.9702 17.368 26.9702 10.8133 26.846 8.62451ZM24.0183 21.9053C23.5568 23.0648 22.6636 23.9581 21.4982 24.4254C19.753 25.1176 15.612 24.9579 13.6835 24.9579C11.755 24.9579 7.60802 25.1117 5.86879 24.4254C4.70931 23.964 3.81603 23.0707 3.34869 21.9053C2.65654 20.1602 2.81627 16.0192 2.81627 14.0907C2.81627 12.1621 2.66246 8.01519 3.34869 6.27596C3.81011 5.11648 4.70339 4.2232 5.86879 3.75586C7.61393 3.06371 11.755 3.22344 13.6835 3.22344C15.612 3.22344 19.7589 3.06963 21.4982 3.75586C22.6577 4.21728 23.5509 5.11056 24.0183 6.27596C24.7104 8.0211 24.5507 12.1621 24.5507 14.0907C24.5507 16.0192 24.7104 20.1661 24.0183 21.9053Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="border-t-[1px] py-[28px]">
          <p className="text-[18px] leading-0.62 text-white text-center">
            © 2023 Newsify. All rights reserved | Cookie Settings, Anti-Spam,
            Privacy, User agreement, Legal Notice and Responsible Disclosure
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
