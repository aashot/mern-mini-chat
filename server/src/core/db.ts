import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.v00ka.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  },
  (err: any) => {
    if (err) {
      throw Error(err);
    }
  }
);
