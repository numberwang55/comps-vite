import className from "classnames";

export default function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) {
  const classes = className("px-3 py-1.5 border", {
    "border-blue-400 bg-blue-400 text-white": primary,
    "border-gray-800 bg-gray-800 text-white": secondary,
    "border-green-400 bg-green-400 text-white": success,
    "border-yellow-300 bg-yellow-300 text-white": warning,
    "border-red-400 bg-red-500 text-white": danger,
    "rounded-full": rounded,
    "bg-blue-50": outline,
    "text-blue-600": outline && primary,
    "text-gray-800": outline && secondary,
    "text-green-400": outline && success,
    "text-yellow-500": outline && warning,
    "text-red-500": outline && danger
  });
  console.log(classes);
  return <button className={classes}>{children}</button>;
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger, outline, rounded }) => {
    console.log('====================================');
    console.log(primary, secondary, success, warning, danger, outline, rounded);
    console.log('====================================');
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning or danger allowed"
      );
    }
  },
};
