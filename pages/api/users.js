import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('USERS'); // Database name
    const users = await db.collection('users_Data').find({}).toArray(); // Fetch all users from 'users_Data' collection
    res.status(200).json(usersList);  // Return the fetched users
  } catch (error) {
    console.error('Error fetching users:', error);  // Log error to terminal
    res.status(500).json({ error: 'Unable to fetch users' });
  }
}
