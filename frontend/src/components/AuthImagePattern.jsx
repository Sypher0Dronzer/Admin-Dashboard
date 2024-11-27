import PropTypes from "prop-types";

const AuthImagePattern = ({ title, subtitle }) => {
    return (
      <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
        <div className="max-w-md lg:w-[20vw]  text-center">
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-2xl bg-primary/10 ${
                  i % 2 === 0 ? "animate-pulse" : ""
                }`}
              />
            ))}
          </div>
          <h2 className="text-2xl font-medium mb-4">{title}</h2>
          <p className="text-base-content/80">{subtitle}</p>
        </div>
      </div>
    );
  };
  
  AuthImagePattern.propTypes = {
    title: PropTypes.string.isRequired, // Validates that `title` is a required string
    subtitle: PropTypes.string.isRequired, // Validates that `subtitle` is a required string
  };

  export default AuthImagePattern;