import React from "react";
import { Input } from "antd";
import { useHistory } from "react-router";
const SearchbarResponsive = (props) => {
  const history = useHistory();
  const { theme, setVisibleSearchbar, searchbarResponsiveRef } = props;

  const handleOnSearch = (keyword) => {
    setVisibleSearchbar(false);
    history.push(`/search/${keyword}`);
  };

  return (
    <div
      ref={searchbarResponsiveRef}
      className={`searchbar__responsive ${theme}`}
    >
      <div className="overlay" onClick={() => setVisibleSearchbar(false)}></div>
      <Input.Search
        allowClear
        onSearch={handleOnSearch}
        className="searchbar"
        placeholder="Tìm kiếm..."
      />
    </div>
  );
};
export default SearchbarResponsive;
