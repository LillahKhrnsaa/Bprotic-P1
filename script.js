/* =========================================================
   BiProTik ROBOTICS LAB
   Pertemuan 1
   Vanilla JavaScript
========================================================= */


/* =========================================================
   SLIDE SYSTEM
========================================================= */

const slides = document.querySelectorAll(".slide");

const navItems =
    document.querySelectorAll(".nav-item");

const nextButton =
    document.getElementById("nextButton");

const prevButton =
    document.getElementById("prevButton");

const progress =
    document.getElementById("progress");

const breadcrumb =
    document.getElementById("breadcrumb");

const slideCounter =
    document.getElementById("slideCounter");

let currentSlide = 0;


/* =========================================================
   SLIDE TITLES
========================================================= */

const slideTitles = [

    "START",
    "ROBOTICS",
    "ELEKTRONIKA",
    "KOMPONEN",
    "BREADBOARD",
    "ARDUINO",
    "IDE",
    "WIRING",
    "CODE",
    "SIMULATOR",
    "CHALLENGE",
    "DEBUG",
    "QUIZ",
    "CLOSING"

];


/* =========================================================
   SHOW SLIDE
========================================================= */

function showSlide(index) {

    if (index < 0) {

        index = 0;

    }


    if (index >= slides.length) {

        index =
            slides.length - 1;

    }


    currentSlide =
        index;


    slides.forEach(
        (slide, i) => {

            slide.classList.toggle(
                "active",
                i === currentSlide
            );

        }
    );


    navItems.forEach(
        (item, i) => {

            item.classList.toggle(
                "active",
                i === currentSlide
            );

        }
    );


    breadcrumb.textContent =
        `P1 / ${slideTitles[currentSlide]}`;


    slideCounter.textContent =
        `${currentSlide + 1} / ${slides.length}`;


    const percentage =
        (currentSlide /
            (slides.length - 1)) * 100;


    progress.style.width =
        `${percentage}%`;


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================================================
   NAV CLICK
========================================================= */

navItems.forEach(
    item => {

        item.addEventListener(
            "click",
            () => {

                const index =
                    Number(
                        item.dataset.slide
                    );

                showSlide(index);

            }
        );

    }
);


/* =========================================================
   NEXT / PREVIOUS
========================================================= */

nextButton.addEventListener(
    "click",
    () => {

        showSlide(
            currentSlide + 1
        );

    }
);


prevButton.addEventListener(
    "click",
    () => {

        showSlide(
            currentSlide - 1
        );

    }
);


/* =========================================================
   KEYBOARD NAVIGATION
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "ArrowRight" ||
            event.key === " "
        ) {

            event.preventDefault();

            showSlide(
                currentSlide + 1
            );

        }


        if (
            event.key === "ArrowLeft"
        ) {

            showSlide(
                currentSlide - 1
            );

        }

    }
);


/* =========================================================
   DATA-NEXT BUTTONS
========================================================= */

document.querySelectorAll(
    "[data-next]"
).forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                showSlide(
                    currentSlide + 1
                );

            }
        );

    }
);


/* =========================================================
   LED COMPONENT
========================================================= */

const componentLed =
    document.getElementById(
        "ledComponent"
    );

const toggleComponentLed =
    document.getElementById(
        "toggleComponentLed"
    );


toggleComponentLed.addEventListener(
    "click",
    () => {

        componentLed.classList.toggle(
            "on"
        );

    }
);


/* =========================================================
   BREADBOARD
========================================================= */

const breadboard =
    document.getElementById(
        "breadboard"
    );


function createBreadboard() {

    breadboard.innerHTML = "";


    for (
        let i = 0;
        i < 80;
        i++
    ) {

        const hole =
            document.createElement(
                "div"
            );


        hole.className =
            "breadboard-hole";


        hole.addEventListener(
            "click",
            () => {

                hole.classList.toggle(
                    "active"
                );

            }
        );


        breadboard.appendChild(
            hole
        );

    }

}


createBreadboard();


document.getElementById(
    "resetBreadboard"
).addEventListener(
    "click",
    () => {

        document
            .querySelectorAll(
                ".breadboard-hole"
            )
            .forEach(
                hole => {

                    hole.classList.remove(
                        "active"
                    );

                }
            );

    }
);


/* =========================================================
   WIRING LED
========================================================= */

const wiringLab =
    document.getElementById(
        "wiringLab"
    );

const wiringLed =
    document.getElementById(
        "wiringLed"
    );


document.getElementById(
    "runCurrent"
).addEventListener(
    "click",
    () => {

        wiringLab.classList.toggle(
            "running"
        );

    }
);


document.getElementById(
    "toggleWiringLed"
).addEventListener(
    "click",
    () => {

        wiringLed.classList.toggle(
            "on"
        );

    }
);


/* =========================================================
   CODE EXPLANATION
========================================================= */

const codeExplanation =
    document.getElementById(
        "codeExplanation"
    );


const explanationData = {

    const:
        `
        <strong>const int</strong><br><br>
        Digunakan untuk membuat konstanta bertipe
        integer. Pada contoh ini LED_PIN bernilai 13.
        `,

    setup:
        `
        <strong>setup()</strong><br><br>
        Fungsi ini dijalankan satu kali ketika Arduino
        mulai hidup atau setelah reset.
        `,

    pinMode:
        `
        <strong>pinMode()</strong><br><br>
        Digunakan untuk menentukan apakah sebuah pin
        berfungsi sebagai INPUT atau OUTPUT.
        `,

    digitalWrite:
        `
        <strong>digitalWrite()</strong><br><br>
        Mengubah kondisi digital pin menjadi HIGH atau LOW.
        `,

    delay:
        `
        <strong>delay()</strong><br><br>
        Menghentikan eksekusi program sementara.
        Nilainya menggunakan satuan milidetik.
        `,

    loop:
        `
        <strong>loop()</strong><br><br>
        Fungsi ini dijalankan berulang-ulang selama
        Arduino masih aktif.
        `

};


document
    .querySelectorAll(
        ".code-chip"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const key =
                        button.dataset.explain;


                    codeExplanation.innerHTML =
                        explanationData[key];

                }
            );

        }
    );


/* =========================================================
   VIRTUAL LED SIMULATOR
========================================================= */

const simulatorLed =
    document.getElementById(
        "simulatorLed"
    );

const simStatus =
    document.getElementById(
        "simStatus"
    );

const simState =
    document.getElementById(
        "simState"
    );

const simDelay =
    document.getElementById(
        "simDelay"
    );


let blinkTimer = null;

let blinkSpeed =
    1000;

let simulatorRunning =
    true;

let ledState =
    false;


/* =========================================================
   START SIMULATOR
========================================================= */

function startSimulator() {

    clearInterval(
        blinkTimer
    );


    simulatorRunning =
        true;


    blinkTimer =
        setInterval(
            () => {

                if (
                    !simulatorRunning
                ) {

                    return;

                }


                ledState =
                    !ledState;


                simulatorLed.classList.toggle(
                    "on",
                    ledState
                );


                const state =
                    ledState
                        ? "HIGH"
                        : "LOW";


                simStatus.textContent =
                    state;


                simState.textContent =
                    state;

            },
            blinkSpeed
        );

}


startSimulator();


/* =========================================================
   SPEED BUTTON
========================================================= */

document
    .querySelectorAll(
        ".speed-button[data-speed]"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    blinkSpeed =
                        Number(
                            button.dataset.speed
                        );


                    simDelay.textContent =
                        `${blinkSpeed} ms`;


                    simulatorRunning =
                        true;


                    startSimulator();

                }
            );

        }
    );


/* =========================================================
   STOP SIMULATOR
========================================================= */

document.getElementById(
    "stopSimulator"
).addEventListener(
    "click",
    () => {

        simulatorRunning =
            false;


        clearInterval(
            blinkTimer
        );


        simulatorLed.classList.remove(
            "on"
        );


        simStatus.textContent =
            "STOP";


        simState.textContent =
            "STOP";

    }
);


/* =========================================================
   CHALLENGE ARENA
========================================================= */

const challengeOutput =
    document.getElementById(
        "challengeOutput"
    );


const challenges = {

    fast: {

        title:
            "⚡ FAST BLINK",

        text:
            `
            Kurangi nilai delay().
            <br><br>
            Contoh:
            <strong>delay(1000)</strong>
            →
            <strong>delay(200)</strong>.
            <br><br>
            Pertanyaan:
            Apa yang terjadi jika nilainya semakin kecil?
            `

    },


    sequence: {

        title:
            "🔁 ON → ON → OFF",

        text:
            `
            Buat tiga kondisi berurutan:
            <br><br>
            HIGH → delay →
            HIGH → delay →
            LOW → delay.
            <br><br>
            Tantangannya adalah memahami urutan
            program, bukan sekadar menyalin kode.
            `

    },


    sos: {

        title:
            "... --- ...",

        text:
            `
            SOS Morse terdiri dari:
            <br><br>
            <strong>...</strong>
            tiga kedipan pendek,
            <br>
            <strong>---</strong>
            tiga kedipan panjang,
            <br>
            <strong>...</strong>
            tiga kedipan pendek.
            <br><br>
            Gunakan kombinasi HIGH, LOW dan delay().
            `

    },


    explain: {

        title:
            "🧠 EXPLAIN",

        text:
            `
            <strong>setup()</strong>
            digunakan untuk konfigurasi awal
            dan berjalan satu kali.
            <br><br>
            <strong>loop()</strong>
            berisi perilaku utama Arduino
            dan berjalan berulang-ulang.
            `

    }

};


document
    .querySelectorAll(
        ".challenge-card"
    )
    .forEach(
        card => {

            card.addEventListener(
                "click",
                () => {

                    const key =
                        card.dataset.challenge;


                    const data =
                        challenges[key];


                    challengeOutput.innerHTML = `

                        <span>
                            ${data.title}
                        </span>

                        <p>
                            ${data.text}
                        </p>

                    `;

                }
            );

        }
    );


/* =========================================================
   DEBUG LAB
========================================================= */

const debugOutput =
    document.getElementById(
        "debugOutput"
    );


const debugData = {

    wire: {

        title:
            "WIRING CHECK",

        lines: [

            "Checking GND...",

            "Checking LED polarity...",

            "Checking resistor path...",

            "Checking D13 connection...",

            "Diagnosis: inspect wiring before changing code."

        ]

    },


    port: {

        title:
            "BOARD / PORT CHECK",

        lines: [

            "Checking USB connection...",

            "Checking selected board...",

            "Checking selected port...",

            "Checking upload target...",

            "Diagnosis: verify board and port."

        ]

    },


    code: {

        title:
            "CODE LOGIC CHECK",

        lines: [

            "Checking LED_PIN...",

            "Checking pinMode()...",

            "Checking digitalWrite()...",

            "Checking HIGH / LOW sequence...",

            "Diagnosis: compare code with physical wiring."

        ]

    }

};


document
    .querySelectorAll(
        ".fault-button"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const type =
                        button.dataset.fault;


                    const data =
                        debugData[type];


                    debugOutput.innerHTML = "";


                    const title =
                        document.createElement(
                            "div"
                        );


                    title.className =
                        "console-line";


                    title.textContent =
                        `> ${data.title}`;


                    debugOutput.appendChild(
                        title
                    );


                    data.lines.forEach(
                        line => {

                            const row =
                                document.createElement(
                                    "div"
                                );


                            row.className =
                                "console-line muted";


                            row.textContent =
                                `> ${line}`;


                            debugOutput.appendChild(
                                row
                            );

                        }
                    );

                }
            );

        }
    );


/* =========================================================
   QUIZ
========================================================= */

const quizData = [

    {

        question:
            "Apa fungsi pinMode(LED_PIN, OUTPUT)?",

        options: [

            "Membaca sensor",

            "Menentukan pin sebagai output",

            "Mengatur WiFi",

            "Mematikan Arduino"

        ],

        answer:
            1

    },


    {

        question:
            "Satuan hambatan listrik adalah...",

        options: [

            "Volt",

            "Ampere",

            "Ohm",

            "Watt"

        ],

        answer:
            2

    },


    {

        question:
            "Bagian program yang berjalan berulang adalah...",

        options: [

            "setup()",

            "loop()",

            "pinMode()",

            "delay()"

        ],

        answer:
            1

    },


    {

        question:
            "Komponen yang membatasi arus LED adalah...",

        options: [

            "Resistor",

            "USB",

            "Breadboard",

            "Serial Monitor"

        ],

        answer:
            0

    },


    {

        question:
            "Jika delay diperkecil dari 1000 menjadi 200 ms, LED akan...",

        options: [

            "Lebih cepat berkedip",

            "Tidak bisa upload",

            "Menjadi sensor",

            "Selalu HIGH"

        ],

        answer:
            0

    }

];


let quizIndex =
    0;

let quizScore =
    0;


const quizQuestion =
    document.getElementById(
        "quizQuestion"
    );

const quizOptions =
    document.getElementById(
        "quizOptions"
    );

const quizNumber =
    document.getElementById(
        "quizNumber"
    );

const quizScoreElement =
    document.getElementById(
        "quizScore"
    );

const quizFeedback =
    document.getElementById(
        "quizFeedback"
    );


function renderQuiz() {

    if (
        quizIndex >=
        quizData.length
    ) {

        quizQuestion.innerHTML =
            "🎉 QUIZ SELESAI";


        quizOptions.innerHTML = `

            <div
                style="
                    text-align:center;
                    padding:30px;
                "
            >

                <div
                    style="
                        font-size:55px;
                        font-weight:900;
                        color:#42f59b;
                    "
                >
                    ${quizScore}
                    /
                    ${quizData.length}
                </div>

                <p>
                    Gunakan hasil ini sebagai refleksi.
                    Yang penting bukan hanya skor,
                    tetapi kemampuan menjelaskan
                    alasan di balik jawaban.
                </p>

                <button
                    class="primary-button"
                    id="retryQuiz"
                >
                    RETRY QUIZ
                </button>

            </div>

        `;


        quizNumber.textContent =
            "MISSION COMPLETE";


        quizFeedback.textContent =
            "";


        document
            .getElementById(
                "retryQuiz"
            )
            .addEventListener(
                "click",
                resetQuiz
            );


        return;

    }


    const question =
        quizData[quizIndex];


    quizNumber.textContent =
        `QUESTION ${quizIndex + 1} / ${quizData.length}`;


    quizScoreElement.textContent =
        quizScore;


    quizQuestion.textContent =
        question.question;


    quizOptions.innerHTML =
        "";


    quizFeedback.textContent =
        "";


    question.options.forEach(
        (option, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "quiz-option";


            button.textContent =
                `${String.fromCharCode(65 + index)}. ${option}`;


            button.addEventListener(
                "click",
                () => {

                    answerQuiz(
                        index
                    );

                }
            );


            quizOptions.appendChild(
                button
            );

        }
    );

}


function answerQuiz(
    selected
) {

    const question =
        quizData[quizIndex];


    const buttons =
        document.querySelectorAll(
            ".quiz-option"
        );


    buttons.forEach(
        button => {

            button.disabled =
                true;

        }
    );


    if (
        selected ===
        question.answer
    ) {

        buttons[selected]
            .classList.add(
                "correct"
            );


        quizScore++;


        quizFeedback.innerHTML =
            "✓ Benar. Mantap!";

    } else {

        buttons[selected]
            .classList.add(
                "wrong"
            );


        buttons[question.answer]
            .classList.add(
                "correct"
            );


        quizFeedback.innerHTML =
            "✗ Belum tepat. Perhatikan jawaban yang disorot.";

    }


    quizScoreElement.textContent =
        quizScore;


    setTimeout(
        () => {

            quizIndex++;

            renderQuiz();

        },
        1000
    );

}


function resetQuiz() {

    quizIndex =
        0;

    quizScore =
        0;

    renderQuiz();

}


renderQuiz();


/* =========================================================
   CLOSING REPLAY
========================================================= */

document
    .querySelectorAll(
        "[data-slide-target]"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    showSlide(
                        Number(
                            button.dataset.slideTarget
                        )
                    );

                }
            );

        }
    );


/* =========================================================
   INITIALIZE
========================================================= */

showSlide(0);