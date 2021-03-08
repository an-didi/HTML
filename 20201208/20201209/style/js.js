// 1.读取图片并预览;
const fileImg = document.querySelector("#user-pic");

fileImg.addEventListener("change", showImg, false);
function showImg() {
  console.log(fileImg.files);
  const reader = new FileReader();
  // fileImg.files[0]为第一个图片
  reader.readAsDataURL(fileImg.files[0]);
  reader.onload = () => {
    const img = new Image();
    // reader.result为获取结果
    console.log(reader.result);
    img.src = reader.result;
    img.width = "100";
    // 先清空之前的选择的图片
    document.querySelector(".user-pic").innerHTML = null;
    // 将用户选择的图片显示到指定元素中
    document.querySelector(".user-pic").appendChild(img);
  };
}

// 2. 读取文本并预览
const fileText = document.querySelector("#user-resume");
fileText.addEventListener("change", showText, false);
//读取文本的回调方法
function showText() {
  const reader = new FileReader();
  // 做为文本读取, files[0]表示第一个文件,utf8是默认编码
  reader.readAsText(fileText.files[0], "utf8");
  reader.onload = () =>
    (document.querySelector(".user-resume").innerHTML = reader.result);
}
