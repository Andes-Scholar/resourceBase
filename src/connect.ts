import mongoose from "mongoose";

export default async (db: string) => {
  try {
      await mongoose.connect(db)
      console.info(`Connected to database on Worker process: ${process.pid}`)
  } catch (error) {
      console.error(`Connection error: ${error.stack} on Worker process: ${process.pid}`)
      process.exit(1)
  }
}