import React, {Component} from 'react';
import * as ReactDOM from 'react-dom';
import {css, StyleSheet} from 'aphrodite';

const styles = StyleSheet.create({
    map: {
        height: (window.innerHeight - 56) + 'px'
    }
});

export default class Map extends Component {
    componentDidMount() {
        this.maps = window.google.maps;
        const node = ReactDOM.findDOMNode(this.refs.map);
        const firstItem = this.props.items[Object.keys(this.props.items)[0]];
        this.map = new this.maps.Map(node, {
            zoom: 4,
            center: {
                lat: firstItem.latLng[0] || 0,
                lng: firstItem.latLng[1] || 1,
            }
        });

        this.markers = this.props.filteredItems.map(key => this.createMarker(key));
        console.log(this.markers);
    }

    createMarker(key) {
        const info = new this.maps.InfoWindow({
            content: '<h3>' + this.props.items[key].title + '</h3><p>' + this.props.items[key].description + '</p>'
        });
        const marker = new this.maps.Marker({
            key,
            info,
            map: this.map,
            position: {
                lat: this.props.items[key].latLng[0],
                lng: this.props.items[key].latLng[1]
            }
        });
        marker.addListener('click', () => {
            info.open(this.map, marker);
        });
        return marker;
    }

    componentDidUpdate(oldProps, oldState) {
        let markerKeys = [];

        console.log(Object.values(this.markers));
        this.markers = this.markers.filter(marker => {
            if (this.props.filteredItems.indexOf(marker.key) === -1) {
                marker.setMap(null);
                return false;
            } else {
                markerKeys.push(marker.key);
                return true;
            }
        });

        for (let i = 0; i < this.props.filteredItems.length; i++) {
            // const item = this.props.items[this.props.filteredItems[i]];
            if (markerKeys.indexOf(this.props.filteredItems[i]) === -1) {
                this.markers.push(
                    this.createMarker(this.props.filteredItems[i])
                );
            }
        }
    }

    render() {
        return (
            <div className={css(styles.map)} ref='map'/>
        );
    }
}