/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/publicApi/Car/graphql/types.ts":
/*!************************************************!*\
  !*** ./src/api/publicApi/Car/graphql/types.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__);

const typeDef = apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__.gql`
  type Car {
    id: ID!
    model: Int!
    creationDate: String!
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeDef);

/***/ }),

/***/ "./src/api/publicApi/Car/index.ts":
/*!****************************************!*\
  !*** ./src/api/publicApi/Car/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _graphql_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphql/types */ "./src/api/publicApi/Car/graphql/types.ts");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  typeDefs: _graphql_types__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/api/publicApi/schema.ts":
/*!*************************************!*\
  !*** ./src/api/publicApi/schema.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _graphql_tools_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @graphql-tools/merge */ "@graphql-tools/merge");
/* harmony import */ var _graphql_tools_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_graphql_tools_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tools */ "graphql-tools");
/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tools__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Car__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Car */ "./src/api/publicApi/Car/index.ts");



const typeDefs = (0,_graphql_tools_merge__WEBPACK_IMPORTED_MODULE_0__.mergeTypeDefs)([_Car__WEBPACK_IMPORTED_MODULE_2__["default"].typeDefs]);
const operationDefs = (0,_graphql_tools_merge__WEBPACK_IMPORTED_MODULE_0__.mergeTypeDefs)([]);
const allDefs = (0,_graphql_tools_merge__WEBPACK_IMPORTED_MODULE_0__.mergeTypeDefs)([typeDefs, operationDefs]);
const resolvers = (0,_graphql_tools_merge__WEBPACK_IMPORTED_MODULE_0__.mergeResolvers)([]);
const gatewaySchema = (0,graphql_tools__WEBPACK_IMPORTED_MODULE_1__.makeExecutableSchema)({
  typeDefs: allDefs,
  resolvers: {
    ...resolvers
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gatewaySchema);

/***/ }),

/***/ "@graphql-tools/merge":
/*!***************************************!*\
  !*** external "@graphql-tools/merge" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@graphql-tools/merge");

/***/ }),

/***/ "apollo-server-lambda":
/*!***************************************!*\
  !*** external "apollo-server-lambda" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("apollo-server-lambda");

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("graphql-tools");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./src/api/publicApi/graphql.ts ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
/* harmony import */ var apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schema */ "./src/api/publicApi/schema.ts");


const server = new apollo_server_lambda__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({
  schema: _schema__WEBPACK_IMPORTED_MODULE_1__["default"],
  mockEntireSchema: true,
  formatError: error => error,
  formatResponse: response => {
    if (response.errors) {
      console.log(response);
    }
    return response;
  }
});
exports.graphqlHandler = (event, context, callback) => {
  const graphql = server.createHandler({
    expressGetMiddlewareOptions: {
      cors: {
        origin: '*'
      }
    }
  });
  return graphql(event, context, callback);
};
})();

module.exports = __webpack_exports__;
/******/ })()
;