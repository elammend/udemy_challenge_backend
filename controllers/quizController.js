const catchAsync = require("../utils/catchAsync");
const Quiz = require("../models/quizModel");
const { scorePercent } = require("../utils/grader");
exports.getQuizByName = catchAsync(async (req, res, next) => {
  let quiz = await Quiz.findOne({ name: req.query.name });
  if (!quiz) {
    res.status(404).json({
      status: "failure",
      data: {
        message: "no quiz found with that name"
      }
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      questions: quiz.questions
    }
  });
});

exports.checkAnswersByName = catchAsync(async (req, res, next) => {
  let quiz = await Quiz.findOne({ name: req.query.name }).select("answerKey");
  const score = scorePercent(quiz.answerKey, req.body.answers);
  res.status(200).json({
    status: "success",
    data: {
      score
    }
  });
});
