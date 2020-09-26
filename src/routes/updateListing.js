import {db} from '../database';
import * as admin from 'firebase-admin';

export const updateListingRoute = {
    method: 'POST',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const {id} = req.params;
        const {name, description, price} = req.payload;
        const token = req.headers.authtoken;
        const user = await admin.auth().verifyIdToken(token);
        const userId = user.used_id;
        await db.query(`
            UPDATE listings 
                SET name=?, description=?, price=?
                WHERE id=? AND user_id=?
        `,
        [name, description, price, id, userId]
    );
    console.log("ch 6");
    const {results} = await db.query(
        'SELECT * from listings WHERE id=? AND user_id=?',
        [id, userId],
    )
    console.log("ch 7");
    return results[0];

    }
}


