const express = require("express");
const app = express();


const hobbys = ["Fußball", "Lesen", "Kochen"];
const einkaufsliste = ["Milch", "Brot", "Eier",""];


app.get("/hobbys", (req, res) => {
  res.json(hobbys);
});


app.get("/einkaufsliste", (req, res) => {
  res.json(einkaufsliste);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});



