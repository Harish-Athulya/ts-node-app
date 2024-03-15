import express, { Request, Response } from 'express';
import Patient from '../models/patient';

const router = express.Router();

// GET /patients - Get all patients
router.get('/', async (req: Request, res: Response) => {
    try {
        const patients = await Patient.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        });
        res.json(patients);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

router.get('/:patient_id', async (req: Request, res: Response) => {
    try {
        const patients = await Patient.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt']}, 
            where: {patient_id: req.params.patient_id}
        });
        res.json(patients);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});
export default router;