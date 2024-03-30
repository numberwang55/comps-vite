import PropTypes from "prop-types";

export default function Button({
  children,
  outline,
  rounded,
  primary,
  secondary,
  success,
  warning,
  danger,
}) {
  return <button>{children}</button>;
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count = Number(!!primary)
      + Number(!!secondary)
      + Number(!!success)
      + Number(!!warning)
      + Number(!!danger)
    
      if(count > 1) {
        return new Error("Only one of primary, secondary, success, warning or danger allowed")
      }
  },
};
