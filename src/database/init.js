import postgressConnection from "./connection";
import User from "./model/Users";

async function syncModels() {
  await postgressConnection.authenticate();
  await User.sync({ alter: true });
}

async function dbInit() {
  try {
    console.debug("Connection to the database");
    await syncModels();
    console.debug("Connected to the database");
  } catch (error) {
    console.error("Failed to connect");
    process.exit(1);
  }
}

export default dbInit;
