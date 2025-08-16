const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Listing = require("./models/listings.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/werent";

main()
  .then((res) => console.log("Connected to DB"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("This is Home Route");
});

app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  // console.log(allListings);
  res.render("./listings/index.ejs", { allListings });
});

app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("./listings/show.ejs", { listing });
});

app.get("/listings/new", (req, res) => {
  res.render("./listings/new.ejs");
});

// app.get("/testlisting", async (req,res) => {
//     const sampleListing = new Listing({
//         title: "My First Home",
//         description : "By The Beach",
//         price: 5900000,
//         location: "Defence",
//         country: "Pakistan"
//     })

//     const savedListing = await sampleListing.save()
//     console.log(savedListing)
//     res.send("Listing Add Successfully")
// })

app.listen(8080, () => {
  console.log("App is running on port 8080");
});
