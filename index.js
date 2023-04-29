const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

//  4d44bb54-ef5d-435f-b869-7f0de28d7c07
//  

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r = await axios.put("https://api.chatengine.io/users/",
    {username: username, secret: username, first_name: username},
    {headers: {"private-key":"0043fa75-01c4-44a5-a232-f6484cc92826" }}
    );
    return res.status(r.status).json(r.data)
  }catch(e){
    return res.status(e.response.status).json(e.response.data)
  }
});

app.listen(8080);