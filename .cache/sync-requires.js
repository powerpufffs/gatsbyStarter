const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ztai/Downloads/Code/boostly-coupon/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/ztai/Downloads/Code/boostly-coupon/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ztai/Downloads/Code/boostly-coupon/src/pages/index.js"))),
  "component---src-pages-redeem-js": hot(preferDefault(require("/Users/ztai/Downloads/Code/boostly-coupon/src/pages/redeem.js")))
}

