const express = require("express");
const mc = require("./controllers/messages_controller");

const app = express();

app.use(express.json());

const PORT = 3001;

const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete)

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});