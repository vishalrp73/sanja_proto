import { useState, useEffect, useRef } from 'react';
import './searchAddress.css';
let autoComplete;

const loadScript = (url, callback) => {
    let script = document.createElement('script');
    script.type = 'text/javascript';

    if (script.readyState) {
        script.onreadystatechange = function() {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = () => callback();
    }

    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
};

const handleScriptLoad = (updateQuery, autoCompleteRef) => {
    autoComplete = new window.google.maps.places.Autocomplete(autoCompleteRef.current);
    autoComplete.setFields(['address_components', 'formatted_address']);
    autoComplete.addListener('place_changed', () => handlePlaceSelect(updateQuery));
}

async function handlePlaceSelect(updateQuery) {
    const addressObj = autoComplete.getPlace();
    const query = addressObj.formatted_address;
    updateQuery(query);
    console.log(addressObj);
}

const SearchLocationInput = (props) => {
    const [query, setQuery] = useState("");
    const [locked, setLocked] = useState(false);
    const autoCompleteRef = useRef(null);

    useEffect(() => {
        loadScript(
            `https://maps.googleapis.com/maps/api/js?key=AIzaSyBADFJNSwMBio4IleXhYoptypCUNVv3uhA&libraries=places`,
            () => handleScriptLoad(setQuery, autoCompleteRef)
        );
    }, []);

    const postAddress = (e) => {
        setQuery(e.target.value);
    }

    const lockAddress = () => {
        if (props.location === 'cov') {
            localStorage.setItem('storage-address', query)
        } else if (props.location === 'buy') {
            localStorage.setItem('home-address', query)
        }
        setLocked(true);
    }

    return (
        <div className = 'search-location-input' style={{border: locked ? '2px solid limegreen' : 'none', padding: locked ? '10px' : '0px'}}>
            <input ref = {autoCompleteRef} onChange = {event => postAddress(event)}
                placeholder = 'Start typing an address...' value = {query }
                className = 'search-input' />
            <input type = 'button' onClick = {() => lockAddress()} value = 'Lock In' 
                className = 'address-check-btn' />
        </div>
    )
}

export default SearchLocationInput;