import {useEffect, useState} from "react";

const endpoint = `${process.env.REACT_APP_API_BASE}/api/album`;

const useAlbums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        console.log("Before fetch:", endpoint);
        const request = fetch(endpoint);
        console.log("After fetch:", request);

        request
            .then((apiResponse) => {
                if (!apiResponse.ok) {
                    console.error(apiResponse.statusText);
                    return;
                }

                return apiResponse.json();
            })
            .then((apiResult) => {
                setAlbums(apiResult);
            });
    }, []);

    return albums;
};

export default useAlbums;