import FeedbackContext from "../context/FeedBackContext";
import { useContext } from "react";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  const feedbackArray = Array.isArray(feedback) ? feedback : [];

  // Calculate rating avg
  let average = 0;
  if (feedbackArray.length > 0) {
    average =
      feedbackArray.reduce((acc, cur) => {
        return acc + cur.rating;
      }, 0) / feedbackArray.length;
    // 1 decimal and remove zero (9.0) to get just (9)
    average = average.toFixed(1).replace(/[.,]0$/, " ");
  }

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews </h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average} </h4>
    </div>
  );
}

export default FeedbackStats;
