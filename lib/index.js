"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _useNes2 = require("@brightleaf/react-hooks/lib/use-nes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
  var next = _ref.next,
      previous = _ref.previous,
      goto = _ref.goto,
      url = _ref.url,
      path = _ref.path;

  var _useNes = (0, _useNes2.useNes)(url, false),
      message = _useNes.message,
      error = _useNes.error,
      connecting = _useNes.connecting,
      connected = _useNes.connected,
      client = _useNes.client;

  var handler = function handler(update, flags) {
    if (update && update.action === 'next') {
      next();
    }

    if (update && update.action === 'previous') {
      previous();
    }

    if (update && update.action === 'goto') {
      goto(update.slide);
    }
  };

  client.subscribe(path, handler);
  return null;
};

exports.default = _default;