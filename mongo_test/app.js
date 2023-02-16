let client = require("mongodb").MongoClient;
const connectionString = "mongodb://localhost:27017";

(async () => {
  let connection = await client.connect(connectionString);
  let db = connection.db("firstdb");
  try {
    let user = { name: "Ivan", age: 25 };
    const result = await db.collection("users").insertOne(user);
    console.log(result);
  } finally {
    connection.close();
  }
})().catch(error => console.log(error));
