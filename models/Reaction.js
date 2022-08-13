//dependencies
const { Schema, model } = require("mongoose");

//using the moment package for date
const moment = require("moment");

//Schema data with MongoDB and Mongoose
const ReactionSchema = new Schmea(
  {
    //mongoose's ObjectId data types
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: "Please enter a text",
      //must be within 280 characters
      maxlength: 280,
      trim: true,
    },
    username: {
      type: String,
      required: "Please enter a username",
      trim: true,
    },
    createdAt: {
      //sets the type to be a date
      type: date,
      //sets to current timestamp
      default: Date.now,
      //using getter method to format the timestamp on query
      get: (createdAtVal) =>
        moment(createdAtVal).format("MMM DD, YYY [at] hh:mm a"),
    },
  },
  {
    //this is for the timestamp(createdAt)
    toJSON: {
      //getter is typically a special type of function that takes the stored data youve already looking to retrieve and modifyies or formats it upon return. In this case, we are retriving the reaction
      getters: true,
    },
    //set to false because this is a virtual that Mongoose returns, we dont need
    id: false,
  }
);

//export the Reaction model
module.exports = ReactionSchema;
