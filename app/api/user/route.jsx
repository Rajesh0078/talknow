import connectToDatabase from "@/lib/Database/db";
import User from "@/lib/Database/models/userModel";

export async function GET(req, res) {
    await connectToDatabase();

    try {
        const users = await User.find().lean();
        return Response.json({ users: users, success: true });
    } catch (error) {
        console.error('Error fetching users:', error);
        return Response.json({ error: 'Internal server error' });
    }
}