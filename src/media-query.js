const initMediaQuery = (mediaQuery, callback) => {
    // Register event listener
    mediaQuery.addListener(callback);

    // Initial check
    callback(mediaQuery)
};

export default initMediaQuery;