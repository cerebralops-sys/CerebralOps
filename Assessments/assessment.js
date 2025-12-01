// --- Global Quiz Variables and Data ---

const questions = [
    // --- SECTION 1: MARKETING INTELLIGENCE (The Engine) (Q1-Q7) ---
    {
        context: "Growth requires direction. Without a unified strategy, your team is just rowing in circles, wasting budget.",
        question: "Do you have a documented marketing strategy for the next 6-12 months?",
        options: [
            { text: "Yes, detailed and documented (5)", score: 5 },
            { text: "We have a general idea, but nothing written (3)", score: 3 },
            { text: "No, we wing it week by week (0)", score: 0 }
        ]
    },
    {
        context: "You can't improve what you don't measure. Knowing your Customer Acquisition Cost (CAC) is crucial for profitability.",
        question: "Do you track and know exactly how much it costs to acquire a new customer (CAC)?",
        options: [
            { text: "Yes, accurately calculated monthly (5)", score: 5 },
            { text: "I have a rough estimate (3)", score: 3 },
            { text: "No idea (0)", score: 0 }
        ]
    },
    {
        context: "In the digital age, if you aren't visible on search, you don't exist to new clients actively looking for solutions.",
        question: "If a client searches for your core service, where do you generally rank?",
        options: [
            { text: "Top 3 results on Page 1 (5)", score: 5 },
            { text: "Somewhere on Page 1 or 2 (3)", score: 3 },
            { text: "Page 3 or beyond (1)", score: 1 },
            { text: "We don't show up (0)", score: 0 }
        ]
    },
    {
        context: "Consistent, high-quality content is what converts visitors into qualified leads over time.",
        question: "How often do you publish original, value-driven content (blogs, videos, case studies)?",
        options: [
            { text: "Weekly or more (5)", score: 5 },
            { text: "Monthly (3)", score: 3 },
            { text: "Rarely or never (0)", score: 0 }
        ]
    },
    {
        context: "Paid advertising should be an investment, not an expense. Clear targeting and tracking are mandatory.",
        question: "Are you running paid campaigns (Google/Social) and are they consistently profitable?",
        options: [
            { text: "Yes, clear ROI and optimization systems in place (5)", score: 5 },
            { text: "We run them, but ROI is inconsistent/unclear (2)", score: 2 },
            { text: "No, or we tried once and it failed (0)", score: 0 }
        ]
    },
    {
        context: "The first touchpoint dictates the entire user experience. Your website is your 24/7 salesperson.",
        question: "Is your website optimized for capturing leads (clear CTAs, forms, landing pages)?",
        options: [
            { text: "Yes, fully optimized conversion funnel (5)", score: 5 },
            { text: "Some forms exist, but funnels are disjointed (2)", score: 2 },
            { text: "No, it's mostly a digital brochure (0)", score: 0 }
        ]
    },
    {
        context: "Email marketing is one of the highest ROI channels. Nurturing leads is critical.",
        question: "Do you have automated email sequences to nurture leads based on their activity?",
        options: [
            { text: "Yes, sophisticated segmentation and automation (5)", score: 5 },
            { text: "We send manual, occasional broadcasts (2)", score: 2 },
            { text: "No lead nurturing system in place (0)", score: 0 }
        ]
    },

    // --- SECTION 2: TECHNICAL INFRASTRUCTURE (The Vehicle) (Q8-Q14) ---
    {
        context: "Speed isn't a luxury; it's revenue. Google penalizes slow sites, and users instantly leave them.",
        question: "How would you rate your website's speed (loading time) and mobile responsiveness?",
        options: [
            { text: "Lightning fast on all devices (5)", score: 5 },
            { text: "Decent, but could be faster on mobile (3)", score: 3 },
            { text: "Slow, or not mobile friendly (0)", score: 0 }
        ]
    },
    {
        context: "Manual data entry is the enemy of scale. Systems should talk to each other to save time and reduce errors.",
        question: "Do your CRM, Email Marketing, and Sales tools talk to each other automatically?",
        options: [
            { text: "Yes, fully automated and integrated flows (5)", score: 5 },
            { text: "Partially, some manual data entry or uploads needed (2)", score: 2 },
            { text: "No, they are completely separate silos (0)", score: 0 }
        ]
    },
    {
        context: "Downtime or data loss can kill a small business instantly. Security is mandatory insurance.",
        question: "Do you have automated cloud backups and enterprise-level security protocols in place?",
        options: [
            { text: "Yes, automated, encrypted, and regularly tested (5)", score: 5 },
            { text: "We back up sometimes, but haven't tested restoration (2)", score: 2 },
            { text: "I think my hosting does it? (Unsure/None) (0)", score: 0 }
        ]
    },
    {
        context: "Legacy reliance on spreadsheets and outdated systems prevents scaling and creates errors.",
        question: "Are you relying on spreadsheets or outdated, non-integrated software to run core business functions?",
        options: [
            { text: "No, we use modern, integrated SaaS solutions (5)", score: 5 },
            { text: "Only for minor, non-critical tasks (3)", score: 3 },
            { text: "Yes, heavily for critical functions (0)", score: 0 }
        ]
    },
    {
        context: "The right Project Management (PM) tool is the operating system for your team's productivity.",
        question: "How are projects and tasks tracked and managed internally?",
        options: [
            { text: "Dedicated PM tool (Jira/ClickUp/Asana) with clear reporting (5)", score: 5 },
            { text: "Shared documents or basic calendar (2)", score: 2 },
            { text: "Via email, Slack, or verbal instructions (0)", score: 0 }
        ]
    },
    {
        context: "Scalability means your infrastructure can handle 2x or 5x growth without rebuilding everything.",
        question: "If your user base doubled overnight, would your current tech stack easily handle the load?",
        options: [
            { text: "Yes, it's cloud-native and highly scalable (5)", score: 5 },
            { text: "Maybe, it would take some immediate maintenance (2)", score: 2 },
            { text: "Absolutely not, it would break (0)", score: 0 }
        ]
    },
    {
        context: "AI is no longer optional. Using it to accelerate workflows gives you a competitive advantage.",
        question: "Are you utilizing any AI tools to speed up coding, content, or customer support workflows?",
        options: [
            { text: "Yes, AI is integrated into core processes (5)", score: 5 },
            { text: "We experiment with AI, but it's not consistent (2)", score: 2 },
            { text: "No, we haven't started yet (0)", score: 0 }
        ]
    },

    // --- SECTION 3: OPERATIONAL EFFICIENCY (The Driver) (Q15-Q17) ---
    {
        context: "If it's not written down, it's not a process; it's a person. SOPs allow you to delegate and grow without chaos.",
        question: "Does every core role and repetitive task in your company have a Standard Operating Procedure (SOP)?",
        options: [
            { text: "Yes, fully documented and accessible (5)", score: 5 },
            { text: "For some roles, but not all (3)", score: 3 },
            { text: "No, knowledge is mostly in people's heads (0)", score: 0 }
        ]
    },
    {
        context: "Founder dependency is the biggest bottleneck to scaling. A well-trained team should handle daily tasks.",
        question: "Do you (the founder) have to personally sign off on day-to-day operational decisions?",
        options: [
            { text: "Rarely, the team is highly autonomous (5)", score: 5 },
            { text: "Sometimes, for big issues (2)", score: 2 },
            { text: "Yes, constantly, I'm the bottleneck (0)", score: 0 }
        ]
    },
    {
        context: "Efficient onboarding saves money and ensures consistency. Time is money in operations.",
        question: "How long does it take you to fully onboard a new employee or a new client?",
        options: [
            { text: "Under 1 week, automated process (5)", score: 5 },
            { text: "2-4 weeks, manual effort required (2)", score: 2 },
            { text: "Over 1 month, it's slow and painful (0)", score: 0 }
        ]
    },

    // --- SECTION 4: THE "LEADING" QUESTIONS (Qualifiers) (Q18-Q20) ---
    // These do not count towards the score but are essential data for PHP report/lead context.
    {
        context: "Identifying your bottleneck is the first step to removing it. Focus your energy on the biggest source of friction.",
        question: "What is the biggest single bottleneck stopping you from scaling right now?",
        options: [
            { text: "Lead Generation (Marketing)", score: 0 },
            { text: "Technical Limitations/Automation (Tech)", score: 0 },
            { text: "Operational Chaos/Process (Ops)", score: 0 },
            { text: "Funding/Cash Flow", score: 0 }
        ]
    },
    {
        context: "We need to know the finish line to build the map. Setting clear financial targets is paramount.",
        question: "What is your primary revenue goal for the next 12 months?",
        options: [
            { text: "$0 - $500k", score: 0 },
            { text: "$500k - $1M", score: 0 },
            { text: "$1M+", score: 0 }
        ]
    },
    {
        context: "Your readiness determines the pace of change. High growth requires rapid execution.",
        question: "If you had a clear roadmap to fix these issues, how soon would you want to start implementation?",
        options: [
            { text: "Immediately (This week)", score: 0 },
            { text: "In the next 30-90 days", score: 0 },
            { text: "Sometime this year", score: 0 }
        ]
    }
];

let currentStep = 0;
let userAnswers = new Array(questions.length).fill(null); // Store selected indices
const MAX_SCORING_QUESTIONS = 17; // Q1 to Q17 are scored
const MAX_SCORE = MAX_SCORING_QUESTIONS * 5; // Total possible points is 85 (Used for normalization)

// --- DOM Element References ---
const contextText = document.getElementById('contextText');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const progressBar = document.getElementById('progressBar');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const quizCard = document.getElementById('quizCard');
const leadFormCard = document.getElementById('leadFormCard');

// --- Main Quiz Functions (Navigation and Rendering) ---

function renderQuestion() {
    const q = questions[currentStep];

    // Update Text
    contextText.innerText = q.context;
    questionText.innerText = q.question;

    // Update Progress 
    const progressPercent = ((currentStep) / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Generate Options
    optionsContainer.innerHTML = '';
    q.options.forEach((opt, index) => {
        const btn = document.createElement('div');
        const optionText = currentStep < MAX_SCORING_QUESTIONS ? opt.text : opt.text;

        btn.className = `option-btn ${userAnswers[currentStep] === index ? 'selected' : ''}`;
        btn.innerText = optionText;
        btn.onclick = () => selectOption(index);
        optionsContainer.appendChild(btn);
    });

    // Handle Buttons
    prevBtn.style.visibility = currentStep === 0 ? 'hidden' : 'visible';

    if (userAnswers[currentStep] === null) {
        nextBtn.disabled = true;
        nextBtn.innerText = 'Select to Continue';
        nextBtn.style.opacity = 0.5;
    } else {
        nextBtn.disabled = false;
        nextBtn.innerText = currentStep === questions.length - 1 ? 'Finish & Get Report' : 'Next';
        nextBtn.style.opacity = 1;
    }
}

function selectOption(index) {
    userAnswers[currentStep] = index;
    renderQuestion();
}

function nextQuestion() {
    if (userAnswers[currentStep] === null) {
        alert("Please select an option to proceed.");
        return;
    }

    if (currentStep < questions.length - 1) {
        currentStep++;
        renderQuestion();
    } else {
        finishQuiz();
    }
}

function prevQuestion() {
    if (currentStep > 0) {
        currentStep--;
        renderQuestion();
    }
}


// --- CORE LOGIC: Score Calculation and Report Generation (Now in JS) ---

/**
 * Builds the HTML body for the email based on the calculated score and answers.
 * This replaces the logic previously in generate_report.php.
 */
function buildReportHtml(calculatedScore, rawScore, pain, goal, readiness, answersSummary) {

    let level = "";
    let roadmap = "";
    let servicesLink = "";
   // alert(289);
    // 1. Determine Maturity Level & Roadmap
    if (calculatedScore < 50) {
        level = "Foundational / Ad-Hoc";
        servicesLink = "https://cerebralops.in/ops-services.html";
        roadmap = `
            <li><strong>Immediate Action:</strong> Document your core SOPs. Your business is too dependent on you.</li>
            <li><strong>Tech Fix:</strong> Audit your security and implement automated backups. You are at risk of data loss.</li>
            <li><strong>Marketing:</strong> Stop 'winging it'. Create a 3-month content and channel strategy.</li>
        `;
    } else if (calculatedScore >= 50 && calculatedScore < 80) {
        level = "Growth / Established";
        servicesLink = "https://cerebralops.in/technical-services.html";
        roadmap = `
            <li><strong>Immediate Action:</strong> Automate the connection between your CRM, Email, and Sales tools.</li>
            <li><strong>Tech Fix:</strong> Optimize site speed to improve Google Rankings and reduce bounce rate.</li>
            <li><strong>Marketing:</strong> Focus on reducing CAC (Customer Acquisition Cost) through targeted campaigns.</li>
        `;
    } else {
        level = "Optimized / Scaling";
        servicesLink = "https://cerebralops.in/marketing-services.html";
        roadmap = `
            <li><strong>Immediate Action:</strong> Focus on AI integration to reduce operational overhead by 20%.</li>
            <li><strong>Tech Fix:</strong> Implement advanced analytics and custom software solutions for predictive modeling.</li>
            <li><strong>Marketing:</strong> Scale profitable paid acquisition channels aggressively and enter new geos.</li>
        `;
    }

    // Prepare the answers summary (for lead insight)
    const formattedAnswers = answersSummary.replace(/\n/g, '<br>');

    // 2. Construct the HTML Email Body
    // NOTE: Use a placeholder for the Name, which will be replaced by send.php
    //alert(322);
    const htmlBody =
        "<html>" +
        "<head>" +
        "<style>" +
        // Embed styles for email client compatibility
        "body { font-family: Arial, sans-serif; color: #333; line-height: 1.6; }" +
        ".container { max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; padding: 20px; }" +
        ".header { background-color: #0f172a; color: #fff; padding: 20px; text-align: center; }" +
        ".score-box { background-color: #2563eb; color: #fff; padding: 15px; text-align: center; font-size: 24px; font-weight: bold; margin: 20px 0; border-radius: 8px; }" +
        ".section { margin-bottom: 20px; }" +
        ".btn { background-color: #FFC55A; color: #020617; padding: 10px 20px; text-decoration: none; font-weight: bold; display: inline-block; border-radius: 5px; }" +
        ".footer { font-size: 12px; color: #777; text-align: center; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px; }" +
        ".details-box { background-color: #f4f4f4; padding: 15px; border-radius: 5px; font-size: 14px; }" +
        "ul { list-style-type: disc; margin-left: 20px; padding-left: 0; }" +
        "</style>" +
        "</head>" +
        "<body>" +
        "<div class='container'>" +
        "<div class='header'>" +
        "<h1>Cerebral Ops</h1>" +
        "<p>Growth Maturity Assessment</p>" +
        "</div>" +

        "<p>Hello Frustrated Growth Leader,</p>" + 
        "<p>Thank you for taking the Cerebral Ops assessment. Based on your inputs, here is your customized report.</p>" +

        "<div class='score-box'>" +
        "Your Score: " + calculatedScore + " / 100<br>" +
        "<span style='font-size: 16px; font-weight: normal;'>Maturity Level: " + level + "</span>" +
        "</div>" +

        "<div class='section'>" +
        "<h3> Identified Bottleneck: " + pain + "</h3>" +
        "<h3> Stated Goal: " + goal + "</h3>" +
        "<p><em>Readiness to Start: " + readiness + "</em></p>" +
        "</div>" +

        "<div class='section'>" +
        "<h2>Your Step-by-Step Roadmap</h2>" +
        "<p>To move your score to 100%, prioritize these three actions:</p>" +
        "<ul>" +
        roadmap +
        "</ul>" +
        "</div>" +

        "<div class='section'>" +
        "<p>We have analyzed your stack. Review our specific services designed for the <strong>" + level + "</strong> stage of growth:</p>" +
        "<p style='text-align: center;'>" +
        "<a href='" + servicesLink + "' class='btn'>View Recommended Solutions</a>" +
        "</p>" +
        "</div>" +

        "<div class='section'>" +
        "<h4>Quiz Details (For our internal reference)</h4>" +
        "<div class='details-box'>" +
        formattedAnswers +
        "</div>" +
        "</div>" +

        "<div class='footer'>" +
        "<p>Cerebral Ops | Marketing. Tech. Operations.</p>" +
        "<p><a href='https://cerebralops.in'>www.cerebralops.in</a></p>" +
        "</div>" +
        "</div>" +
        "</body>" +
        "</html>";

    return htmlBody;
}


function finishQuiz() {
    // 1. Calculate Score and prepare summary
    let rawScore = 0;
    let answersSummary = "";
    //alert(397);
    questions.forEach((q, i) => {
        const selectedIdx = userAnswers[i];

        if (i < MAX_SCORING_QUESTIONS) {
            rawScore += q.options[selectedIdx].score;
        }

        answersSummary += `Q${i + 1}: ${q.question} | A: ${q.options[selectedIdx].text}\n`;
    });

    // Normalize Score to 100 (Total Max Score is 85)
    const calculatedScore = Math.min(100, Math.round((rawScore / MAX_SCORE) * 100)); // Capped at 100

    // Capture qualifiers (Indices 17, 18, 19)
    const pain = 0;//  questions[17].options[userAnswers[17]].text;
    const goal = 0;// questions[18].options[userAnswers[18]].text;
    const readiness = 0;//  questions[19].options[userAnswers[19]].text;

    //const pain =   questions[17].options[userAnswers[17]].text;
    //const goal =  questions[18].options[userAnswers[18]].text;
    //const readiness   questions[19].options[userAnswers[19]].text;

   // alert(419);
    // 2. Generate the Full HTML Report (New step, replacing AJAX)
    const emailHtmlContent = buildReportHtml(calculatedScore, rawScore, pain, goal, readiness, answersSummary);

    // 3. Populate Hidden Form Fields for final submission (send.php)

    //document.getElementById('inputScore').value = calculatedScore;
    // Store the full HTML body generated by JS
    document.getElementById('inputEmailContent').value = emailHtmlContent;
    //alert(emailHtmlContent);

    console.log(emailHtmlContent);

    // Swap Views
    quizCard.style.display = 'none';
    leadFormCard.style.display = 'block';
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', renderQuestion);