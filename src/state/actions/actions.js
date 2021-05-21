export const toggleRunApp = data => ({
    type: 'TOGGLE_APP_RUN', isAppRunning: data.isAppRunning
});

export const vScroll = data => ({
    type: 'TOGGLE_SCROLL', isScroll: data.isScroll
});
