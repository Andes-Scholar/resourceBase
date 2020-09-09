import mongoose from "mongoose";

export default (db: string) => {
  const connect = () => {
    mongoose
      .connect(db, { useNewUrlParser: true })
      .then(() => {
        return console.log(`Se conecto a la base de datos correctamente`);
      })
      .catch(error => {
        console.log("Error al conectarse a la base de datos: ", error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on("disconnected", connect);
};