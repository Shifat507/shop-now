import React from 'react';
import faqAnimation from '../assets/faq.json'
import Lottie from 'lottie-react';
const AboutUs = () => {
    return (
        <div className='my-10'>
            <div className=''>
                <h2 className='text-lg md:text-3xl font-bold text-center'>About Us</h2>
                <p className='text-center'>Welcome to ShopNow, your go-to destination for trendy clothing, stylish accessories, premium shoes, and chic bags—all in one place. We bring you <br /> the latest fashion at unbeatable prices, handpicked to match every mood and season. At ShopNow, we believe everyone deserves to look their <br /> best without breaking the bank. Shop smart, shop fast, shop now—only at <span className='font-semibold'>ShopNow</span>.</p>
            </div>
            {/* F/Q Section */}

            <section className='my-16'>
                <h2 className='text-lg md:text-3xl font-bold text-center'>Frequently Asked Questions</h2>
                <div className='flex flex-col md:flex-row-reverse mx-auto justify-around mt-10'>
                    <div className='w-60 ps-12 md:ps-0'>
                        <Lottie animationData={faqAnimation}></Lottie>
                    </div>
                    <div className="join join-vertical bg-base-100">
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title font-semibold">How long does delivery take?</div>
                            <div className="collapse-content text-sm">Orders are typically delivered within 3–5 business days, depending on your location.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title font-semibold"> Can I return or exchange an item?</div>
                            <div className="collapse-content text-sm">Yes, we offer a 7-day return/exchange policy for unused items with original packaging.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title font-semibold">What payment methods do you accept?</div>
                            <div className="collapse-content text-sm">We accept payments via credit/debit cards, mobile banking, and cash on delivery COD.</div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title font-semibold">How can I track my order?</div>
                            <div className="collapse-content text-sm">Once your order is shipped, you’ll receive a tracking link via email or SMS to monitor its status in real time.</div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default AboutUs;