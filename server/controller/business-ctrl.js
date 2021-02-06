const Business = require('../models/business-model')

createBusiness = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a business',
        })
    }

    const business = new Business(body)

    if (!business) {
        return res.status(400).json({ success: false, error: err })
    }

    business
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: business._id,
                message: 'Business created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Business not created!',
            })
        })
}

updateBusiness = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Business.findOne({ _id: req.params.id }, (err, business) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Business not found!',
            })
        }
        business.name = body.name
        business.link = body.link
        business.type = body.type
        business
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: business._id,
                    message: 'Business updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Business not updated!',
                })
            })
    })
}

deleteBusiness = async (req, res) => {
    await Business.findOneAndDelete({ _id: req.params.id }, (err, business) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!business) {
            return res
                .status(404)
                .json({ success: false, error: `Business not found` })
        }

        return res.status(200).json({ success: true, data: business })
    }).catch(err => console.log(err))
}

getBusinessById = async (req, res) => {
    await Business.findOne({ _id: req.params.id }, (err, business) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!business) {
            return res
                .status(404)
                .json({ success: false, error: `Business not found` })
        }
        return res.status(200).json({ success: true, data: business })
    }).catch(err => console.log(err))
}

getBusinesses = async (req, res) => {
    await Business.find({}, (err, businesses) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!businesses.length) {
            return res
                .status(404)
                .json({ success: false, error: `Business not found` })
        }
        return res.status(200).json({ success: true, data: businesses })
    }).catch(err => console.log(err))
}

pipe = async(req, res) => {

    const pipeline = [
      {
        '$sample': {
          'size': 1
        }
      }
    ];

    await Business.aggregate(pipeline, function( err, businesses ) {

        if ( err ) return res.status(400).json({ success: false, error: err });
        if (!businesses.length) {
            return res
                .status(404)
                .json({ success: false, error: `Business not found` })
        }
        console.log(JSON.stringify(businesses, undefined, 2));
        return res.status(200).json({ success: true, businesses: businesses });

    }).catch(err => console.log(err));

    await new Promise(r => setTimeout(r, 2000));
}

module.exports = {
    createBusiness,
    updateBusiness,
    deleteBusiness,
    getBusinesses,
    getBusinessById,
    pipe
}