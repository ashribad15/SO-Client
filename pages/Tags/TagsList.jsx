import React from 'react';
import PropTypes from 'prop-types';

const TagsList = ({ tagsList }) => {
  return (
    <div className="tags-list">
      {tagsList.map((tag) => (
        <div key={tag.id} className="tag-item">
          {tag.name}
        </div>
      ))}
    </div>
  );
};

TagsList.propTypes = {
  tagsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TagsList;

