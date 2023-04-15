const image1 = process.env.PUBLIC_URL + "/image 8.png";
const image2 = process.env.PUBLIC_URL + "/image 7.png";
const image3 = process.env.PUBLIC_URL + "/image 6.png";
const image4 = process.env.PUBLIC_URL + "/image 5.png";
const image5 = process.env.PUBLIC_URL + "/image 4.png";
const image6 = process.env.PUBLIC_URL + "/image 3.png";
const image7 = process.env.PUBLIC_URL + "/image 2.png";
const image8 = process.env.PUBLIC_URL + "/image 1.png";

export let images = [image1, image2, image3, image4, image5, image6, image7, image8];

export const getImageById = (id: number) => {
    return images[Math.floor((id - 1) % 8)]
}