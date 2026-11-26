// =========================
// よくある質問（アコーディオン）
// =========================
const questions = document.querySelectorAll('.faq-question');

questions.forEach(function (question) {
    question.addEventListener('click', function () {
        const answer = question.nextElementSibling;
        answer.classList.toggle('is-open');

        const icon = question.querySelector('.faq-icon');

        if (answer.classList.contains('is-open')) {
            icon.textContent = '－';
        } else {
            icon.textContent = '＋';
        }
    });
});


// =========================
// ハンバーガーメニュー
// =========================
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

// ボタンを押したら開け閉め
hamburger.addEventListener('click', function () {
    navList.classList.toggle('is-open');
});

// メニューのリンクを押したら閉じる
const navLinks = document.querySelectorAll('.nav-list a');

navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        navList.classList.remove('is-open');
    });
});