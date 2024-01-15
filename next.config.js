const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [
      path.join(__dirname, "styles"),
      "https://ashif-edemy-backend.vercel.app/",
    ],
  },
};
