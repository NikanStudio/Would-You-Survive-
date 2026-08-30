const scenarios = {

en: [

    {
        title: "Lost in the Forest",
        text:
            "You wake up alone in a large forest. It is getting dark and you hear something moving nearby. What do you do?",

        choices: [
            {
                text: "Stay calm and look for a safe place",
                score: 2
            },

            {
                text: "Run as fast as possible",
                score: -1
            },

            {
                text: "Shout loudly for help",
                score: 0
            },

            {
                text: "Climb the nearest tree",
                score: 1
            }
        ]
    },


    {
        title: "The Strange Sound",
        text:
            "During the night, you hear a strange sound outside your shelter. You cannot see what made it.",

        choices: [
            {
                text: "Stay quiet and wait",
                score: 2
            },

            {
                text: "Go outside immediately",
                score: -2
            },

            {
                text: "Throw a rock toward the sound",
                score: 0
            },

            {
                text: "Start running away",
                score: -1
            }
        ]
    },


    {
        title: "No Water",
        text:
            "The next day, you find a river. The water looks clean, but you are not completely sure.",

        choices: [
            {
                text: "Find a way to purify the water first",
                score: 2
            },

            {
                text: "Drink immediately",
                score: -2
            },

            {
                text: "Follow the river downstream",
                score: 1
            },

            {
                text: "Ignore the river and keep walking",
                score: -1
            }
        ]
    },


    {
        title: "The Abandoned Cabin",
        text:
            "You discover an old cabin in the forest. It looks abandoned, but you notice fresh footprints nearby.",

        choices: [
            {
                text: "Carefully inspect the cabin",
                score: 2
            },

            {
                text: "Walk inside without checking",
                score: -2
            },

            {
                text: "Wait and observe from a distance",
                score: 1
            },

            {
                text: "Immediately run away",
                score: 0
            }
        ]
    },


    {
        title: "A Difficult Choice",
        text:
            "You finally see a road in the distance, but the fastest route crosses a dangerous-looking river.",

        choices: [
            {
                text: "Look for a safer crossing",
                score: 2
            },

            {
                text: "Swim across immediately",
                score: -2
            },

            {
                text: "Walk along the river",
                score: 1
            },

            {
                text: "Give up and return to the forest",
                score: -1
            }
        ]
    }

],



fa: [

    {
        title: "گم‌شده در جنگل",
        text:
            "در یک جنگل بزرگ و تنها از خواب بیدار می‌شوی. هوا در حال تاریک شدن است و صدایی از نزدیکی می‌شنوی. چه کار می‌کنی؟",

        choices: [
            {
                text: "آرام می‌مانم و دنبال جای امن می‌گردم",
                score: 2
            },

            {
                text: "با تمام سرعت فرار می‌کنم",
                score: -1
            },

            {
                text: "با صدای بلند کمک می‌خواهم",
                score: 0
            },

            {
                text: "از نزدیک‌ترین درخت بالا می‌روم",
                score: 1
            }
        ]
    },


    {
        title: "صدای عجیب",
        text:
            "شب صدای عجیبی از بیرون پناهگاهت می‌شنوی، اما نمی‌توانی ببینی چه چیزی این صدا را ایجاد کرده است.",

        choices: [
            {
                text: "ساکت می‌مانم و صبر می‌کنم",
                score: 2
            },

            {
                text: "فوراً از پناهگاه بیرون می‌روم",
                score: -2
            },

            {
                text: "یک سنگ به سمت صدا پرتاب می‌کنم",
                score: 0
            },

            {
                text: "شروع به فرار می‌کنم",
                score: -1
            }
        ]
    },


    {
        title: "بدون آب",
        text:
            "روز بعد یک رودخانه پیدا می‌کنی. آب تمیز به نظر می‌رسد، اما کاملاً مطمئن نیستی.",

        choices: [
            {
                text: "اول راهی برای تصفیه آب پیدا می‌کنم",
                score: 2
            },

            {
                text: "فوراً آب می‌نوشم",
                score: -2
            },

            {
                text: "در امتداد رودخانه حرکت می‌کنم",
                score: 1
            },

            {
                text: "رودخانه را نادیده می‌گیرم",
                score: -1
            }
        ]
    },


    {
        title: "کلبه متروکه",
        text:
            "یک کلبه قدیمی در جنگل پیدا می‌کنی. کلبه متروکه به نظر می‌رسد، اما ردپاهای تازه‌ای در اطراف آن می‌بینی.",

        choices: [
            {
                text: "با احتیاط کلبه را بررسی می‌کنم",
                score: 2
            },

            {
                text: "بدون بررسی وارد کلبه می‌شوم",
                score: -2
            },

            {
                text: "از فاصله دور صبر و مشاهده می‌کنم",
                score: 1
            },

            {
                text: "فوراً فرار می‌کنم",
                score: 0
            }
        ]
    },


    {
        title: "یک انتخاب سخت",
        text:
            "بالاخره جاده‌ای را در دوردست می‌بینی، اما سریع‌ترین مسیر از یک رودخانه خطرناک عبور می‌کند.",

        choices: [
            {
                text: "به دنبال مسیر امن‌تری می‌گردم",
                score: 2
            },

            {
                text: "فوراً وارد آب می‌شوم",
                score: -2
            },

            {
                text: "در امتداد رودخانه حرکت می‌کنم",
                score: 1
            },

            {
                text: "برمی‌گردم و وارد جنگل می‌شوم",
                score: -1
            }
        ]
    }

]

};

let currentLanguage = "en";
let currentScenario = 0;
let survivalScore = 0;

const smallTitle =
document.getElementById("small-title");

const mainTitle =
document.getElementById("main-title");

const description =
document.getElementById("description");

const startButton =
document.getElementById("start-btn");

const game =
document.getElementById("game");

const progress =
document.getElementById("progress");

const scenarioTitle =
document.getElementById("scenario-title");

const scenarioText =
document.getElementById("scenario-text");

const choices =
document.getElementById("choices");

const footerText =
document.getElementById("footer-text");

function setLanguage(language) {

currentLanguage = language;

document
    .querySelectorAll(".lang-btn")
    .forEach(button => {

        button.classList.remove("active");

    });


if (language === "en") {

    document
        .querySelectorAll(".lang-btn")[0]
        .classList.add("active");


    document.documentElement.lang = "en";

    document.body.classList.remove("fa");


    smallTitle.textContent =
        "THE ULTIMATE SURVIVAL TEST";


    mainTitle.textContent =
        "WOULD YOU SURVIVE?";


    description.textContent =
        "You will face dangerous situations. Every choice changes your story.";


    startButton.textContent =
        "START THE TEST";


    footerText.textContent =
        "© 2026 Would You Survive? — Made by Nikan Studio";


} else {

    document
        .querySelectorAll(".lang-btn")[1]
        .classList.add("active");


    document.documentElement.lang = "fa";

    document.body.classList.add("fa");


    smallTitle.textContent =
        "آزمون نهایی بقا";


    mainTitle.textContent =
        "آیا زنده می‌مانی؟";


    description.textContent =
        "با موقعیت‌های خطرناک روبه‌رو شو. هر انتخاب، داستان تو را تغییر می‌دهد.";


    startButton.textContent =
        "شروع آزمون";


    footerText.textContent =
        "© ۲۰۲۶ آیا زنده می‌مانی؟ — ساخته‌شده توسط نیکان استودیو";

}


if (!game.classList.contains("hidden")) {

    showScenario();

}

}

function startGame() {

currentScenario = 0;

survivalScore = 0;


document
    .querySelector(".hero")
    .classList.add("hidden");


game.classList.remove("hidden");


showScenario();

}

function showScenario() {

const scenario =
    scenarios[currentLanguage][currentScenario];


const totalScenarios =
    scenarios[currentLanguage].length;


if (currentLanguage === "en") {

    progress.textContent =
        `Scenario ${currentScenario + 1} of ${totalScenarios}`;

} else {

    progress.textContent =
        `سناریو ${currentScenario + 1} از ${totalScenarios}`;

}


scenarioTitle.textContent =
    scenario.title;


scenarioText.textContent =
    scenario.text;


choices.innerHTML = "";


scenario.choices.forEach(choice => {

    const button =
        document.createElement("button");


    button.className =
        "choice-btn";


    button.textContent =
        choice.text;


    button.onclick =
        () => chooseOption(choice.score);


    choices.appendChild(button);

});

}

function chooseOption(score) {

survivalScore += score;


currentScenario++;


if (
    currentScenario >=
    scenarios[currentLanguage].length
) {

    showResult();

} else {

    showScenario();

}

}

function showResult() {

let resultTitle;
let resultText;
let percentage;


if (survivalScore >= 8) {

    percentage = 95;


    if (currentLanguage === "en") {

        resultTitle =
            "YOU SURVIVED!";

        resultText =
            "Excellent decisions. You stayed calm and made intelligent choices when it mattered most.";

    } else {

        resultTitle =
            "تو زنده ماندی!";

        resultText =
            "انتخاب‌های فوق‌العاده‌ای داشتی. در شرایط سخت آرام ماندی و تصمیم‌های هوشمندانه گرفتی.";

    }

}


else if (survivalScore >= 4) {

    percentage = 70;


    if (currentLanguage === "en") {

        resultTitle =
            "YOU PROBABLY SURVIVED!";

        resultText =
            "You made some good decisions, but you also took a few unnecessary risks.";

    } else {

        resultTitle =
            "احتمالاً زنده ماندی!";

        resultText =
            "بعضی از تصمیم‌هایت خوب بودند، اما چند ریسک غیرضروری هم کردی.";

    }

}


else {

    percentage = 35;


    if (currentLanguage === "en") {

        resultTitle =
            "SURVIVAL WAS UNLIKELY";

        resultText =
            "Your choices were risky. Next time, slow down and think before making a decision.";

    } else {

        resultTitle =
            "شانس زنده ماندنت کم بود";

        resultText =
            "انتخاب‌هایت خطرناک بودند. دفعه بعد قبل از تصمیم‌گیری کمی بیشتر فکر کن.";

    }

}


let resultHTML;


if (currentLanguage === "en") {

    resultHTML = `
        <div class="result">

            <p class="small-title">
                YOUR SURVIVAL RESULT
            </p>

            <h2>
                ${resultTitle}
            </h2>

            <div class="percentage">
                ${percentage}%
            </div>

            <p>
                ${resultText}
            </p>

            <button
                class="start-btn"
                onclick="restartGame()">

                TRY AGAIN

            </button>

        </div>
    `;

} else {

    resultHTML = `
        <div class="result">

            <p class="small-title">
                نتیجه بقای تو
            </p>

            <h2>
                ${resultTitle}
            </h2>

            <div class="percentage">
                ${percentage}٪
            </div>

            <p>
                ${resultText}
            </p>

            <button
                class="start-btn"
                onclick="restartGame()">

                دوباره امتحان کن

            </button>

        </div>
    `;

}


game.innerHTML = resultHTML;

}

function restartGame() {

game.innerHTML = `

    <div
        class="progress"
        id="progress">

    </div>


    <h2
        id="scenario-title">

    </h2>


    <p
        id="scenario-text">

    </p>


    <div
        class="choices"
        id="choices">

    </div>

`;


currentScenario = 0;

survivalScore = 0;


progress =
    document.getElementById("progress");


scenarioTitle =
    document.getElementById("scenario-title");


scenarioText =
    document.getElementById("scenario-text");


choices =
    document.getElementById("choices");


showScenario();

}
