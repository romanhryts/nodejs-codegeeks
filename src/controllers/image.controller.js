class ImageController {

    static getRandomImage(req, res) {
        try {
            const randomImageNumber = Math.floor(Math.random() * 8 + 1); // random number in range 1-8
            const path = `/images/cats/${randomImageNumber}.jpeg`;
            res.send({path})
        } catch (error) {
            res.status(500).send({message: 'Server error.'})
        }
    }

}

module.exports = ImageController;
