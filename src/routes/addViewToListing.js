import {db} from '../database';

export const addViewToListingRoute = {
    method: 'POST',
    path: '/api/listing/{id}/add-view',
    handler: async (req, h) => {
        const id = req.params.id;

        await db.query(
            'UPDATE listings SET views=views+1 WHERE id =?',
            [id],
        );

        const {results} = await db.query(
            'SELECT * from listings where id=?',
            [id],
        );

        const updateListing = results[0];

        return updateListing;
    } 
}