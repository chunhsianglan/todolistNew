// TodoList: 可新增和刪除待辦事項。
// 2. TodoList: 待辦事項會有狀態（完成與否），可透過 checkbox 來切換。
// 3. TodoList: 待辦清單列表會有『全部』、『完成』、『未完成』Tab 來做篩選切換。
// 4. TodoList: 可以清除全部已完成功能
const addText = document.querySelector(".addText");
const addBtn = document.querySelector(".addBtn");
const list_bar = document.querySelector(".list_bar");
const check_btn = document.querySelector(".check_btn");
const delete_all_btn = document.querySelector(".delete_all_btn");

var data = [
  {
    content: "Clean the bathroom",
  },
  {
    content: "Paint the wall",
  },
];

 function renderData() {
  var str = "";
  data.forEach(function (item) {
    str += `<li class="list">
    <input type="checkbox" class="check_btn" /><span
      >${item.content}</span
    ><input type="button" class="delete_list" value="Delete" /></li>`
  })
  
  list_bar.innerHTML = str;
}

addBtn.addEventListener("click", function (e) {
  if (addText.value == "") {
    alert("請填寫資訊");
    return
  }
  var obj = {};
  obj.content = addText.value;
  data.push(obj);
  renderData();
  addText.value = "";
  
})


data.forEach(function (item, index) {
  var str = "";
  str += `<li class="list">
    <input type="checkbox" class="check_btn" /><span
      >${item.content}</span
    ><input type="button" class="delete_list" data-num=${index} value="Delete" />`;
});

list_bar.addEventListener("click", function (e) {
  if (e.target.getAttribute("class") == "delete_list") {
    var num = e.target.getAttribute("data-num");
    data.splice(num,1);
    renderData();
  }
});

// //checkbox打勾＆點到delete all btn的話，刪除list

// delete_all_btn.addEventListener("click", function (e) {
//   if (
//     e.target.value == "on" &&
//     e.target.getAttribute("class") == "delete_all_btn"
//   ) {
//     list_bar.innerHTML = "";
//   }
// });
