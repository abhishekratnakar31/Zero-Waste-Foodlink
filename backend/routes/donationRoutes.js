const express = require('express');
const router = express.Router();
const {
    createDonation,
    getNearbyDonations,
    claimDonation,
    analyzeImageForForm,
    getDonations
} = require('../controllers/donationController');
const upload = require('../middleware/upload');

const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, upload.single('image'), createDonation);
router.get('/', protect, getDonations);
router.post('/analyze', protect, upload.single('image'), analyzeImageForForm);
router.get('/nearby', protect, getNearbyDonations);
router.post('/:id/claim', protect, claimDonation);

module.exports = router;