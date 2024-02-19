import connectToDatabase from "@/lib/Database/db";
import User from "@/lib/Database/models/userModel";

export async function GET(req, res) {
    await connectToDatabase();

    try {
        const { searchParams } = new URL(req.url)
        const id = searchParams.get('id')

        const user = await User.findOne({ id: parseInt(id) })
        return Response.json({ success: true, user: user });
    } catch (error) {
        console.error('Error fetching users:', error);
        return Response.json({ error: 'Internal server error' });
    }
}