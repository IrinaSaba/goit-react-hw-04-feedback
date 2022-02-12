import PropTypes from "prop-types";
import s from './FeedbackOptions.module.scss'
const FeedbackOptions = ({options, getFeedback}) => {
  let feeds = Object.keys(options)
   return (
    feeds.map(option => (
      // console.log(option)
        <button className={s["btn-search"]} key={option}
          onClick={() => getFeedback(option)}
          type="button"
        > {option}
        </button>
    ))
      
    );
}

FeedbackOptions.propTypes = {
  // options: PropTypes.objectOf(PropTypes.number).isRequired,
  // getFeedback: PropTypes.func.isRequired,
}


export default FeedbackOptions;