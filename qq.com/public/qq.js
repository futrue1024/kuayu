// const ajax = () => {
//   return new Promise((resolve, reject) => {
const request = new XMLHttpRequest();
request.open("get", "/friend.json");
request.onreadystatechange = () => {
  if (request.status === 200 && request.readyState === 4) {
    // (resolve) => {
    console.log(request.response);
    // };
  } else if (request.status >= 404) {
    console.log("请求失败");
  }
};
request.send();
//   });
// };
