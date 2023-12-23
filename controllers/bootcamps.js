const Bootcamp = require('../models/Bootcamp');

// @desc    get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = async (req, res, _next) => {
  try {
    const bootcamps = await Bootcamp.find();

    res
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    get single bootcamp by id
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bootcamp = await Bootcamp.findById(id);

    if (!bootcamp) {
      return res
        .status(400)
        .json({ success: false, msg: `No bootcamp found with id ${id}` });
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    // console.log(`${err.stack}`);
    return res.status(400).json({ success: false, msg: `${err.message}` });
  }
};

// @desc    create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = async (req, res, next) => {
  try {
    // create new bootcamp
    const bootcamp = await Bootcamp.create(req.body);

    return res.status(201).json({ success: true, data: bootcamp });
  } catch (err) {
    // throw error
    res.status(400).json({ success: false, msg: `${err.message}` });
  }
};

// @desc    Update bootcamp by id
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bootcamp) {
      return res
        .status(400)
        .json({ success: false, message: `Bootcamp not found.` });
    }

    res.status(200).json({
      success: true,
      msg: `Bootcamp updated successfully`,
      data: bootcamp,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    delete a bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const id = req.params.id;

    const bootcamp = await Bootcamp.findByIdAndDelete(id);

    if (!bootcamp) {
      return res
        .status(400)
        .json({ success: false, message: `Bootcamp not found.` });
    }

    res
      .status(200)
      .json({ success: true, msg: `deleted bootcamp successfully`, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
