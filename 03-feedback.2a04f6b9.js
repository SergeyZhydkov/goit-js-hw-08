var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,r=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,a=f||u||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return a.Date.now()};function p(t,e,n){var o,i,r,f,u,a,c=0,p=!1,y=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,r=i;return o=i=void 0,c=e,f=t.apply(r,n)}function j(t){return c=t,u=setTimeout(h,e),p?g(t):f}function O(t){var n=t-a;return void 0===a||n>=e||n<0||y&&t-c>=r}function h(){var t=d();if(O(t))return T(t);u=setTimeout(h,function(t){var n=e-(t-a);return y?s(n,r-(t-c)):n}(t))}function T(t){return u=void 0,m&&o?g(t):(o=i=void 0,f)}function w(){var t=d(),n=O(t);if(o=arguments,i=this,a=t,n){if(void 0===u)return j(a);if(y)return u=setTimeout(h,e),g(a)}return void 0===u&&(u=setTimeout(h,e)),f}return e=b(e)||0,v(n)&&(p=!!n.leading,r=(y="maxWait"in n)?l(b(n.maxWait)||0,e):r,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=a=i=u=void 0},w.flush=function(){return void 0===u?f:T(d())},w}function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==c.call(t)}(t))return NaN;if(v(t)){var f="function"==typeof t.valueOf?t.valueOf():t;t=v(f)?f+"":f}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(e,"");var u=o.test(t);return u||i.test(t)?r(t.slice(2),u?2:8):n.test(t)?NaN:+t}document.querySelector(".feedback-form").addEventListener("input",(function(t){t.preventDefault()}));let y=input.email;localStorage.setItem("feedback-form-state",JSON.stringify(y));let m=input.message;localStorage.setItem("feedback-form-state",JSON.stringify(m)),console.log(y);
//# sourceMappingURL=03-feedback.2a04f6b9.js.map
