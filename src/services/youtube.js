export const fetchPopularVideos = async () => {
    console.log("Fetching popular videos (mock)...");
    return [
        {
            id: "1",
            snippet: {
                title: "Sample Video 1",
                thumbnails: {
                    medium: {
                        url: "https://via.placeholder.com/320x180.png?text=Video+1",
                    },
                },
            },
        },
        {
            id: "2",
            snippet: {
                title: "Sample Video 2",
                thumbnails: {
                    medium: {
                        url: "https://via.placeholder.com/320x180.png?text=Video+2",
                    },
                },
            },
        },
        {
            id: "3",
            snippet: {
                title: "Sample Video 3",
                thumbnails: {
                    medium: {
                        url: "https://via.placeholder.com/320x180.png?text=Video+3",
                    },
                },
            },
        },
    ];
};
