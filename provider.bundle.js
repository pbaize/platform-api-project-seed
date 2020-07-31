/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/provider/provider.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/provider/external-window-snapshot.js":
/*!**************************************************!*\
  !*** ./src/provider/external-window-snapshot.js ***!
  \**************************************************/
/*! exports provided: generateExternalWindowSnapshot, restoreExternalWindowPositionAndState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateExternalWindowSnapshot\", function() { return generateExternalWindowSnapshot; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"restoreExternalWindowPositionAndState\", function() { return restoreExternalWindowPositionAndState; });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nfunction getExternalWindowByNameTitle(name, title) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const externalWindows = yield fin.System.getAllExternalWindows();\n        // Using `startsWith` to account for the fact that notepad window titles may or may not include\n        // a file extension, depending on user settings.\n        const externalWin = externalWindows.find((w) => w.name === name && w.title.startsWith(title));\n        if (externalWin) {\n            return yield fin.ExternalWindow.wrap(externalWin);\n        }\n        return void 0;\n    });\n}\nfunction getExternalWindowInfo(name, title) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const exWin = yield getExternalWindowByNameTitle(name, title);\n        if (exWin) {\n            return yield exWin.getInfo();\n        }\n        return void 0;\n    });\n}\nfunction generateExternalWindowSnapshot(externalWins) {\n    return __awaiter(this, void 0, void 0, function* () {\n        return yield Promise.all(externalWins.map((i) => __awaiter(this, void 0, void 0, function* () { return yield getExternalWindowInfo(i.name, i.title); })));\n    });\n}\nfunction restoreExternalWindowPositionAndState(info) {\n    return __awaiter(this, void 0, void 0, function* () {\n        const exWin = yield getExternalWindowByNameTitle(info.name, info.title);\n        if (exWin) {\n            const bounds = Object.assign({ top: info.bounds.y, left: info.bounds.x }, info.bounds);\n            if (info.maximized) {\n                yield exWin.maximize();\n            }\n            if (info.minimized) {\n                yield exWin.minimize();\n            }\n            if (!info.maximized && !info.minimized) {\n                yield exWin.restore();\n            }\n            yield exWin.setBounds(bounds);\n        }\n    });\n}\n\n\n\n//# sourceURL=webpack:///./src/provider/external-window-snapshot.js?");

/***/ }),

/***/ "./src/provider/platform-provider.js":
/*!*******************************************!*\
  !*** ./src/provider/platform-provider.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _external_window_snapshot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./external-window-snapshot.js */ \"./src/provider/external-window-snapshot.js\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n// We have customized our platform provider to keep track of a specific notepad window.\n// Look for the \"my_platform_notes.txt\" file and launch it in notepad or add another external window to this array\nconst externalWindowsToTrack = [\n    {\n        name: 'Notepad',\n        // Note that this is only the beginning of the title.\n        // In `getExternalWindowByNameTitle`, we will just check that the title starts with this string.\n        // This is in order to work with both 'my_platform_notes' and 'my_platform_notes.txt', depending on\n        // the user's settings for viewing file extensions.\n        title: 'my_platform_notes'\n    }\n];\nfin.Platform.init({\n    overrideCallback: (Provider) => __awaiter(void 0, void 0, void 0, function* () {\n        class Override extends Provider {\n            getSnapshot() {\n                const _super = Object.create(null, {\n                    getSnapshot: { get: () => super.getSnapshot }\n                });\n                return __awaiter(this, void 0, void 0, function* () {\n                    const snapshot = yield _super.getSnapshot.call(this);\n                    // we add an externalWindows section to our snapshot\n                    const externalWindows = yield Object(_external_window_snapshot_js__WEBPACK_IMPORTED_MODULE_0__[\"generateExternalWindowSnapshot\"])(externalWindowsToTrack);\n                    return Object.assign(Object.assign({}, snapshot), { externalWindows });\n                });\n            }\n            applySnapshot({ snapshot, options }) {\n                const _super = Object.create(null, {\n                    applySnapshot: { get: () => super.applySnapshot }\n                });\n                return __awaiter(this, void 0, void 0, function* () {\n                    const originalPromise = _super.applySnapshot.call(this, { snapshot, options });\n                    // if we have a section with external windows we will use it.\n                    if (snapshot.externalWindows) {\n                        yield Promise.all(snapshot.externalWindows.map((i) => __awaiter(this, void 0, void 0, function* () { return yield Object(_external_window_snapshot_js__WEBPACK_IMPORTED_MODULE_0__[\"restoreExternalWindowPositionAndState\"])(i); })));\n                    }\n                    return originalPromise;\n                });\n            }\n        }\n        return new Override();\n    })\n});\n\n\n//# sourceURL=webpack:///./src/provider/platform-provider.js?");

/***/ }),

/***/ "./src/provider/provider.ts":
/*!**********************************!*\
  !*** ./src/provider/provider.ts ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _platform_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform-provider */ \"./src/provider/platform-provider.js\");\n\n\n\n//# sourceURL=webpack:///./src/provider/provider.ts?");

/***/ })

/******/ });