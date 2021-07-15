import mongoose from "mongoose";

const Connection = async (URL) => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default Connection;

// sitaram_meena
// PsxVaN0fmk9XA6Cz
