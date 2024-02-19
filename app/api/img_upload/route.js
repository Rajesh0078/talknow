import connectToDatabase from "@/lib/Database/db";
import User from "@/lib/Database/models/userModel";
import multer from "multer";


const upload = multer({
    storage: multer.memoryStorage(),
  });
  
  export const config = {
    api: {
      bodyParser: false,
    },
  };

export async function POST(req) {
    await connectToDatabase();

    if (req.method === 'POST') {
        await handleImageUpload(req);
    } else if (req.method === 'GET') {
        await handleImageRetrieval(req);
    } else {
        Response.json({ success: false, message: 'Method Not Allowed' });
    }

}


  
//   async function handleImageRetrieval(req, res) {
//     try {
//       const { id } = req.query;
  
//       await client.connect();
//       const database = client.db('your_database_name');
//       const collection = database.collection('images');
  
//       const imageId = new ObjectID(id);
//       const image = await collection.findOne({ _id: imageId });
  
//       if (!image) {
//         res.status(404).json({ success: false, error: 'Image not found' });
//         return;
//       }
  
//       const base64Image = image.data;
//       res.setHeader('Content-Type', 'image/*');
//       res.send(Buffer.from(base64Image, 'base64'));
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ success: false, error: 'Internal Server Error' });
//     } finally {
//       await client.close();
//     }
//   }