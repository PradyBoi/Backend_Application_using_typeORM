import * as express from "express";
import userRouter from "./route";

const app = express();

app.use(express.json());
// app.use(() => {
//   const obj: any = {};
//   obj.newObj = "something";
//   obj.anotherObj = {
//     prop: "value",
//   };
//   console.log(obj.newObj);
//   console.log(obj.anotherObj);
// });
app.use(userRouter);

const port = 3000;

app.listen(port, () => console.log(`App is listening on port: ${port}`));

export default app;
