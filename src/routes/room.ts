import express from 'express';
import  Room from '../models/room';

// Generate endpoints using room router for crud operations using room sequalize model 
const roomRouter = express.Router();

// Generate endpoints using roomRouter for crud operations using room sequalize model 

// Create a new room
roomRouter.post('/', async (req, res) => {
    try {
        const { name, capacity } = req.body;
        const room = await Room.create({ name, capacity });
        res.status(201).json(room);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create room' });
    }
});

// Get all rooms
roomRouter.get('/', async (req, res) => {
    try {
        const rooms = await Room.findAll();
        res.json(rooms);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch rooms' });
    }
});

// Get a room by ID
roomRouter.get(':id', async (req, res) => {
    try {
        const { id } = req.params;
        const room = await Room.findByPk(id);
        if (room) {
            res.json(room);
        } else {
            res.status(404).json({ error: 'Room not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch room' });
    }
});

// Update a room by ID
roomRouter.patch(':id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, capacity } = req.body;
        const room = await Room.findByPk(id);
        if (room) {
            await room.update({ name, capacity });
            res.json(room);
        } else {
            res.status(404).json({ error: 'Room not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update room' });
    }
});

// Delete a room by ID
roomRouter.delete(':id', async (req, res) => {
    try {
        const { id } = req.params;
        const room = await Room.findByPk(id);
        if (room) {
            await room.destroy();
            res.json({ message: 'Room deleted successfully' });
        } else {
            res.status(404).json({ error: 'Room not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete room' });
    }
});

roomRouter.get('/findRoomByBranchid', async (req, res) => {
    try {
        const rooms = await Room.findAll({
          // where: {branch_id: 2},
          attributes: { exclude: ['createdAt', 'updatedAt']}, 
        });
        console.log(rooms);
        res.json(rooms);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
  });

export default roomRouter;

// Create a new room
/* router.post('/rooms', async (req, res) => {
    try {
        const { name, capacity } = req.body;
        const room = await Room.create({ name, capacity });
        res.status(201).json(room);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create room' });
    }
});

// Get all rooms
router.get('/rooms', async (req, res) => {
    try {
        const rooms = await Room.findAll();
        res.json(rooms);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch rooms' });
    }
});

// Get a room by ID
router.get('/rooms/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const room = await Room.findByPk(id);
        if (room) {
            res.json(room);
        } else {
            res.status(404).json({ error: 'Room not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch room' });
    }
});

// Update a room by ID
// Update a room by ID
router.patch('/rooms/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, capacity } = req.body;
        const room = await Room.findByPk(id);
        if (room) {
            await room.update({ name, capacity });
            res.json(room);
        } else {
            res.status(404).json({ error: 'Room not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update room' });
    }
});

// Delete a room by ID
router.delete('/rooms/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const room = await Room.findByPk(id);
        if (room) {
            await room.destroy();
            res.json({ message: 'Room deleted successfully' });
        } else {
            res.status(404).json({ error: 'Room not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete room' });
    }
}); 

export default router;


*/