import connectToDatabase from "@/lib/Database/db";
import User from "@/lib/Database/models/userModel";

export async function POST(req, res) {
    await connectToDatabase();

    try {
        const { email, password } = await req.json()
        const user = await User.findOne({ email })
        if (!user) {
            return Response.json({ success: false, msg: "User not found" })
        }
        if (password !== user.password) {
            return Response.json({ success: false, msg: "Password does not match" })
        }
        return Response.json({ success: true, user: user });
    } catch (error) {
        console.error('Error Login:', error);
        return Response.json({ error: 'Internal server error' });
    }
}