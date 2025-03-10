let questions;
let currentQuestionIndex = 0;
let radio;
let input;
let submitButton;
let result = "";
let resultColor = "#000000"; // 預設顏色
let correctCount = 0;
let incorrectCount = 0;

function preload() {
  // 手動設置題目和選項
  questions = [
    { Question: "1+1=?", "Option A": "1", "Option B": "2", "Option C": "3", "Option D": "4", Answer: "B" },
    { Question: "5-3=?", "Option A": "1", "Option B": "2", "Option C": "3", "Option D": "4", Answer: "B" },
    { Question: "3*2=?", "Option A": "5", "Option B": "6", "Option C": "7", "Option D": "8", Answer: "B" },
    { Question: "9/3=?", "Option A": "2", "Option B": "3", "Option C": "4", "Option D": "5", Answer: "B" },
    { Question: "填空題：7+2=", "Option A": "", "Option B": "", "Option C": "", "Option D": "", Answer: "9" }
  ];
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#ffecd1");
  textSize(30);
  textAlign(CENTER, CENTER);

  // 顯示第一題
  showQuestion();
}

function draw() {
  background("#ffecd1");
  fill("#000000"); // 設定題目顏色為黑色

  // 顯示姓名和學號
  textSize(20);
  textAlign(LEFT, TOP);
  text("姓名: 彭得邦", 10, 10);
  text("學號: 410730948", 10, 40);

  // 顯示答對題數和答錯題數
  text(`答對題數: ${correctCount}`, 10, 70);
  text(`答錯題數: ${incorrectCount}`, 10, 100);

  textSize(30);
  textAlign(CENTER, CENTER);
  if (currentQuestionIndex < questions.length) {
    text(questions[currentQuestionIndex].Question, width / 2, height / 2 - 100);
  } else {
    text("測驗結束", width / 2, height / 2 - 100);
    text(`答對題數: ${correctCount}`, width / 2, height / 2);
    text(`答錯題數: ${incorrectCount}`, width / 2, height / 2 + 50);
  }
  fill(resultColor); // 設定回饋文字顏色
  text(result, width / 2, height / 2 + 150); // 將回覆的位置置中
}

function showQuestion() {
  if (currentQuestionIndex < questions.length) {
    let question = questions[currentQuestionIndex].Question;
    let options = [
      questions[currentQuestionIndex]["Option A"],
      questions[currentQuestionIndex]["Option B"],
      questions[currentQuestionIndex]["Option C"],
      questions[currentQuestionIndex]["Option D"]
    ];
    let correctAnswer = questions[currentQuestionIndex].Answer;

    // 清除之前的選項和按鈕
    if (radio) {
      radio.remove();
    }
    if (input) {
      input.remove();
    }
    if (submitButton) {
      submitButton.remove();
    }

    // 清除上一個題目
    background("#ffecd1");

    // 顯示題目
    text(question, width / 2, height / 2 - 100);

    if (options[0] === "") {
      // 填空題
      input = createInput();
      input.style('font-size', '30px');
      input.position(width / 2 - input.width / 2, height / 2 - 50); // 將填空題方框置中
    } else {
      // 選擇題
      radio = createRadio();
      radio.option('A', options[0]);
      radio.option('B', options[1]);
      radio.option('C', options[2]);
      radio.option('D', options[3]);
      radio.style('width', '500px'); // 調整選項寬度
      radio.style('font-size', '30px'); // 調整選項字體大小
      //設定選項文字顏色
      radio.style("background-color", "#ffecd1");
      radio.position(width / 2 - 250, height / 2 - 50); // 調整位置使其與題目對齊
    }

    // 建立送出按鈕
    submitButton = createButton('送出');
    submitButton.position(width / 2 - 250, height / 2 + 50); // 調整位置使其與題目對齊
    submitButton.style('font-size', '30px'); // 放大按鈕
    submitButton.mousePressed(() => checkAnswer(correctAnswer));
  } else {
    // 測驗結束，清除選項和填空
    if (radio) {
      radio.remove();
    }
    if (input) {
      input.remove();
    }
    if (submitButton) {
      submitButton.remove();
    }
  }
}

function checkAnswer(correctAnswer) {
  let selected;
  if (radio) {
    selected = radio.value();
  } else if (input) {
    selected = input.value();
  }

  if (selected == correctAnswer) {
    result = "正確";
    resultColor = "#00FF00"; // 綠色
    correctCount++;
  } else {
    result = "錯誤";
    resultColor = "#FF0000"; // 紅色
    incorrectCount++;
  }

  // 顯示回饋文字一段時間後清除
  setTimeout(() => {
    result = ""; // 清除回饋文字
    currentQuestionIndex++;
    showQuestion();
  }, 2000); // 2秒後清除
}
