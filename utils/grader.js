exports.scorePercent = (answerKey, responses) => {
  const totalQuestions = answerKey.length;
  let score = 0.0;
  for (let i = 0; i < totalQuestions; i++) {
    if (answerKey[i] === responses[i]) {
      score++;
    }
  }
  return score / totalQuestions;
};
