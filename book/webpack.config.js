const path = require('path');

module.exports = {
  // Your webpack configuration options
  resolve: {
    alias: {
      '@fortawesome/react-fontawesome': path.resolve(__dirname, 'C:/book_relm/book/node_modules/@fortawesome/react-fontawesome'),
      '@fortawesome/free-solid-svg-icons': path.resolve(__dirname, 'C:/book_relm/book/node_modules/@fortawesome/free-solid-svg-icons'),
      'firebase/app': path.resolve(__dirname, 'C:/book_relm/book/node_modules/@firebase/app'),
      'firebase/auth': path.resolve(__dirname, 'C:/book_relm/book/node_modules/@firebase/auth'),
    },
  },
};

