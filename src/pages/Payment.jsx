import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PayHeader from '../components/Payment/PayHeader';
import ShowInfo from '../components/Payment/ShowInfo';
import PaySubmit from '../components/Payment/PaySubmit';

const Payment = () => {
  const token = localStorage.getItem('token');
  const [nickName, setNickName] = useState('');
  // const [showData, setShowData] = useState(null);
  const [bookingsInfo, setBookingsInfo] = useState({});
  const apiUrl = `http://10.58.52.77:3000/reservation/getReservation`;

  useEffect(() => {
    // const getKaKaoUserData = async () => {
    //   try {
    //     const kakaoUser = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
    //       headers: {
    //         Authorization: `${token}`,
    //       },
    //     });
    //     setNickName(kakaoUser.data.properties.nickname);
    //   } catch (error) {
    //     console.error('Kakao API Error:', error);
    //   }
    // };

    // getKaKaoUserData();

    axios
      .get(apiUrl, { params: { id: 1 } })
      .then(response => {
        setBookingsInfo(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [token]);
  return (
    <div className="payment container relative p-10 mt-10 mb-10 w-[1000px] h-[580px] border border-gray">
      <PayHeader />
      <div className="flex justify-center h-[440px]">
        <ShowInfo data={bookingsInfo} />
        <PaySubmit nickName={nickName} data={bookingsInfo} />
      </div>
    </div>
  );
};

export default Payment;
