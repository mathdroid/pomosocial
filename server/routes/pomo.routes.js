import Express from 'express';
import * as PomoController from '../controllers/pomo.controller';
const router = Express.Router();

// Get all Pomos
router.route('/getPomos').get(PomoController.getPomos);

// Get one pomo by title
router.route('/getPomo').get(PomoController.getPomo);

// Add a new Pomo
router.route('/addPomo').pomo(PomoController.addPomo);

// Delete a Pomo
router.route('/deletePomo').pomo(PomoController.deletePomo);

export default router;
