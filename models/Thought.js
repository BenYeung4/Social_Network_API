//dependencies
const { Schema, model } = require("mongoose");

//using the moment package for date
const moment = require("moment");

//retrieving the length of thoguht's "reactions" array field on query, which we used with the below's reaction
const reactionSchema = require("./Reaction");

//Schema data with MongoDB and Mongoose
const thoughtSchema = new Schema(
  {
    thoughtText: {
      //entry type
      type: String,
      required: "Please enter a text from 1 - 280!",
      //must be between 1 & 280 characters
      maxlength: 280,
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
    username: {
      //entry type
      type: String,
      required: "Please enter a username",
      trim: true,
    },
    reactions:
      //Array of nested documents created with the reactionSchema, since we made the reactionSchema a seperate model, we will push it with the []
      [reactionSchema],
  },
  {
    toJSON: {
      //virtuals is what we would want to display on the client side
      virtuals: true,
      //getter is typically a special type of function that takes the stored data youve already looking to retrieve and modifyies or formats it upon return. In this case, we are retriving the reaction
      getters: true,
    },
    //set to false because this is a virtual that Mongoose returns, we dont need
    id: false,
  }
);

//getters's true function, retriving the length of friends. Wish I have as many friends
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reaction.length;
});

const Thought = model("Thought", thoughtSchema);
//export the Thought Model
module.exports = Thought;
