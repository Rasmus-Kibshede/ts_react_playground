/* eslint-disable @typescript-eslint/no-explicit-any */

import { Router } from 'express';
import jwt from 'jsonwebtoken';
// Import { User } from '../model/user'
import connection from '../database/connectionMYSQL';
import { RowDataPacket } from 'mysql2';

const router = Router();

router.post('/login', async (req, res) => {

    const [rows] = await connection.query<RowDataPacket[]>('select * from user where email = ? AND password = ?', [req.body.email, req.body.password]);

    if (rows.length > 0) {
        const user = rows[0];

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
            expiresIn: '1d'
        });
        res.status(200).json({ token });
    } else {
        res.status(400).json({ message: 'Invalid Credentials' });
    }

});

const verifyJwt = (req: any, res: any, next: any) => {
    const token = req.headers['token'];
    
    if (!token) {
        return res.status(401).json({ auth: false, message: 'No token provided.' });
    } else {
        jwt.verify(token, process.env.JWT_SECRET as string, (err: any, decoded: any) => {
            if (err) {
                return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
            }
            req.userId = decoded.id;
            next();
        });
    }
};

router.get('/checkauth', verifyJwt, async (req, res) => {
    res.status(200).json({ auth: true });
});

export default router;
