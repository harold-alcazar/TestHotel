const express = require('express');

module.exports = (Collection) => {
    const insertHotel = (req, res) => {
        const hotel = req.body;
        Collection.create(hotel, (err, hotel) => {
            if (err) {
                res.sendStatus(500);
            } else {
                res.send(hotel);
            }
        });
    };

    const findAllHotels = (req, res) => {
        Collection.find({}, (e, result) => {
            if (e) {
                res.status(500).send(e);
            } else {
                res.send(result);
            }
        });
    };

    const findHotelByName = (req, res) => {
        const hotelName = req.params['name'];
        Collection.find({ name: { "$regex": hotelName, "$options": "i" } }, (e, result) => {
            if (e) {
                res.status(500).send(e);
            } else {
                res.send(result);
            }
        });
    };

    const updateHotel = (req, res) => {
        const hotel = req.body;
        Collection.update({ _id: req.params._id }, { $set: hotel }, (e) => {
            if (e)
                res.sendStatus(500);
            else
                res.sendStatus(200);
        });
    };

    const removeHotel = (req, res) => {
        Collection.remove({ _id: req.params._id }, (e) => {
            if (e)
                res.status(500).send(e);
            else
                res.sendStatus(200);
        });
    };

    let router = express.Router();

    router.post('/', insertHotel);
    router.get('/', findAllHotels);
    router.get('/:name', findHotelByName);
    router.put('/:_id', updateHotel);
    router.delete('/:_id', removeHotel);

    return router;
}
