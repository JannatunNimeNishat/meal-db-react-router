import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#ffc1070d] mt-8 p-5'>
            <div className='my-container  flex justify-between'>
            <div>
                <h3 className='text-xl font-semibold'>Section</h3>
                <p>Home</p>
                <p>Features</p>
                <p>Pricing</p>
                <p>FAQs</p>
                <p>About</p>
            </div>
            <div>
                <h3 className='text-xl font-semibold'>Section</h3>
                <p>UI/UX Design</p>
                <p>Product Design</p>
                <p>Back End Development</p>
                <p>Font End Development</p>
            </div>
            <div>
                <h3 className='text-xl font-semibold'>Resource</h3>
                <p>FAQs</p>
                <p>Support</p>
                <p>Privacy Policy</p>
                <p>Terms and Service</p>
            </div>
            <div>
                <h3 className='text-xl font-semibold'>Subscribe to our newsletter</h3>
                <p>There are many variations of passages of available, <br/> but the majority have suffered</p>
                <input className='px-8 py-2 mt-3 border rounded-lg' type="text" name="" id="" placeholder='Email address' />
                <button className='bg-yellow-500 px-5 py-3 rounded-lg ml-3 text-white'>Subscribe</button>
            </div>
        </div>
        </div>
    );
};

export default Footer;