import fire from '../fire';
import {showList} from "./view";

export const onChange = (key, text) => ({
    type: 'CREATE_CHANGE',
    key,
    text
});

export const createItem = item => {
    return dispatch => {
        console.log(item);
        if (item.title === '') {
            alert("Title is required");
        } else if (item.location === '') {
            alert("Location is required");
        } else {
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({address: item.location}, (results, status) => {
                if (status === window.google.maps.GeocoderStatus.OK) {
                    const latlng = [results[0].geometry.location.lat(), results[0].geometry.location.lng()];
                    console.log(latlng);

                    const {title, category, status, description} = item;

                    const key = fire.database().ref('items').push({
                        title,
                        category,
                        status,
                        description,
                        latLng: latlng
                    }).key;
                    dispatch(showList(key));

                }
            });


        }
    }
};