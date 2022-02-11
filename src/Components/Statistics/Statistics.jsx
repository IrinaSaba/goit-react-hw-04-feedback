import PropTypes from "prop-types";
import s from './Statistic.module.scss'
const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
   return ( 
      <>
       <p className={s['stat']}>Good: {good}</p>
       <p className={s['stat']}>Neutral: {neutral}</p>
       <p className={s['stat']}>Bad: {bad}</p>
       <p className={s['stat']}>Total: {total}</p>
       <p className={s['stat']}>Positive feedback: {positivePercentage}% </p>
      </>
    );
}
 
Statistics.propTypes = {
   good: PropTypes.number.isRequired,
   neutral: PropTypes.number.isRequired,
   bad: PropTypes.number.isRequired,
   total: PropTypes.func.isRequired,
   positivePercentage: PropTypes.func.isRequired,
 }

export default Statistics;