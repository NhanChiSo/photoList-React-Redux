const { createSlice } = require("@reduxjs/toolkit");

const initialPhotos = {
  list: [
    {
      id: 91176,
      categoryId: 2,
      photo: "https://picsum.photos/id/532/300/300",
      title:
        "Enim laboris dolore consectetur et fugiat do amet eiusmod anim proident do culpa irure consectetur.",
    },
    {
      id: 82605,
      categoryId: 1,
      photo: "https://picsum.photos/id/43/300/300",
      title: "Ad officia magna veniam sunt.",
    },
    {
      id: 74760,
      categoryId: 3,
      photo: "https://picsum.photos/id/722/300/300",
      title:
        "Minim anim in sunt esse nisi sit magna consequat in sit laboris adipisicing.",
    },
    {
      id: 39588,
      categoryId: 5,
      photo: "https://picsum.photos/id/294/300/300",
      title: "Deserunt in tempor est id consectetur cupidatat.",
    },
    {
      id: 72133,
      categoryId: 4,
      photo: "https://picsum.photos/id/229/300/300",
      title:
        "Labore culpa velit sunt sit anim ad do veniam do proident sunt et nisi mollit.",
    },
    {
      id: 95333,
      categoryId: 1,
      photo: "https://picsum.photos/id/862/300/300",
      title:
        "Fugiat fugiat voluptate tempor minim ipsum nisi culpa magna officia ea deserunt tempor.",
    },
    {
      id: 62419,
      categoryId: 3,
      photo: "https://picsum.photos/id/515/300/300",
      title:
        "Excepteur nisi aliquip ex aliqua consectetur id laboris cillum elit dolor dolor anim sint.",
    },
    {
      id: 12569,
      categoryId: 5,
      photo: "https://picsum.photos/id/730/300/300",
      title:
        "Occaecat exercitation Lorem cupidatat adipisicing elit duis consequat esse et tempor eu enim cupidatat.",
    },
    {
      id: 47434,
      categoryId: 3,
      photo: "https://picsum.photos/id/287/300/300",
      title: "Veniam officia est nulla proident labore.",
    },
    {
      id: 52685,
      categoryId: 3,
      photo: "https://picsum.photos/id/859/300/300",
      title:
        "Ut incididunt do magna culpa consectetur id deserunt et enim elit quis.",
    },
    {
      id: 69928,
      categoryId: 5,
      photo: "https://picsum.photos/id/110/300/300",
      title:
        "Nisi velit fugiat voluptate fugiat magna officia qui fugiat ad non.",
    },
    {
      id: 86160,
      categoryId: 5,
      photo: "https://picsum.photos/id/649/300/300",
      title: "Id ex enim non dolore reprehenderit eu ullamco.",
    },
  ],
  searchText: "",
  category: "0",
  filter: [],
};

const photo = createSlice({
  name: "photos",
  initialState: initialPhotos,
  reducers: {
    addPhoto(state, action) {
      state.list.push(action.payload);
    },

    removePhoto: (state, action) => {
      const removePhotoId = action.payload;

      // remove khi đã lọc qua search
      if (state.searchText || state.category) {
        return {
          ...state,
          list: state.list.filter((photo) => photo.id !== removePhotoId),
          filter: state.filter.filter((photo) => photo.id !== removePhotoId),
        };
      }

      // remove bình thường
      return {
        ...state,
        list: state.list.filter((photo) => photo.id !== removePhotoId),
      };
    },

    updatePhoto: (state, action) => {
      const newPhoto = action.payload;

      //update khi đã lọc trước
      if (state.searchText || state.category) {
        let photoIndex = state.filter.findIndex(
          (photo) => photo.id === newPhoto.id
        );
        if (photoIndex >= 0) {
          state.filter[photoIndex] = newPhoto;
        }
      }

      const photoIndex = state.list.findIndex(
        (photo) => photo.id === newPhoto.id
      );

      if (photoIndex >= 0) {
        state.list[photoIndex] = newPhoto;
      }
    },

    searchPhoto: (state, action) => {
      const searchText = action.payload.toLowerCase();
      const filter = state.list.filter((photo) =>
        photo.title.toLowerCase().includes(searchText)
      );
      return { ...state, searchText: searchText, filter: filter };
    },

    searchCategory: (state, action) => {
      const filter = state.list.filter((photo) => {
        return photo.categoryId == action.payload;
      });

      return {
        ...state,
        searchText: "",
        category: action.payload,
        filter: filter,
      };
    },
  },
});

const { actions, reducer } = photo;
export const {
  addPhoto,
  removePhoto,
  updatePhoto,
  searchPhoto,
  searchCategory,
} = actions;
export default reducer;
