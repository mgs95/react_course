import { API } from "../constants/application";

/**
 * Makes a GET request to the API and executes a resolve function after getting
 * the response.
 *
 * @param endpoint {string} - endpoint id (just the endpoint, not the whole URL)
 * @param params {object} - object containing all the parameters to include in
 *                          the request
 * @param success {function} - function to dispatch after getting the response.
 */
export const makeRequest = (endpoint, params, success) => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const requestOptions = {
        method: 'GET',
        headers: headers,
    };

    let url = new URL(`${API}${endpoint}`);

    // Add param to URL
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject();
            }
            return response.json();
        })
        .then(response => {
            if (response.status === 200) {
                return { ...response};
            }
            success(response);

            // Error
            return { ...response};
        });
};
