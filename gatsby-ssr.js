/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react")

// Inject the Tawk.to live-chat widget on every page.
exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    React.createElement("script", {
      key: "tawk-to",
      dangerouslySetInnerHTML: {
        __html: `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/6a1fdfdc406ae81c377bfe52/1jq684tea';
          s1.charset='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();
        `,
      },
    }),
  ])
}
