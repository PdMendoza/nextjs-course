import { MongoClient } from "mongodb";

//POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://reactjs-course-summary-pedro:mercurio@cluster0.qt6uu.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsColection = db.collection("meetups");

    const result = await meetupsColection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted" });
  }
}

export default handler;
