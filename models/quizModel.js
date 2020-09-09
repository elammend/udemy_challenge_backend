const mongoose = require("mongoose");

const question = new mongoose.Schema({
  question: String,
  options: mongoose.Schema.Types.Mixed
});
const quizSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  questions: {
    type: [question],
    required: [true]
  },
  answerKey: {
    type: [
      {
        type: String,
        maxlength: 1
      }
    ],
    select: false
  }
});

const Quiz = mongoose.model("Quiz", quizSchema);
module.exports = Quiz;
