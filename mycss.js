// Event直向導覽列
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-button');
  const sidebar = document.getElementById('sidebar');
  const content = document.getElementById('content');

  toggleButton.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      const isSidebarOpen = sidebar.classList.contains('open');
      content.style.marginLeft = isSidebarOpen ? '250px' : '0';
  });
});

// 先留著，以免未來要加功能
function switchPage() {
  var home = document.getElementById('home');
  var music = document.getElementById('music');
  var tutor= document.getElementById('tutor');
  var community = document.getElementById('community');
  var contact = document.getElementById('contact');
  var services = document.getElementById('services');
  var about = document.getElementById('about');

  // 表示 home 元素當前是可見的
  if (home.style.display === 'block') {

      home.style.display = 'none';
      tutor.style.display = 'block';
  } else {
      home.style.display = 'block';
      tutor.style.display = 'none';
  }
}

function login() {
  // 在這裡可以添加登入驗證邏輯

  // 登入成功後顯示通知並跳轉頁面
  alert("登入成功!");
  window.location.href = "myCss.html";
}

function register() {
  // 處理註冊相關的操作
  alert("跳轉到註冊頁面");
}

function forgotPassword() {
  // 處理忘記密碼相關的操作
  alert("跳轉到忘記密碼頁面");
}

//---------------SIGNIN畫面------
$(document).ready(() => {
  /*------- button with class register -------*/
  let reg_btnstring = $(".signcontainer .register");

  /*------- button with class sign in --------*/
  let sig_btnstring = $(".signcontainer .signin");

  /*------- back button ----------------------*/
  let back_btnstring = $(".signcontainer .back");

  reg_btn.click(function (e) {
    e.preventDefault();
    $(this)
      .siblings(".reg")
      .css({
        transform: "translateY(40%) scale(5)",
        "border-radius": "0",
        width: "100%",
        height: "100%"
      })
      .end();

    reg_btn
      .siblings(".container h3:nth-of-type(1)")
      .css({
        top: "40%",
        "z-index": "8"
      })
      .end()
      .end();
  });

  sig_btn.on("click", function (e) {
    e.preventDefault();
    $(this)
      .siblings(".sig")
      .css({
        transform: "translateY(40%) scale(5)",
        "border-radius": "0",
        width: "100%",
        height: "100%"
      })
      .end();

    sig_btn
      .siblings(".container h3:nth-of-type(2)")
      .css({
        top: "40%",
        "z-index": "8"
      })
      .end()
      .end();
  });
});
function LogInalert(){
  alert('Welcome to the wonderland~~！');
}

/*community*/

document.addEventListener('DOMContentLoaded', function () {
  const postInput = document.getElementById('postInput');
  const imageInput = document.getElementById('imageInput');
  const postsContainer = document.getElementById('posts');

  postInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      const postText = postInput.value.trim();
      const imageDataUrl = imageInput.files.length > 0 ? getImageDataUrl(imageInput.files[0]) : null;

      if (postText !== '' || imageDataUrl !== null) {
        createPost(postText, imageDataUrl);
        postInput.value = '';
        imageInput.value = '';
      }
    }
  });

  function getImageDataUrl(file) {
    const reader = new FileReader();
    return new Promise((resolve) => {
      reader.onloadend = function () {
        resolve(reader.result);
      };
      reader.readAsDataURL(file);
    });
  }

  function createPost(text, imageDataUrl) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('posts');

    if (text !== '') {
      const postContent = document.createElement('p');
      postContent.textContent = text;
      postDiv.appendChild(postContent);
    }

    if (imageDataUrl !== null) {
      const postImage = document.createElement('img');
      postImage.src = imageDataUrl;
      postDiv.appendChild(postImage);
    }

    const postActions = document.createElement('div');
    postActions.classList.add('post-actions');

    const likeBtn = document.createElement('span');
    likeBtn.classList.add('like-btn');
    likeBtn.textContent = '👍 Like';
    likeBtn.addEventListener('click', function () {
      toggleLike(postDiv);
    });
    postActions.appendChild(likeBtn);

    const likeCount = document.createElement('span');
    likeCount.classList.add('like-count');
    likeCount.textContent = '0';
    postActions.appendChild(likeCount);

    postDiv.appendChild(postActions);

    const commentsContainer = document.createElement('div');
    commentsContainer.classList.add('comments');

    const commentInput = document.createElement('input');
    commentInput.classList.add('comment-input');
    commentInput.placeholder = '說點甚麼吧...';

    const commentBtn = document.createElement('button');
    commentBtn.classList.add('comment-btn');
    commentBtn.textContent = '回答';
    commentBtn.addEventListener('click', function () {
      addComment(postDiv, commentInput.value);
      commentInput.value = '';
    });

    commentsContainer.appendChild(commentInput);
    commentsContainer.appendChild(commentBtn);

    postDiv.appendChild(commentsContainer);

    postsContainer.insertBefore(postDiv, postsContainer.firstChild);
  }

  function toggleLike(postDiv) {
    const likeBtn = postDiv.querySelector('.like-btn');
    const likeCount = postDiv.querySelector('.like-count');
    const isLiked = postDiv.classList.toggle('liked');
    const currentCount = parseInt(likeCount.textContent);

    likeCount.textContent = isLiked ? (currentCount + 1).toString() : (currentCount - 1).toString();
  }

  function addComment(postDiv, commentText) {
    const commentsContainer = postDiv.querySelector('.comments');

    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.textContent = commentText;

    commentsContainer.appendChild(commentDiv);
  }
});
/*----------tutor----------*/

function sendMessage(teacherId) {
  const teacherCard = document.getElementById(teacherId);
  const replyTextarea = teacherCard.querySelector('.student-reply textarea');
  const replyHistory = teacherCard.querySelector('.reply-history');

  const replyMessage = replyTextarea.value;
  if (replyMessage.trim() !== '') {
    const newMessage = document.createElement('p');
    newMessage.textContent = `學生回覆: ${replyMessage}`;
    replyHistory.appendChild(newMessage);

    replyTextarea.value = '';
  }
}

function updateTeacher(teacherId) {
  const teacherNameInput = document.getElementById(`input-name${teacherId.slice(-1)}`);
  const teacherIntroInput = document.getElementById(`input-intro${teacherId.slice(-1)}`);
  const teacherName = document.getElementById(`teacher-name${teacherId.slice(-1)}`);
  const teacherIntro = document.getElementById(`teacher-intro${teacherId.slice(-1)}`);

  teacherName.textContent = teacherNameInput.value;
  teacherIntro.textContent = teacherIntroInput.value;

  alert('資訊已更新！');
}

function sendReply(teacherId) {
  sendMessage(teacherId);
}
/*-----contact---*/

window.onclick = changebackground;


function changebackground() {
  // 取得 body 元素
  var body = document.body;

  // 隨機生成新的背景色
  var newColor = getRandomColor();

  // 設定新的背景色
  body.style.backgroundColor = newColor;

  // 設定定時器，在3秒後將背景色還原為原始色
  setTimeout(function() {
      body.style.backgroundColor = '';
  }, 5000);
}

function getRandomColor() {
  // 生成隨機的十六進制顏色碼
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function doSomething(){
  alert('The imformation has been reported~~！');
}

function redirectToMyCss() {
  window.location.href = 'myCss.html';
}

function showDetails(title, details) {
  alert(title + '\n\n' + details);
}
    
  