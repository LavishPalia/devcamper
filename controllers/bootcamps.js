// @desc    get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'get all bootcamps' });
};

// @desc    get single bootcamp by id
// @route   GET /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({ success: true, msg: `get bootcamp ${id}` });
};

// @desc    create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `create bootcamp` });
};

// @desc    Update bootcamp by id
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({ success: true, msg: `update bootcamp ${id}` });
};

// @desc    delete a bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
  const id = req.params.id;
  res.status(200).json({ success: true, msg: `delete bootcamp ${id}` });
};
