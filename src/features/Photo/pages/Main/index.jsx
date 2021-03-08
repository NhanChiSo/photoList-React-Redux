import Banner from "components/Banner";
import Images from "constants/images";
import PhotoList from "features/Photo/components/PhotoList";
import PhotoSearch from "features/Photo/components/PhotoSearch";
import {
  removePhoto,
  searchCategory,
  searchPhoto,
} from "features/Photo/photoSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Button, Col, Container, Input, Row } from "reactstrap";
import "./MainPage.css";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";

function MainPage() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos);
  const history = useHistory();
  var list = photos.list;

  const handlePhotoEditClick = (photo) => {
    const editPhotoUrl = `/photos/${photo.id}`;
    history.push(editPhotoUrl);
  };

  const handlePhotoRemoveClick = (photo) => {
    const removePhotoId = photo.id;
    const action = removePhoto(removePhotoId);
    dispatch(action);
  };

  const handleSearch = (e) => {
    const searchText = e.target.value;
    const action = searchPhoto(searchText);
    dispatch(action);
  };

  const handleSearchCategory = (e) => {
    var btnCategory = document.querySelectorAll(".category-search > button");
    for (let i = 0; i < btnCategory.length; i++) {
      btnCategory[i].classList.remove("active");
    }
    e.target.classList.add("active");

    const action = searchCategory(e.target.value);
    dispatch(action);
  };

  if (handleSearch || handleSearchCategory) {
    if (photos.searchText !== "" || photos.category !== "0") {
      list = photos.filter;
    }
  }

  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <Row className="mb-3">
          <Col xs="12" md="6" className="mt-3">
            <Input
              value={photos.searchText}
              type="text"
              name="search"
              placeholder=" 🔍 Search by description"
              onChange={handleSearch}
            />
          </Col>
          <Col xs="12" md="6" className="mt-3">
            <Button color="primary">
              <Link to="/photos/add">Add new photo</Link>
            </Button>
          </Col>
        </Row>
        <Row className="category-search">
          <Button
            value="0"
            onClick={handleSearchCategory}
            className="ml-3 mb-3 btn-warning active"
          >
            All
          </Button>
          {PHOTO_CATEGORY_OPTIONS.map((category) => (
            <PhotoSearch
              category={category}
              handleClick={handleSearchCategory}
            />
          ))}
        </Row>
        {console.log(photos)}
        <PhotoList
          photoList={list}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
}

export default MainPage;
