import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedBackContext";
import { useContext } from "react";
import Spinner from "./shared/Spinner";

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);
  const feedbackArray = Array.isArray(feedback) ? feedback : [];
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p> No Feedback Yet</p>;
  }
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedbackArray.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
