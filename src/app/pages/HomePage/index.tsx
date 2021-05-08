import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CustomTable } from 'app/components/CustomTable/Loadable';
import { CustomModal } from 'app/components/CustomModal/Loadable';
import { useHomepageSlice } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectData, selectHasMore } from './slice/selectors';
import InfiniteScroll from 'react-infinite-scroll-component';

export function HomePage() {
  const [pageNumber, setPageNumber] = useState(1);
  const { actions } = useHomepageSlice();
  const [visible, setVisible] = useState(false);
  const [modalData, setModalData] = useState({ title: '', link: '', body: '' });

  const handleCancel = () => {
    setVisible(false);
  };
  const handleRowClick = item => {
    setModalData(item);
    setVisible(true);
  };
  const dispatch = useDispatch();

  const data = useSelector(selectData);

  const hasMore = useSelector(selectHasMore);

  useEffect(() => {
    dispatch(actions.requestUpdatePageData(pageNumber));
  }, [pageNumber, actions, dispatch]);

  const fetchMoreData = () => {
    setPageNumber(pageNumber + 1);
  };
  return (
    <React.Fragment>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Homepage" />
      </Helmet>
      {visible && (
        <CustomModal
          visible={visible}
          data={modalData}
          handleCancel={handleCancel}
        />
      )}

      {data.length > 1 && (
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <CustomTable data={data} handleRowClick={handleRowClick} />
        </InfiniteScroll>
      )}
    </React.Fragment>
  );
}
