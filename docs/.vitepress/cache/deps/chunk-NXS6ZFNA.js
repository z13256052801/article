// node_modules/ranui/dist/index-c61cbf56.js
var falseList = [false, "false", null, void 0];
var isDisabled = (element) => {
  const status = element.hasAttribute("disabled");
  const value = element.getAttribute("disabled");
  if (status && !falseList.includes(value))
    return true;
  return false;
};
var setElementClass = (element, addClass) => {
  const classList = element.classList;
  if (!classList.contains(addClass)) {
    classList.add(addClass);
  }
};
var deleteElementChildClass = (parent, deleteClass) => {
  const pre = parent.querySelectorAll(`.${deleteClass}`);
  if (pre.length > 0) {
    pre.forEach((item) => item.classList.remove(deleteClass));
  }
};
var loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = function() {
      resolve({ success: true });
    };
    script.onerror = function(error) {
      reject({ success: false, error });
    };
    document.body.append(script);
  });
};
var requestFile = (url, options = {}) => {
  const {
    onProgress = () => {
    },
    headers = {},
    responseType = "blob",
    method = "GET",
    withCredentials = false
  } = options;
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.responseType = responseType;
    xhr.onload = () => {
      const blob = xhr.response;
      const file = new File([blob], blob.name, { type: blob.type });
      resolve(file);
    };
    xhr.onprogress = (event) => {
      onProgress && onProgress(event);
    };
    xhr.onerror = (e) => {
      reject(e);
    };
    xhr.withCredentials = withCredentials;
    if (headers) {
      Object.keys(headers).forEach(function(key) {
        xhr.setRequestHeader(key, headers[key]);
      });
    }
    xhr.send();
  });
};

export {
  falseList,
  isDisabled,
  setElementClass,
  deleteElementChildClass,
  loadScript,
  requestFile
};
//# sourceMappingURL=chunk-NXS6ZFNA.js.map
