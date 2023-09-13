import axios from 'axios';
import React, { useState, useEffect } from 'react';

const BenefitCard = () => {
  const [benefitCardData, setBenefitCardData] = useState([]);

  useEffect(() => {
    axios.get('/data/benefitCard.json').then(response => {
      setBenefitCardData(response.data);
    });
  }, []);

  return (
    <div className="eventRight w-3/5">
      <div className="benefitCards w-full flex justify-between">
        {benefitCardData.map(data => (
          <div className="benefitCard flex flex-col w-full px-7 " key={data.id}>
            <div
              className="benefitImage w-full h-48 bg-cover rounded-full mb-5"
              style={{ backgroundImage: `url(${data.url})` }}
            >
              <div className="benefitNumber w-9 h-9 ml-2 rounded-full bg-brand text-center text-2xl text-white">
                {data.id}
              </div>
            </div>
            <div className="benefitTitle text-center">
              {data.title[0]}
              <br />
              {data.title[1]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BenefitCard;
