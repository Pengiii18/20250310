let question = "這是一個範例問題，請選擇正確答案：";
let options = ["選項A", "選項B", "選項C", "選項D"];
let correctAnswer = 1; // 正確答案的索引
let radio;
let submitButton;
let result = "";
let resultColor = "#000000"; // 預設顏色

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#ffecd1");
  textSize(30);
  textAlign(CENTER, CENTER);

  // 顯示題目
  text(question, width / 2, height / 2 - 100);

  // 建立選項
  radio = createRadio();//建立選擇題
  radio.option(0, options[0]);//建立選項
  radio.option(1, options[1]);
  radio.option(2, options[2]);
  radio.option(3, options[3]);
  radio.style('width', '500px'); // 調整選項寬度
  radio.style('font-size', '30px'); // 調整選項字體大小
  radio.position(width / 2 - 250, height / 2 - 50); // 調整位置使其與題目對齊

  // 建立送出按鈕
  submitButton = createButton('送出');
  submitButton.position(width / 2 - 250, height / 2 + 50); // 調整位置使其與題目對齊
  submitButton.style('font-size', '30px'); // 放大按鈕
  submitButton.mousePressed(checkAnswer);
}

function draw() {//畫圖
  background("#ffecd1");//不斷地畫背景
  fill("#000000"); // 設定題目顏色為黑色
  text(question, width / 2, height / 2 - 100);
  fill(resultColor); // 設定回饋文字顏色
  text(result, width / 2, height / 2 + 150); // 將回覆的位置置中
}

function checkAnswer() {
  let selected = radio.value();
  if (selected == correctAnswer) {
    result = "正確";
    resultColor = "#00FF00"; // 綠色
  } else {
    result = "錯誤";
    resultColor = "#FF0000"; // 紅色
  }
}
