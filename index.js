const Module = require('module').Module;
const wrap = Module.wrap;

Module.wrap = function() {
  let wrapped = wrap.apply(Module, arguments);
  if (/^[ \t]*['"]use ext$1;/m.test(wrapped)) {
    wrapped = wrapped.replace(/^\(function/, '(async function');
  }
  return wrapped;
}
