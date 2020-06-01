// const ajax = () => {
//   return new Promise((resolve, reject) => {
// const request = new XMLHttpRequest();
// request.open("get", "http://qq.com:8888/friend.json");
// request.onreadystatechange = () => {
//   if (request.status === 200 && request.readyState === 4) {
//     // (resolve) => {
//     console.log(request.response);
//     // };
//   } else if (request.status >= 404) {
//     console.log("请求失败");
//   }
// };
// request.send();
// //   });
// // };

function jsonp(url) {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    console.log(random);
    window[random] = (data) => {
      resolve(data);
    };
    const script = document.createElement("script");
    script.src = `${url}?callback=${random}`;
    script.onload = () => {
      script.remove();
    };
    script.onerror = () => {
      reject();
    };
    document.body.appendChild(script);
  });
}

jsonp("http://qq.com:8888/friend.js").then(
  (data) => {
    console.log(data);
  },
  () => {
    console.log("失败了");
  }
);
