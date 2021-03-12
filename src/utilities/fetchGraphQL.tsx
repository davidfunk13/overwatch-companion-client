import React, { FC, useEffect, useState, FunctionComponent } from 'react';
import IFetchGraphQLProps from './IFetchGraphQLProps';
import { useAuth0 } from '@auth0/auth0-react';

const useFetchGraphQL: FC<IFetchGraphQLProps> = () => {
    const { getAccessTokenSilently } = useAuth0();

    const [data, setData] = useState(null);

    useEffect(() => {
        const apiUrl = process.env.NODE_ENV === "production" ? process.env.REACT_APP_API : "";

        const accessToken = getAccessTokenSilently({
            audience: process.env.REACT_APP_AUTH_AUDIENCE,
        });

        var graphql = JSON.stringify({
            query: `query{
                battletags(input:1){
                id
                userId
                name
                urlName
                blizzId
                level
                playerLevel
                platform
                isPublic
                portrait
                }
              }`,
            variables: {}
        })

        var requestOptions = {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            },
            body: graphql,
        };

        fetch(apiUrl + "/api/graph", requestOptions).then(response => response.json()).then(data => setData(data.data))

    }, [])
    return data
};

export default useFetchGraphQL;