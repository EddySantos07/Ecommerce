import Redux from "redux";

const CurrentStyleGalleryReducer = (state = {}, action) => {
    switch(action.type) {
        case "SWITCH_STYLE_GALLERY":
            return {...action.payload};
       default: 
       return state;
    }
}

export default CurrentStyleGalleryReducer;