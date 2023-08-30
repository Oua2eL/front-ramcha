import React from 'react';
import CountUp from 'react-countup'; // Import the CountUp component
import './SectionThree.css';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { BiSolidBriefcase } from 'react-icons/bi';
import { MdVerified } from 'react-icons/md';

const SectionThree = () => {
  return (
    <section>
      <div className='icons-container'>
        <div className='Small'>
          <BsFillSuitHeartFill className='icon' />
          <span className='box-desc'>
            Clients satisfaits <br />
            <CountUp end={10} />
          </span>
        </div>
        <div className='Small'>
          <BiSolidBriefcase className='icon' />
          <span className='box-desc'>
            Employeurs<br />
            <CountUp end={10} />
          </span>
        </div>
        <div className='Small'>
          <MdVerified className='icon' />
          <span className='box-desc'>
            Offres terminées <br />
            <CountUp end={10} />
          </span>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
