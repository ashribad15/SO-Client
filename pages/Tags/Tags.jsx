import React from 'react';
import { useSelector } from 'react-redux';
import TagsList from './TagsList';
import './Tags.css';

const Tags = () => {
  const tagsList = useSelector((state) => state.tagsReducer.tags);

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        <h1>Tags</h1>
      </div>
      <div>
        {tagsList.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{tagsList.length} tags</p>
            <TagsList tagsList={tagsList} />
          </>
        )}
      </div>
    </div>
  );
};

export default Tags;
