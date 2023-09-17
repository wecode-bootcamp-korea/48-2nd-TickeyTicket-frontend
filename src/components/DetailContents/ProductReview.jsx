import React, { useState } from 'react';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { PiStarFill } from 'react-icons/pi';
import ReactPaginate from 'react-paginate';

const ProductReview = ({ reviewData }) => {
  const [page, setPage] = useState(1);
  const [clicked, setClicked] = useState('최신글순');
  const [sortItems, setSortItems] = useState('writtenDate');

  const itemsPerPage = 10;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const sortedReviews = reviewData.sort((a, b) => {
    if (sortItems === 'writtenDate') {
      // 최신글순 정렬 //
      return new Date(b.writtenDate) - new Date(a.writtenDate);
    } else if (sortItems === 'rating') {
      // 평점순 정렬 //
      return b.grade.length - a.grade.length;
    }
    return 0;
  });
  const displayedReviews = sortedReviews.slice(startIndex, endIndex);

  const handleNewClicked = () => {
    setSortItems('writtenDate');
  };
  const handleBestClicked = () => {
    setSortItems('rating');
  };
  console.log(sortItems);

  const handlePageChange = selectedPage => {
    setPage(selectedPage.selected + 1);
  };

  const grade = reviewData => {
    const stars = [];
    for (let i = 1; i <= reviewData.rating; i++) {
      stars.push(<PiStarFill />);
    }
    return stars;
  };

  return (
    <div className="productReview">
      <div className="reviewContainer">
        <div className="reviewNotice text-sm my-12">
          <b>꼭 읽어주세요</b>
          <div className="reviewNoiceText mt-5 leading-7">
            게시판 운영 규정에 어긋난다고 판단되는 게시글은 사전 통보없이
            블라인드 처리될 수 있습니다.
            <br />
            특히 티켓 매매 및 양도의 글은 발견 즉시 임의 삭제되며 전화번호,
            이메일 등의 개인정보는 악용될 우려가 있으므로 게시를 삼가 주시기
            바랍니다.
            <br />
            사전 경고에도 불구하고 불량 게시물을 계속적으로 게재한 게시자의 경우
            인터파크 티켓 게시판 작성 권한이 제한됩니다.
          </div>
        </div>
        <div className="reviewListWrap">
          <div className="reviewListTop">
            <div className="reviewsHead font-bold border-b-[1px] border-x-mediumgray pb-4 mb-8">
              총&nbsp;<span className="text-brand">{reviewData.length}</span>
              개의 관람후기가 등록되었습니다.
            </div>
            <div className="sorting text-darkgray text-sm flex justify-end gap-3 pr-5 pb-3">
              <div
                className={`dateFaster cursor-pointer ${
                  clicked === '최신글순' ? 'font-bold text-black' : ''
                }`}
                onClick={
                  (handleNewClicked,
                  () => {
                    setClicked('최신글순');
                  })
                }
              >
                최신글순
              </div>
              <div
                className={`dateFaster cursor-pointer ${
                  clicked === '평점순' ? 'font-bold text-black' : ''
                }`}
                onClick={
                  (handleBestClicked,
                  () => {
                    setClicked('평점순');
                  })
                }
              >
                평점순
              </div>
            </div>
          </div>
          {displayedReviews.map(data => (
            <ul className="reviewList pb-5" key={data.nickname}>
              <li className="reviewItem border-[1px] border-lightgray rounded-xl p-7">
                <div className="reviewItemTop">
                  <ul className="reviewItemInfo flex gap-3 text-sm text-darkgray justify-between">
                    <li className="reviewItemInfoList text-xl text-yellow-400 flex">
                      {grade(data)}
                    </li>
                    <li className="reviewItemInfoList">
                      {data.nickname}&nbsp;&nbsp; | &nbsp;&nbsp;
                      {data.writtenDate}
                    </li>
                  </ul>
                </div>
                <div className="reviewItemBody pt-4">
                  <div className="reviewTitle pb-4 font-bold">{data.title}</div>
                  <div className="reviewText text-sm">{data.content}</div>
                </div>
              </li>
            </ul>
          ))}
          <ReactPaginate
            pageCount={Math.ceil(reviewData.length / itemsPerPage)}
            pageRangeDisplayed={10}
            marginPagesDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName="pagination"
            pageClassName="pageNumBtn"
            activeClassName="active"
            previousLabel={<IoMdArrowDropleft className="pageNumBtn" />}
            nextLabel={<IoMdArrowDropright className="pageNumBtn" />}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
