import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_AUTH_KEY as string;

interface AuthenticatedRequest extends Request {
    user?: any;
}

function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    // Skip authentication if JWT_AUTH_KEY is not configured
    if (!JWT_SECRET || JWT_SECRET === 'your_jwt_auth_key_here_make_it_long_and_secure') {
        console.warn('⚠️  JWT_AUTH_KEY not configured. Skipping authentication.');
        return next();
    }

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access denied, no token provided' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token' });
        }
        req.user = user;
        next();
    });
}

export default authenticateToken;