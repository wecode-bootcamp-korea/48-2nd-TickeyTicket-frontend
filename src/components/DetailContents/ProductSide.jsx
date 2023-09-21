import { useNavigate } from 'react-router-dom';
import Calendar from './Calendar';
import axios from 'axios';

const ProductSide = ({ data, setSelectedDate, selectedDate }) => {
  console.log('first>>>>>>>', data);
  const navigate = useNavigate();
  const productOptionId = data.productOptionId;

  const handleClick = async () => {
    try {
      const token = localStorage.getItem('Token');

      if (!token) {
        navigate('/login');
        return;
      }

      await axios.post(
        `http://10.58.52.221:3000/payment`,
        { productOptionId },
        {},
      );

      navigate(`/payment`);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDateSelect = selectedDate => {
    setSelectedDate(selectedDate);
  };

  return (
    <div className="side sticky top-20 right-20 h-full mt-8 bg-white rounded-lg z-10">
      <div>
        <div className="sideMain flex-col border-mediumgray border-[1px] rounded-lg">
          <div className="sideContainer border-mediumgray border-b-[1px] p-3">
            <div className="sideHeader">관람일</div>
            <div className="sideContent p-3 pb-0">
              <Calendar
                startDate={data.startDate}
                endDate={data.endDate}
                onDateSelect={handleDateSelect}
              />
            </div>
          </div>
          <div className="sideContainer p-3">
            <div className="sideHeader">공연시간</div>
            <div className="sideContent p-3">
              <div className="sideTimeTable bg-babypink p-3 pl-5 h-12 rounded-xl text-brand font-bold">
                {data.startTime.slice(0, 5)}
              </div>
              <div className="sideRemainTable mt-4 flex gap-2 pl-2 text-sm">
                잔여석
                <div className="remainNumber">{data.availableTicket}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="sideBtnWrap flex flex-col gap-2 mt-4 pb-8">
          <button
            className="sideBookingBtn bg-brand text-white text-xl font-bold p-4 rounded-xl"
            onClick={handleClick}
          >
            예매하기
          </button>
          <button className="sideLikeBtn bg-white border-brand border-2 text-brand text-xl font-bold p-4 rounded-xl">
            관심함에 담기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSide;
