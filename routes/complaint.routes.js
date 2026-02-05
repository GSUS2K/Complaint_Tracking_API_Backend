import express from 'express'
import {getComplaints, createComplaint, resolveComplaint, deleteComplaint} from '../controllers/complaint.controller.js'

const router = express.Router();

router.get('/', getComplaints);
router.post('/', createComplaint);
router.put('/:id/resolve', resolveComplaint);
router.delete('/:id',deleteComplaint);

export default router;