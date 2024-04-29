import React from 'react';

const About = () => {
  return (
    <div className="h-full w-full backdrop-blur-lg">
      <h1 className="text-3xl text-yellow-400 font-bold text-center border-b-2">
        The Drama Intervention Card Test
      </h1>
      <br />
      <div className="lg:flex lg:flex-row lg:h-auto lg:w-full">
        <div className="lg:w-1/2 h-auto w-full backdrop-blur-lg">
          <img
            className="block h-3/4 mx-auto object-contain aspect-video"
            src="./assets/img-profile.jpg"
            alt="profile-pic"
          />
          <h3 className="text-lg text-center">Dr. Ritesh Batra</h3>
          <p className="text-center">
            <i>
              Sales Training Expert & Behavioral Scientist | <br /> Boosting
              Performance with Psychology & Engagement
            </i>
          </p>
        </div>
        <div className="lg:w-[48%] max-w-3/4 h-4/5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-[rgba(28,28,28,0.8)] backdrop-blur-md dark:border-gray-700 mx-auto">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
            The card test is a simple yet effective test where a person is able
            to self-introspect and judge his/her qualities in a time-bound
            manner to promote only the very first upcoming thoughts and bring
            out the true image. The personality type tells you about your{' '}
            <code className="text-yellow-400">areas of interests</code> as well
            as your favourable career options where you can shine and enable
            yourself to adjust quickly in that career. Moreover, Dr. Ritesh
            Batra has conducted this card test on more than 1000+ candidates of
            multiple backgrounds like- students, employees, teachers,
            entrepreneurs etc. and the results were not only promising but also
            complemented their current successes!
          </p>
          <h4 className="italic font-semibold">
            To know the potential areas of interests and get a 1-1 counseling
            with Dr. Ritesh himself, feel free to fill the contact form below
            and we will reach out to you as per availability
          </h4>
          <br />
          <a
            href={`https://cerulean-mandazi-b678ae.netlify.app/`}
            className="btn-di"
          >
            Learn More
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

/*
import React from "react";

const About = () => {
  return (
    <div className="h-full w-full  backdrop-blur-lg">
    <h1 className="text-3xl text-yellow-400 font-bold text-center border-b-2">
        The Drama Intervention Card Test
      </h1>
      <br />
    <div className="lg:flex flex-col h-[auto] w-full">

    <div className="h-[50%] w-[50%] backdrop-blur-lg">
      
      <img
        className="block h-3/4 mx-auto object-contain aspect-video"
        src="./assets/img-profile.jpg"
        alt="profile-pic"
      />
      <h3 className="text-lg text-center">Dr. Ritesh Batra </h3>
      <p className="text-center">
        <i>
          Sales Training Expert & Behavioral Scientist | <br /> Boosting
          Performance with Psychology & Engagement
        </i>
      </p>
      
    </div>
    <div className="max-w-[50%] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-[rgba(28,28,28,0.8)] backdrop-blur-md dark:border-gray-700 mx-auto">
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
      The card test is a simple yet effective test where a person is able to
      self-introspect and judge his/her qualities in a time bound manner to
      promote only the very first upcoming thoughts and bring out the true
      image. The personality type tells you about your<br />
      <code className="text-yellow-400">areas of interests</code> as well as your favourable career
      options where you can shine and enable yourself to adjust quickly in
      that career. Moreover, Dr. Ritesh Batra has conducted this card test
      on more than 1000+ candidates of multiple backgrounds like- students,
      employees, teachers, entrepreneurs etc. and the results were not only
      promising but also complemented their current successes!
    </p>
    <h4 className="italic font-semibold">
      To know the potential areas of interests and get a 1-1 councelling
      with Dr. Ritesh himself, feel free to fill the contact form below and
      we will reach out to you as per availability
    </h4>

    <a href={`https://cerulean-mandazi-b678ae.netlify.app/`} className="btn-di">
      Learn More
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </a>
  </div>
  </div>
  </div>
  );
};

export default About;
 */