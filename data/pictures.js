class Picture {
    constructor(pictureImg, pictureAlt, pictureName, pictureArtist, picturePrice, pictureInStock) {
        this.img = pictureImg;
        this.alt = pictureAlt;
        this.name = pictureName;
        this.artist = pictureArtist;
        this.price = picturePrice;
        this.inStock = pictureInStock;
    }


    getImg() {
        const imgPath = 'https://cdn.pixabay.com/photo/';
        return `${imgPath}${this.img}`;
    }
    getAlt() {
        return this.alt;
    }
    getName() {
        return this.name;
    }
    getArtist() {
        return this.artist;
    }
    getPrice() {
        return `$${this.price}`;
    }
    getInStock() {
        if (this.inStock === false) {
            return "Not Available";
        } else {
            return "";
        }
    }
}

const pictures = [
    new Picture(
        '2017/07/03/20/17/colorful-2468874_1280.jpg',
        'A Great Picture',
        'A Great Picture',
        'Brouno Brave',
        200,
        true),
    new Picture(
        '2014/12/09/21/01/still-life-562357__340.jpg',
        'Another Picture',
        'Another Picture',
        'Brouno Brave',
        360,
        true),
    new Picture(
        '2017/11/29/09/15/paint-2985569__480.jpg',
        'Morning Good',
        'Morning Good',
        'Carla Uno',
        295,
        true),
    new Picture(
        '2019/09/03/17/35/bird-4449891__480.png',
        'Old Picture',
        'Old Picture',
        'Kamilla Hart',
        522,
        false),
]

export {
    pictures
};