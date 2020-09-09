const { Router } = require("express");
const quizController = require("../controllers/quizController");
const router = Router();

router.route("/").get(quizController.getQuizByName);
router.route("/").post(quizController.checkAnswersByName);
module.exports = router;
