const apiKey = '8oxUgP03xJBFH2IZ5nSyKPHfe04y713N';

const request = fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);

request.then(resp => resp.json()).then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
}).catch(console.warn);