import PropTypes from "prop-types";
import s from './Section.module.scss'

const Section = ({children, title}) => {
   return ( 
      <>
      <h1 className={s["title"]}>{title}</h1>
      <div>{children}</div>
      </>
    );
}
 
Section.propTypes = {
   title: PropTypes.string,
   children: PropTypes.array.isRequired,
}

export default Section;