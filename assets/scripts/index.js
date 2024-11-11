const btnGithub = document.querySelector("#github-button");
const btnLinkedin = document.querySelector("#linkedin-button");
const btnTwitter = document.querySelector("#twitter-button");
const btnEmail = document.querySelector("#email-button");
const btnWebsite = document.querySelector("#web-button");

btnGithub.addEventListener('click', () => {
    window.open('https://github.com/login', '_blank');
});

btnLinkedin.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/selvendran-nks?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank');
});

btnTwitter.addEventListener('click', () => {
    window.open('https://twitter.com/', '_blank');
});


btnEmail.addEventListener('click', () => {
    window.open('mailto:labs-l@pitang.com');
});

btnWebsite.addEventListener('click', () => {
    window.open('https://infrazanalytics.com/', '_blank');
});