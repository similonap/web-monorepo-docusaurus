import app from "./app.ts";
import { connect } from "./database.ts";

app.listen(app.get("port"), async() => {
    await connect();
    console.log("Server started on http://localhost:" + app.get('port'));
});

export default app;