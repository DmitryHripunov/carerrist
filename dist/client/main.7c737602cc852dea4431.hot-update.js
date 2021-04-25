webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
__webpack_require__(/*! ./css/main.global.css */ "./src/css/main.global.css");
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
var root_1 = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");
var reducers_1 = __importDefault(__webpack_require__(/*! ./reducers */ "./src/reducers/index.js"));
var container_1 = __importDefault(__webpack_require__(/*! ./containers/container */ "./src/containers/container.js"));
var initialStore = [];
var store = redux_1.createStore(reducers_1.default, initialStore, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));
var timeout = function () { return function (dispatch, getState) {
    dispatch({ type: 'START' });
    setTimeout(function () {
        dispatch({ type: 'FINISH' });
    }, 1500);
}; };
function AppComponent() {
    react_1.useEffect(function () {
        store.dispatch(timeout());
    });
    return (react_1.default.createElement(react_redux_1.Provider, { store: store },
        react_1.default.createElement(container_1.default, null),
        ",")
    // document.getElementById('react_root')
    );
}
exports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });


/***/ }),

/***/ "./src/containers/container.js":
/*!*************************************!*\
  !*** ./src/containers/container.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var CommentForm_1 = __importDefault(__webpack_require__(/*! ../components/CommentForm */ "./src/components/CommentForm.js"));
var CommentList_1 = __importDefault(__webpack_require__(/*! ../components/CommentList */ "./src/components/CommentList.js"));
var actions_1 = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
var Container = function (_a) {
    var comments = _a.comments, addComment = _a.addComment;
    // console.log(getComments)
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(CommentForm_1.default, { addComment: addComment }),
        react_1.default.createElement(CommentList_1.default, { comments: comments })));
};
var mapStateToProps = function (state) {
    return {
        comments: state,
    };
};
var mapDispatchToProps = function (dispatch) {
    return {
        addComment: function (name, text) { return dispatch(actions_1.addComment(name, text)); },
        // getComments: (state) => dispatch(getComments(state)),
    };
};
Container = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Container);
exports.default = Container;


/***/ })

})
//# sourceMappingURL=main.7c737602cc852dea4431.hot-update.js.map