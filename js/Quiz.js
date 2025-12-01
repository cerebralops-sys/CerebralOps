
        // Quiz Data
    const questions = [
    {
        id: 'revenue',
    question: "What's your current monthly revenue?",
    options: [
    {value: 'A', label: 'Pre-revenue or under ₹2 lakhs' },
    {value: 'B', label: '₹2-10 lakhs' },
    {value: 'C', label: '₹10-50 lakhs' },
    {value: 'D', label: '₹50 lakhs+' }
    ]
            },
    {
        id: 'challenge',
    question: "What's your biggest business challenge right now?",
    options: [
    {value: 'A', label: 'Getting our first customers / proving product-market fit' },
    {value: 'B', label: 'Not enough people know we exist' },
    {value: 'C', label: 'Getting traffic/awareness but not enough sales' },
    {value: 'D', label: "Can't scale profitably (customer acquisition costs too high)" },
    {value: 'E', label: 'Need to close bigger deals or enterprise clients' }
    ]
            },
    {
        id: 'acquisition',
    question: 'How do your ideal customers currently find solutions like yours?',
    options: [
    {value: 'A', label: 'Google search' },
    {value: 'B', label: 'Social media (Instagram, Facebook, LinkedIn)' },
    {value: 'C', label: 'Referrals and word-of-mouth' },
    {value: 'D', label: 'Marketplaces (Amazon, Flipkart, industry platforms)' },
    {value: 'E', label: 'Direct outreach (we contact them)' }
    ]
            },
    {
        id: 'budget',
    question: "What's your current marketing budget (monthly)?",
    options: [
    {value: 'A', label: 'Under ₹25,000' },
    {value: 'B', label: '₹25,000-₹1,00,000' },
    {value: 'C', label: '₹1,00,000-₹3,00,000' },
    {value: 'D', label: '₹3,00,000+' }
    ]
            },
    {
        id: 'traffic',
    question: 'How many website visitors do you get per month?',
    options: [
    {value: 'A', label: 'Under 500' },
    {value: 'B', label: '500-2,000' },
    {value: 'C', label: '2,000-10,000' },
    {value: 'D', label: '10,000+' }
    ]
            },
    {
        id: 'conversion',
    question: "What's your current website conversion rate (if you know it)?",
    options: [
    {value: 'A', label: "Don't know / not tracking" },
    {value: 'B', label: 'Under 1%' },
    {value: 'C', label: '1-3%' },
    {value: 'D', label: '3-5%' },
    {value: 'E', label: 'Over 5%' }
    ]
            },
    {
        id: 'team',
    question: 'Do you have a marketing team or person in-house?',
    options: [
    {value: 'A', label: 'No, founder does everything' },
    {value: 'B', label: 'One part-time or junior marketing person' },
    {value: 'C', label: '2-3 marketing team members' },
    {value: 'D', label: 'Full marketing department (4+ people)' }
    ]
            },
    {
        id: 'businessType',
    question: 'What type of business are you?',
    options: [
    {value: 'A', label: 'B2C / Direct to consumer' },
    {value: 'B', label: 'Local business (restaurant, clinic, salon, retail)' },
    {value: 'C', label: 'B2B with short sales cycle (under 1 month)' },
    {value: 'D', label: 'B2B with long sales cycle (3+ months, deal size ₹5L+)' },
    {value: 'E', label: 'Online marketplace seller or hybrid' }
    ]
            },
    {
        id: 'website',
    question: 'Which statement best describes your brand/website?',
    options: [
    {value: 'A', label: "Don't have a website yet or it's very basic" },
    {value: 'B', label: 'Have a website but it looks outdated or unprofessional' },
    {value: 'C', label: 'Website is decent but not optimized for conversions' },
    {value: 'D', label: 'Website is modern and professional' },
    {value: 'E', label: 'Need a complete rebrand (logo, messaging, positioning)' }
    ]
            },
    {
        id: 'goal',
    question: "What's your primary goal for the next 6 months?",
    options: [
    {value: 'A', label: 'Launch our business/product successfully' },
    {value: 'B', label: 'Double our website traffic' },
    {value: 'C', label: 'Increase conversion rate and get more customers from existing traffic' },
    {value: 'D', label: 'Build brand awareness in our market' },
    {value: 'E', label: 'Reduce customer acquisition costs while scaling' },
    {value: 'F', label: 'Close bigger deals or enterprise clients' }
    ]
            }
    ];

    // Quiz State
    let currentQuestion = 0;
    let answers = { };

    // DOM Elements
    const quizModal = document.getElementById('quizModal');
    const openQuizBtn = document.getElementById('openQuizBtn');
    const closeQuizBtn = document.getElementById('closeQuizBtn');
    const questionCard = document.getElementById('questionCard');
    const resultsCard = document.getElementById('resultsCard');
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const nextBtnText = document.getElementById('nextBtnText');
    const progressBar = document.getElementById('progressBar');
    const progressPercent = document.getElementById('progressPercent');
    const currentQ = document.getElementById('currentQ');
    const totalQ = document.getElementById('totalQ');
    const progressSection = document.getElementById('progressSection');

    // Initialize
    totalQ.textContent = questions.length;

    // Event Listeners
    openQuizBtn.addEventListener('click', openQuiz);
    closeQuizBtn.addEventListener('click', closeQuiz);
    prevBtn.addEventListener('click', previousQuestion);
    nextBtn.addEventListener('click', nextQuestion);

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && quizModal.classList.contains('active')) {
        closeQuiz();
            }
        });

    // Functions
    function openQuiz() {
        quizModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderQuestion();
        }

    function closeQuiz() {
        quizModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    resetQuiz();
        }

    function resetQuiz() {
        currentQuestion = 0;
    answers = { };
    questionCard.style.display = 'block';
    resultsCard.style.display = 'none';
    progressSection.style.display = 'block';
    renderQuestion();
        }

    function renderQuestion() {
            const question = questions[currentQuestion];
    questionText.textContent = question.question;

    // Update progress
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = progress + '%';
    progressPercent.textContent = Math.round(progress);
    currentQ.textContent = currentQuestion + 1;

    // Update navigation buttons
    prevBtn.disabled = currentQuestion === 0;
    prevBtn.classList.toggle('text-gray-400', currentQuestion === 0);
    prevBtn.classList.toggle('cursor-not-allowed', currentQuestion === 0);
    prevBtn.classList.toggle('text-gray-700', currentQuestion !== 0);

    // Update next button text
    nextBtnText.textContent = currentQuestion === questions.length - 1 ? 'See Results' : 'Next';

    // Render options
    optionsContainer.innerHTML = '';
            question.options.forEach(option => {
                const button = document.createElement('button');
    button.className = 'option-button w-full p-5 text-left rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50';

    const isSelected = answers[question.id]?.value === option.value;
    if (isSelected) {
        button.classList.add('selected');
                }

    button.innerHTML = `
    <div class="flex items-center gap-4">
        <div class="w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${isSelected ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}">
            ${isSelected ? '<svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>' : ''}
        </div>
        <span class="text-gray-800 font-medium">${option.label}</span>
    </div>
    `;

                button.addEventListener('click', () => selectOption(question.id, option));
    optionsContainer.appendChild(button);
            });

    // Update next button state
    updateNextButton();
        }

    function selectOption(questionId, option) {
        answers[questionId] = option;
    renderQuestion();
        }

    function updateNextButton() {
            const hasAnswer = answers[questions[currentQuestion].id];
    nextBtn.disabled = !hasAnswer;

    if (hasAnswer) {
        nextBtn.className = 'flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg';
            } else {
        nextBtn.className = 'flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all bg-gray-200 text-gray-400 cursor-not-allowed';
            }
        }

    function previousQuestion() {
            if (currentQuestion > 0) {
        currentQuestion--;
    renderQuestion();
            }
        }

    function nextQuestion() {
            if (currentQuestion < questions.length - 1) {
        currentQuestion++;
    renderQuestion();
            } else {
        showResults();
            }
        }

    function calculateRecommendation() {
            const revenue = answers.revenue?.value;
    const budget = answers.budget?.value;
    const challenge = answers.challenge?.value;
    const traffic = answers.traffic?.value;
    const conversion = answers.conversion?.value;
    const businessType = answers.businessType?.value;
    const website = answers.website?.value;

    let stage = 'startup';
    if ((revenue === 'C' || revenue === 'D') && (budget === 'C' || budget === 'D')) {
        stage = 'scale';
            } else if (revenue === 'B' || budget === 'B') {
        stage = 'growth';
            }

    let primaryNeed = 'awareness';
    if ((traffic === 'C' || traffic === 'D') && (conversion === 'A' || conversion === 'B' || conversion === 'C')) {
        primaryNeed = 'conversion';
            } else if (challenge === 'D') {
        primaryNeed = 'efficiency';
            } else if (challenge === 'E' || businessType === 'D') {
        primaryNeed = 'enterprise';
            }

    let recommendation = {
        title: '',
    description: '',
    priority: '',
    services: [],
    timeline: '',
    investment: '',
    outcomes: []
            };

    if (businessType === 'B') {
        recommendation = {
            title: 'Local Domination Strategy',
            description: 'You need to own your local market and become the obvious choice when people nearby search for your services.',
            priority: 'Foundation Building',
            services: [
                { name: 'Local SEO', description: 'Google Business Profile optimization, local rankings, directory listings', investment: '₹20,000/month', phase: 'Month 1-2' },
                { name: website === 'A' || website === 'B' ? 'Website Design' : 'Website Optimization', description: 'Mobile-first design with click-to-call, directions, and local optimization', investment: website === 'A' || website === 'B' ? '₹80,000 one-time' : '₹40,000 one-time', phase: 'Month 1-2' },
                { name: 'Social Media Marketing', description: 'Instagram/Facebook showcasing your work and engaging local community', investment: '₹25,000/month', phase: 'Month 3-6' }
            ],
            timeline: '6 months',
            investment: '₹80,000 setup + ₹45,000-₹90,000/month',
            outcomes: ['Top 3 ranking for 5-10 local search terms', '50-100+ calls per month from Google', '20-30 new reviews', '30-50% increase in foot traffic']
        };
            } else if (businessType === 'D' || (challenge === 'E' && (revenue === 'C' || revenue === 'D'))) {
        recommendation = {
            title: 'Enterprise Account-Based Strategy',
            description: 'Land bigger deals more efficiently with targeted, account-based strategies designed for long B2B sales cycles.',
            priority: 'Enterprise Growth',
            services: [
                { name: 'Account-Based Marketing', description: 'Identify and target your top 20-50 accounts with personalized campaigns', investment: '₹50,000/month', phase: 'Quarter 1' },
                { name: 'Content Marketing', description: 'Thought leadership content that resonates with C-level buyers', investment: '₹50,000/month', phase: 'Quarter 1' },
                { name: 'Marketing Automation', description: 'Align marketing and sales around target accounts', investment: '₹60,000 setup + ₹25,000/month', phase: 'Quarter 1' }
            ],
            timeline: '12 months',
            investment: '₹60,000 setup + ₹1,75,000/month',
            outcomes: ['10-15 new enterprise opportunities', '3-5 closed deals worth ₹10L+', '40-50% larger deal sizes', '20-30% shorter sales cycles']
        };
            } else if (businessType === 'A' || businessType === 'E') {
        recommendation = {
            title: 'E-commerce Growth Engine',
            description: 'Build a complete growth system that attracts customers, converts them efficiently, and maximizes their lifetime value.',
            priority: stage === 'startup' ? 'Foundation Building' : 'Scale & Optimize',
            services: [
                { name: website === 'A' || website === 'B' ? 'Website Design' : 'E-commerce Optimization', description: 'Fast, mobile-optimized store with seamless checkout experience', investment: website === 'A' || website === 'B' ? '₹1,50,000 one-time' : '₹50,000 one-time', phase: 'Month 1-2' },
                { name: businessType === 'E' ? 'E-commerce Marketing' : 'Social Media Marketing', description: businessType === 'E' ? 'Marketplace optimization and shopping campaigns' : 'Instagram/Facebook marketing and influencer partnerships', investment: '₹35,000/month', phase: 'Month 1-6' },
                { name: 'PPC Shopping Campaigns', description: 'Google Shopping and social ads targeting high-intent buyers', investment: '₹25,000/month + ₹50,000 ad spend', phase: 'Month 2-6' },
                { name: 'Email Marketing & Automation', description: 'Cart abandonment, post-purchase sequences, and customer retention', investment: '₹40,000 setup + ₹15,000/month', phase: 'Month 3-6' }
            ],
            timeline: '6 months',
            investment: stage === 'startup' ? '₹1,50,000 setup + ₹1,20,000/month' : '₹50,000 setup + ₹1,55,000/month',
            outcomes: ['Shopping campaigns delivering 4-6x ROAS', 'Email automation recovering 15-25% of abandoned carts', 'Conversion rate improved from 2% to 4-5%', 'Overall revenue increase of 100-200%']
        };
            } else if (primaryNeed === 'conversion' || (traffic === 'C' || traffic === 'D')) {
        recommendation = {
            title: 'Optimization & Scale Strategy',
            description: "You're getting decent traffic but leaving money on the table. Let's maximize your existing momentum.",
            priority: 'Optimization & Scale',
            services: [
                { name: 'Conversion Rate Optimization', description: 'Identify and fix conversion leaks, A/B test key pages', investment: '₹50,000 audit + ₹40,000/month', phase: 'Month 1-2' },
                { name: 'Marketing Analytics', description: 'Understand true ROI of each channel', investment: '₹30,000 setup', phase: 'Month 1-2' },
                { name: 'Email Marketing', description: 'Nurture leads and recover abandoned opportunities', investment: '₹40,000 setup + ₹15,000/month', phase: 'Month 3-6' },
                { name: 'Marketing Automation & CRM', description: 'Stop losing leads to poor follow-up', investment: '₹60,000 setup + ₹25,000/month', phase: 'Month 3-6' }
            ],
            timeline: '6 months',
            investment: '₹1,80,000 setup + ₹1,30,000/month',
            outcomes: ['Conversion rate: 2% to 4-5%', 'Email automation recovers 15-25% more deals', 'Sales cycle reduced by 20-30%', '2-3x marketing ROI improvement']
        };
            } else {
        recommendation = {
            title: 'Launch & Growth Foundation',
            description: "You're in the early stages and need to establish your online presence and start driving qualified traffic.",
            priority: 'Foundation Building',
            services: [
                { name: website === 'A' || website === 'B' ? 'Website Design' : 'Website Optimization', description: 'Modern, mobile-responsive site optimized for conversions', investment: website === 'A' || website === 'B' ? '₹1,50,000 one-time' : '₹40,000 one-time', phase: 'Month 1-2' },
                { name: 'Marketing Analytics', description: 'Track what works from day one', investment: '₹30,000 setup + ₹15,000/month', phase: 'Month 1-2' },
                { name: 'SEO', description: 'Start ranking for keywords your customers search for', investment: '₹30,000/month', phase: 'Month 3-6' },
                { name: budget === 'C' || budget === 'D' ? 'PPC Advertising' : 'Social Media Marketing', description: budget === 'C' || budget === 'D' ? 'Immediate traffic while SEO builds' : 'Build brand presence', investment: budget === 'C' || budget === 'D' ? '₹25,000/month + ₹50,000 ad spend' : '₹20,000/month', phase: 'Month 3-6' }
            ],
            timeline: '6 months',
            investment: website === 'A' || website === 'B' ? '₹1,50,000 setup + ₹1,20,000/month' : '₹70,000 setup + ₹95,000/month',
            outcomes: ['Professional website converting at 2-4%', '1,000-2,000 monthly visitors from SEO', '30-80 qualified leads per month', 'Clear data on what works']
        };
            }

    return recommendation;
        }

    function showResults() {
            const recommendation = calculateRecommendation();

    // Hide question card and progress
    questionCard.style.display = 'none';
    progressSection.style.display = 'none';

    // Show and populate results card
    resultsCard.style.display = 'block';
    resultsCard.innerHTML = `
    <button onclick="closeQuiz()" class="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors">
        <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
    </button>

    <div class="text-center mb-8">
        <div class="inline-block p-3 bg-green-100 rounded-full mb-4">
            <svg class="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Your Personalized Growth Roadmap
        </h1>
        <p class="text-lg text-gray-600">
            Based on your answers, here is what we recommend
        </p>
    </div>

    <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6 mb-8">
        <div class="flex items-start gap-3 mb-3">
            <svg class="w-6 h-6 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
                <h2 class="text-2xl font-bold mb-2">${recommendation.title}</h2>
                <p class="text-blue-100 text-lg">${recommendation.description}</p>
            </div>
        </div>
        <div class="flex items-center gap-2 mt-4 flex-wrap">
            <span class="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                Priority: ${recommendation.priority}
            </span>
            <span class="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
                Timeline: ${recommendation.timeline}
            </span>
        </div>
    </div>

    <div class="space-y-6 mb-8">
        <h3 class="text-xl font-bold text-gray-900 flex items-center gap-2">
            <svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
            </svg>
            Recommended Services
        </h3>

        ${recommendation.services.map(service => `
                    <div class="border border-gray-200 rounded-lg p-5">
                        <div class="flex justify-between items-start mb-2 flex-wrap gap-2">
                            <h4 class="font-bold text-gray-900 text-lg">${service.name}</h4>
                            <span class="text-sm font-medium text-blue-600 bg-bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">
                                ${service.phase}
                            </span>
                        </div>
                        <p class="text-gray-600 mb-2">${service.description}</p>
                        <p class="text-gray-900 font-semibold">${service.investment}</p>
                    </div>
                `).join('')}
    </div>

    <div class="bg-gray-50 rounded-xl p-6 mb-8">
        <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
            Expected Outcomes
        </h3>
        <ul class="space-y-3">
            ${recommendation.outcomes.map(outcome => `
                        <li class="flex items-start gap-3">
                            <svg class="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span class="text-gray-700">${outcome}</span>
                        </li>
                    `).join('')}
        </ul>
    </div>

    <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
        <h3 class="text-xl font-bold text-gray-900 mb-2">Total Investment</h3>
        <p class="text-2xl font-bold text-blue-600 mb-4">${recommendation.investment}</p>
        <p class="text-gray-700">
            This investment typically pays for itself within ${recommendation.timeline}.
        </p>
    </div>

    <div class="border-t-2 border-gray-200 pt-8">
        <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">
            Ready to Get Started?
        </h3>
        <p class="text-gray-600 text-center mb-6">
            Enter your email to receive a detailed PDF of your roadmap
        </p>

        <form id="emailForm" class="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-6">
            <input
                type="email"
                id="emailInput"
                placeholder="Enter your email"
                required
                class="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button
                type="submit"
                class="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow whitespace-nowrap"
            >
                Get Roadmap
            </button>
        </form>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:hello@cerebralops.in?subject=Strategy Call Request" class="px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-center">
                Book Strategy Call
            </a>
            <button
                onclick="resetQuiz()"
                class="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
                Retake Quiz
            </button>
        </div>
    </div>
    `;

    // Add email form handler
    document.getElementById('emailForm').addEventListener('submit', function (e) {
        e.preventDefault();
    const email = document.getElementById('emailInput').value;

    // Here you would normally send this to your backend
    // For now, we'll just show an alert
    alert('Thank you! We will send your personalized roadmap to ' + email);

                // Optional: Send to your backend
                // fetch('/api/submit-quiz', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email: email, answers: answers, recommendation: recommendation })
        // });
    });
        }

    // Make functions available globally
    window.closeQuiz = closeQuiz;
    window.resetQuiz = resetQuiz;
