// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/gallery-items.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ulGallery = void 0;
var ulGallery = [{
  preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
  description: 'Hokkaido Flower'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
  description: 'Container Haulage Freight'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
  description: 'Aerial Beach View'
}, {
  preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
  description: 'Flower Blooms'
}, {
  preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
  description: 'Alpine Mountains'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
  description: 'Mountain Lake Sailing'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
  description: 'Alpine Spring Meadows'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
  description: 'Nature Landscape'
}, {
  preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
  original: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
  description: 'Lighthouse Coast Sea'
}];
exports.ulGallery = ulGallery;
},{}],"js/make-gallery.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGallery = void 0;

var _index = require("./index");

//makeGallery
var makeGallery = function makeGallery(array) {
  var result = array.map(function (_ref) {
    var preview = _ref.preview,
        original = _ref.original,
        description = _ref.description;
    return "<li class=\"gallery__item\">\n  <a class=\"gallery__link\"\n    href=".concat(original, ">\n    <img class=\"gallery__image\"\n      src=").concat(preview, "\n      data-source=").concat(original, "\n      alt='").concat(description, "'/>\n  </a>\n</li>");
  });
  _index.refs.listGalleryEl.innerHTML = result.join('');
};

exports.makeGallery = makeGallery;
},{"./index":"js/index.js"}],"js/function-modal-gallery.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openGallery = void 0;

var _galleryItems = require("./gallery-items");

var _index = require("./index");

var openGallery = function openGallery(event) {
  _index.refs.listGalleryEl.removeEventListener('click', openGallery);

  _index.refs.lightboxEl.addEventListener('click', closeModal);

  window.addEventListener('keydown', closeModal);

  _index.refs.lightboxButtonEl.addEventListener('click', closeModal);

  window.addEventListener('keyup', flickThrough);
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {}

  _index.refs.lightboxEl.classList.add('is-open');

  addAttributeOnLightboxImage(event);
};

exports.openGallery = openGallery;

function addAttributeOnLightboxImage(event) {
  _index.refs.lightboxImageEl.src = event.target.dataset.source;
  _index.refs.lightboxImageEl.alt = event.target.alt;
}

; //closing modal

function closeModal(event) {
  if (event.target.nodeName === 'BUTTON' || event.code === 'Escape' || event.target === _index.refs.lightboxOverlayEl) {
    _index.refs.listGalleryEl.addEventListener('click', openGallery);

    _index.refs.lightboxEl.removeEventListener('click', closeModal);

    window.removeEventListener('keydown', closeModal);

    _index.refs.lightboxButtonEl.removeEventListener('click', closeModal);

    _index.refs.lightboxEl.classList.remove('is-open');

    _index.refs.lightboxImageEl.removeAttribute('src');

    _index.refs.lightboxImageEl.removeAttribute('alt');

    window.removeEventListener('keyup', flickThrough);
  }

  ;
}

; //right and left

var indexCurrentPhoto;

function flickThrough(event) {
  findIndex();

  if (event.code === 'ArrowRight') {
    if (indexCurrentPhoto === _galleryItems.ulGallery.length - 1) {
      indexCurrentPhoto = -1;
    }

    ;
    _index.refs.lightboxImageEl.src = _galleryItems.ulGallery[indexCurrentPhoto + 1].original;
    _index.refs.lightboxImageEl.alt = _galleryItems.ulGallery[indexCurrentPhoto + 1].description;
    return _index.refs.lightboxImageEl;
  }

  ;

  if (event.code === 'ArrowLeft') {
    if (indexCurrentPhoto === 0) {
      indexCurrentPhoto = _galleryItems.ulGallery.length;
    }

    ;
    _index.refs.lightboxImageEl.src = _galleryItems.ulGallery[indexCurrentPhoto - 1].original;
    _index.refs.lightboxImageEl.alt = _galleryItems.ulGallery[indexCurrentPhoto - 1].description;
    return _index.refs.lightboxImageEl;
  }

  ;
}

;

function findIndex() {
  _galleryItems.ulGallery.forEach(function (el, i) {
    if (el.description === _index.refs.lightboxImageEl.getAttribute('alt')) {
      return indexCurrentPhoto = i;
    }
  });
}

;
},{"./gallery-items":"js/gallery-items.js","./index":"js/index.js"}],"js/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refs = void 0;

var _galleryItems = require("./gallery-items");

var _makeGallery = require("./make-gallery");

var _functionModalGallery = require("./function-modal-gallery");

var refs = {
  listGalleryEl: document.querySelector('.js-gallery'),
  lightboxButtonEl: document.querySelector('button[data-action="close-lightbox"]'),
  lightboxEl: document.querySelector('.js-lightbox'),
  lightboxImageEl: document.querySelector('.lightbox__image'),
  lightboxOverlayEl: document.querySelector('.lightbox__overlay'),
  arrImgPreviewEl: document.querySelectorAll('.gallery__image')
};
exports.refs = refs;
(0, _makeGallery.makeGallery)(_galleryItems.ulGallery);
refs.listGalleryEl.addEventListener('click', _functionModalGallery.openGallery); //lazy
// if ('loading' in HTMLImageElement.prototype) {
//     refs.arrImgPreviewEl.forEach(img => {
//         img.setAttribute('data-src', img.src);
//         img.setAttribute('loading', 'lazy');
//     });
// } else {
//     const scriptEl = document.createElement('script');
//     scriptEl.src = "./js/lazysizes.min.js";
//     scriptEl.async = "";
//     const bodyEl = document.querySelector('body');
//     bodyEl.append(scriptEl);
//     img.classList.add('lazyload');
// };
},{"./gallery-items":"js/gallery-items.js","./make-gallery":"js/make-gallery.js","./function-modal-gallery":"js/function-modal-gallery.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65090" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map