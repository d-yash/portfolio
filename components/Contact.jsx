import React from 'react'
import SectionTitle from './SectionTitle';

const Contact = () => {
    return (
        <section id="contact" className="max-w-containerSmall mx-auto lgl:py-24 py-10">
            <SectionTitle title="Contact Me" titleNo="04" />
            <div className='flex flex-col justify-center items-center mt-12'>
                <span className='text-textLight text-3xl'>GET IN TOUCH</span>
                <div className='mt-5 font-bodyFont text-lg max-w-[500px] text-center text-textDark'>
                    Looking for <span className='text-textGreen'>Internships & growth opportunities</span>. <br />If you are looking for someone who is <span className='text-textGreen'>Dedicated</span> and <span className='text-textGreen'>Flexible</span> Team player. Feel free to reach me.
                </div>

                <a href="mailto:y.dhuliya.official@gmail.com">
                    <button className='w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300 mt-7'>Say Hello!</button>
                </a>
            </div>
        </section>
    )
}

export default Contact;