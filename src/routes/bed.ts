import express from 'express';
import { Router } from 'express';
import Bed  from '../models/bed';

// Generate endpoints using bed router for crud operations using room sequalize model 
const bedRouter: Router = express.Router();

// Create a new bed
bedRouter.post('/', async (req, res) => {
    try {
        const { name, type, price } = req.body;
        const newBed = await Bed.create({ name, type, price });
        res.status(201).json(newBed);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create bed' });
    }
});

// Get all beds
bedRouter.get('/', async (req, res) => {
    try {
        const beds = await Bed.findAll();
        res.json(beds);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch beds' });
    }
});

// Get a specific bed by ID
bedRouter.get('/:id', async (req, res) => {
    try {
        const bedId = req.params.id;
        const bed = await Bed.findByPk(bedId);
        if (bed) {
            res.json(bed);
        } else {
            res.status(404).json({ error: 'Bed not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch bed' });
    }
});

// Update a bed
bedRouter.put('/:id', async (req, res) => {
    try {
        const bedId = req.params.id;
        const { name, type, price } = req.body;
        const updatedBed = await Bed.update({ name, type, price }, { where: { id: bedId } });
        if (updatedBed[0] === 1) {
            res.json({ message: 'Bed updated successfully' });
        } else {
            res.status(404).json({ error: 'Bed not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update bed' });
    }
});

// Delete a bed
bedRouter.delete('/:id', async (req, res) => {
    try {
        const bedId = req.params.id;
        const deletedBed = await Bed.destroy({ where: { id: bedId } });
        if (deletedBed === 1) {
            res.json({ message: 'Bed deleted successfully' });
        } else {
            res.status(404).json({ error: 'Bed not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete bed' });
    }
});

export default bedRouter;