/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'rethink': ['RethinkSans-Regular'],
        'rethink-medium': ['RethinkSans-Medium'],
        'rethink-semibold': ['RethinkSans-SemiBold'],
        'rethink-bold': ['RethinkSans-Bold'],
        'rethink-extrabold': ['RethinkSans-ExtraBold'],
        'rethink-italic': ['RethinkSans-Italic'],
        'rethink-medium-italic': ['RethinkSans-MediumItalic'],
        'rethink-semibold-italic': ['RethinkSans-SemiBoldItalic'],
        'rethink-bold-italic': ['RethinkSans-BoldItalic'],
        'rethink-extrabold-italic': ['RethinkSans-ExtraBoldItalic'],
        'space-mono': ['SpaceMono-Regular'],
      },
    },
  },
  plugins: [],
}