import express from 'express'
import {getComplaints, createComplaint, resolveComplaint, deleteComplaint} from '../controllers/complaint.controller.js'
// import auth from '../middleware/auth.middleware.js'

const router = express.Router();

router.get('/', getComplaints); // public
router.post('/', createComplaint); // public
router.put('/:id/resolve', resolveComplaint); // protected
router.delete('/:id', deleteComplaint); // protected

// router.put('/:id', resolveComplaint, ()=> app.use(auth)
// );
// router.delete('/:id',deleteComplaint, ()=> app.use(auth)
// );

export default router;