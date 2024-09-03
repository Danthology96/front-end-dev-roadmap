const getImage = async () => {
    try {
        const apiKey = '8oxUgP03xJBFH2IZ5nSyKPHfe04y713N';
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);
        const { data } = await response.json();
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        /// error handling
        console.error(error);
    }
}

getImage();


