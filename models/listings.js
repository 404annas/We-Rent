const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  image: {
    type: String,
    default: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvbWV8ZW58MHx8MHx8fDA%3D",
    set: (v) => v === "" ? "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvbWV8ZW58MHx8MHx8fDA%3D" : v
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = new mongoose.model("listing", listingSchema);
module.exports = Listing;
