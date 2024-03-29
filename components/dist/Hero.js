"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_simple_typewriter_1 = require("react-simple-typewriter");
function Hero(_a) {
    var _b = react_simple_typewriter_1.useTypewriter({
        words: [
            "an Architect",
            "a Software Engineer",
            "a Front-end Developer",
            "a Full-stack Developer",
        ],
        loop: true,
        delaySpeed: 2000
    }), text = _b[0], count = _b[1];
    return (react_1["default"].createElement("div", { className: "h-screen flex flex-col space-y-8 items-center justify-center text-center" },
        react_1["default"].createElement("h1", null),
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("h1", { className: "text-4xl font-bold tracking-tight sm:text-center sm:text-6xl" }, "I am Michael Tong"),
            react_1["default"].createElement("p", { className: "mt-6 text-lg leading-8 text-gray-600 sm:text-center" },
                "I am ",
                text,
                react_1["default"].createElement(react_simple_typewriter_1.Cursor, { cursorColor: "#62973D" })),
            react_1["default"].createElement("div", { className: "mt-8 flex gap-x-4 sm:justify-center" },
                react_1["default"].createElement("a", { href: "#", className: "inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700" },
                    "Get started",
                    " ",
                    react_1["default"].createElement("span", { className: "text-indigo-200", "aria-hidden": "true" }, "\u2192")),
                react_1["default"].createElement("a", { href: "#", className: "inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20" },
                    "Live demo",
                    " ",
                    react_1["default"].createElement("span", { className: "text-gray-400", "aria-hidden": "true" }, "\u2192")))),
        react_1["default"].createElement("div", { className: "absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" },
            react_1["default"].createElement("svg", { className: "relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]", viewBox: "0 0 1155 678", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1["default"].createElement("path", { fill: "url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)", fillOpacity: ".3", d: "M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" }),
                react_1["default"].createElement("defs", null,
                    react_1["default"].createElement("linearGradient", { id: "ecb5b0c9-546c-4772-8c71-4d3f06d544bc", x1: "1155.49", x2: "-78.208", y1: ".177", y2: "474.645", gradientUnits: "userSpaceOnUse" },
                        react_1["default"].createElement("stop", { stopColor: "#9089FC" }),
                        react_1["default"].createElement("stop", { offset: 1, stopColor: "#FF80B5" })))))));
}
exports["default"] = Hero;
