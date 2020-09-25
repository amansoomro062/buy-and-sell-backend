import { db } from '../database';

export const deleteListingRoute = {
    method: 'DELETE',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const {id} = req.params;
        console.log("oho");
        await db.query(
            'DELETE from listings where id=?',
            [id]
        );
        return {message: "Success"};
        
        
    } 
}