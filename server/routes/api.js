import Express from 'express';
import * as PomoController from '../controllers/pomo.controller';
const router = Express.Router();

// Get all Pomos
router.route('/getPomos').get(PomoController.getPomos);

// Get one pomo by title
router.route('/getPomo').get(PomoController.getPomo);

// Add a new Pomo
router.route('/addPomo').post(PomoController.addPomo);

// Delete a Pomo
router.route('/deletePomo').post(PomoController.deletePomo);

export default router;
