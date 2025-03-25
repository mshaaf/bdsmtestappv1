document.addEventListener('DOMContentLoaded', () => {
    let currentStep = 0;
    let answers = [];

    // Define the questions array at the top to avoid hoisting issues
    const questions = [
        // Submissive
        { text: "I don't like making decisions sexually; I just like to go with what my partner wants.", category: "Submissive" },
        { text: "I enjoy serving my partner and have a need to please them.", category: "Submissive" },
        { text: "I like not having any control in the bedroom.", category: "Submissive" },
        { text: "I want to be ordered around.", category: "Submissive" },
        { text: "I want to sexually worship my partner.", category: "Submissive" },
        { text: "It is fun to be forced to do things that I don't necessarily like to do.", category: "Submissive" },
        { text: "My partner's satisfaction is more important to me than my own.", category: "Submissive" },
    
        // Switch
        { text: "Discussion of interests between my partner and I is important.", category: "Switch" },
        { text: "I find both dominant and submissive roles exciting.", category: "Switch" },
        { text: "I like the idea of being both dominant and submissive at different times.", category: "Switch" },
        { text: "I would rather have an opportunity to change roles than have a set role in the bedroom.", category: "Switch" },
        { text: "Mutual exploration between partners is important to me.", category: "Switch" },
        { text: "Mutual gratification is important to me.", category: "Switch" },
        { text: "My role depends on the dynamic with my partner.", category: "Switch" },
    
        // Bondage
        { text: "Binding someone makes me feel in control / Being bound makes me feel safe.", category: "Bondage" },
        { text: "I enjoy seeing my partner in restrictive clothing / I enjoy wearing restrictive clothing.", category: "Bondage" },
        { text: "I like the idea of my partner being physically helpless during sex / I like feeling physically helpless during sex.", category: "Bondage" },
        { text: "I would like to tie up my partner / I would like to be tied up by my partner.", category: "Bondage" },
        { text: "I would love to have physical control in a sexual setting / I would love to have a lack of physical control in a sexual setting.", category: "Bondage" },
        { text: "Sexual situations in which my partner is restrained are exciting / Sexual situations in which I am restrained are exciting.", category: "Bondage" },
        { text: "The idea of binding / being bound is arousing.", category: "Bondage" },
    
        // Exhibitionist
        { text: "I am into watching pornography.", category: "Exhibitionist" },
        { text: "I want people to watch me have sex.", category: "Exhibitionist" },
        { text: "I want to watch people have sex.", category: "Exhibitionist" },
        { text: "I would like to include other people in my sexual experiences outside of my partner and I.", category: "Exhibitionist" },
        { text: "I would love to film my sexual encounters.", category: "Exhibitionist" },
        { text: "I've always wanted to streak, flash someone, or have sex in front of people.", category: "Exhibitionist" },
        { text: "It would be fun to have sex more publicly.", category: "Exhibitionist" },
    
        // Vanilla
        { text: "I don't practice any sort of fetishism (to my knowledge).", category: "Vanilla" },
        { text: "I have no interest in exploring sexuality, I'm satisfied with where I am at.", category: "Vanilla" },
        { text: "I want to explore a fantasy but I never seem to have the opportunity.", category: "Vanilla" },
        { text: "People that engage in BDSM practices are weird.", category: "Vanilla" },
        { text: "Sex is only appropriate when you love someone.", category: "Vanilla" },
        { text: "Sexuality is primarily emotional expression.", category: "Vanilla" },
        { text: "Toys and other things take away from sex between my partner and I.", category: "Vanilla" },
    
        // Dominant
        { text: "I like being powerful in bed.", category: "Dominant" },
        { text: "I want to be in control in the bedroom.", category: "Dominant" },
        { text: "I want to be worshiped.", category: "Dominant" },
        { text: "I wish that I could force my partner to do what I wanted.", category: "Dominant" },
        { text: "I would rather always be on top than always be on bottom.", category: "Dominant" },
        { text: "It would be great to order someone around in the bedroom.", category: "Dominant" },
        { text: "My own gratification is more important than my partner's.", category: "Dominant" },
    
        // Sadist
        { text: "I like inflicting pain on people physically in a sexual setting.", category: "Sadist" },
        { text: "I like seeing bruises, scars, or marks that were caused by me during sex.", category: "Sadist" },
        { text: "I view my sexual partners as sex objects sometimes.", category: "Sadist" },
        { text: "It is enjoyable to hurt my partner.", category: "Sadist" },
        { text: "It is enjoyable to say dirty (sometimes inappropriate) things to my partner.", category: "Sadist" },
        { text: "Sometimes I like to say things that may make my partner uncomfortable.", category: "Sadist" },
        { text: "The idea of sexual torture is appealing.", category: "Sadist" },
    
        // Degradation
        { text: "A sense of worthlessness is exciting to me.", category: "Degradation" },
        { text: "I enjoy name calling in the bedroom.", category: "Degradation" },
        { text: "I like being forced to dress or act in a way that is humiliating.", category: "Degradation" },
        { text: "I like someone that will talk dirty to me to an extreme that can make me uncomfortable.", category: "Degradation" },
        { text: "I want to be forced to watch my partner with someone else.", category: "Degradation" },
        { text: "It is arousing to be put in humiliating positions or situations.", category: "Degradation" },
        { text: "It is exciting to feel ashamed by my sexuality.", category: "Degradation" },
    
        // Masochist
        { text: "After sex, I enjoy seeing the evidence of the pain I experienced during sex.", category: "Masochist" },
        { text: "I enjoy the idea that my partner wants to inflict pain on me.", category: "Masochist" },
        { text: "I like being in pain.", category: "Masochist" },
        { text: "I like being threatened with pain.", category: "Masochist" },
        { text: "Inflicting pain on myself is sexually stimulating sometimes.", category: "Masochist" },
        { text: "It is arousing to have someone inflict pain on me.", category: "Masochist" },
        { text: "It is nice to have control over the pain which is inflicted on me.", category: "Masochist" },
    
        // Experimental
        { text: "I am willing to try anything once.", category: "Experimental" },
        { text: "I like experimenting with sexual positions.", category: "Experimental" },
        { text: "I have fantasies that unsettle me.", category: "Experimental" },
        { text: "I would like to explore my partner's sexual curiosities.", category: "Experimental" },
        { text: "I am interested in finding out what's out there.", category: "Experimental" },
        { text: "It would be interesting to try things that are out of my normal sexual range.", category: "Experimental" },
        { text: "Sexuality should be explored.", category: "Experimental" }
    ];

    // Define totalQuestions
    const totalQuestions = questions.length;

    if (window.location.pathname.includes('questions.html')) {
        setupQuestionPage();
    } else if (window.location.pathname.includes('results.html')) {
        displayResults();
        setupRetakeButton(); // Add this line to set up the retake button
    }

    function setupQuestionPage() {
        const questionText = document.getElementById('questionText'); // Now works!
        const questionContainer = document.querySelector('.space-y-4');
        const progressBar = document.getElementById('progress');
    
        if (!questionContainer || !questionText || !progressBar) {
            console.error("Elements not found in setupQuestionPage!");
            return;
        }
    
        const buttons = questionContainer.querySelectorAll('button');
    
        function updateProgress() {
            const progress = ((currentStep + 1) / totalQuestions) * 100;
            progressBar.style.width = `${progress}%`;
        }
    
        function loadNextQuestion() {
            if (currentStep < totalQuestions) {
                questionText.innerText = questions[currentStep].text;
                updateProgress();
            } else {
                localStorage.setItem('userAnswers', JSON.stringify(answers));
                window.location.href = 'results.html';
            }
        }
    
        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                answers.push({
                    category: questions[currentStep].category,
                    score: index // 0 = Strongly Disagree, 4 = Fully Agree
                });
    
                currentStep++;
                loadNextQuestion();
            });
        });
    
        // Load the first question
        loadNextQuestion();
    }

    function displayResults() {
        const userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || [];
        
        if (userAnswers.length === 0) {
            console.warn("No results found in localStorage.");
            return;
        }
    
        // Define categories
        const categories = [
            "Submissive", "Switch", "Bondage", "Exhibitionist", "Vanilla",
            "Dominant", "Sadist", "Degradation", "Masochist", "Experimental"
        ];
    
        // Initialize category scores
        let scores = {};
        categories.forEach(category => scores[category] = 0);
    
        // Aggregate scores per category
        userAnswers.forEach(({ category, score }) => {
            if (scores.hasOwnProperty(category)) {
                scores[category] += score; // Add the score for each category
            }
        });
    
        // Apply the percentage formula: (100 * X) / 28
        Object.keys(scores).forEach(category => {
            scores[category] = Math.round((scores[category] * 100) / 28);
        });
    
        // Sort scores in descending order
        const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    
        // Get the top 3 categories
        const topCategories = sortedScores
            .slice(0, 3) // Take the top 3
            .map(([category]) => category); // Extract the category names
    
        // Map categories to books with links
        const categoryToBooks = {
            "Submissive": [
                { title: "Subspace Dos and Donts", link: "https://drive.google.com/file/d/15HxvzvJtMcNeigTFWoQ_rLxO0Y0Bvdbn/view?usp=drive_link" },
                { title: "Submissive wants and needs", link: "https://drive.google.com/file/d/1fNe0qqbzZ5tneQ6sCOH_1G5GDCgXzc1W/view?usp=drive_link" },
                { title: "The New bottoming Book", link: "https://drive.google.com/file/d/1Q3GxaCsB0OrWT49Xrs5vOrizhH_eXKDY/view?usp=drive_link" }
            ],
            "Switch": [
                { title: "The Naked Truth - Dr. Charley Ferrer", link: "https://drive.google.com/file/d/1g_bRbgwxv-J-Waw9E_vQLPRwBHCmbIYO/view?usp=drive_link" },
                { title: "Techniques Of Pleasure - Margot Weiss", link: "https://drive.google.com/file/d/1937kUVvRfr_ZSnbRkldLuVWW31QrVGmq/view?usp=drive_link" }
            ],
            "Bondage": [
                { title: "Rope Bondage Choice and Care", link: "https://drive.google.com/file/d/1IvjHNd1KTmlyeBIY4LW8-S20Q-oJRgBL/view?usp=drive_link" }
            ],
            "Exhibitionist": [], // No books provided for this category
            "Vanilla": [
                { title: "Single in the scene", link: "https://drive.google.com/file/d/1teap0wicSArkQjH9VKg3m3N9FceLZyMm/view?usp=drive_link" },
                { title: "Guide to your first munch", link: "https://drive.google.com/file/d/1GeUHaIoThW-VQaHbWRAI--M1GcOeUY2Z/view?usp=drive_link" },
                { title: "Entering the BDSM community", link: "https://drive.google.com/file/d/1_aH0lRHlb3LD5yCWFYKalXwV2n9jnwnE/view?usp=drive_link" },
                { title: "Play Partner Checklist", link: "https://drive.google.com/file/d/166Hp9DWL7ldfHyiRAFIKY_3otDrnVtQ5/view?usp=drive_link" }
            ],
            "Dominant": [
                { title: "The New Topping Book", link: "https://drive.google.com/file/d/1CyqBKRMwdLCAZvggu8upQswc2KzXc4fh/view?usp=drive_link" },
                { title: "Female Domination - Elise Sutton", link: "https://drive.google.com/file/d/1S7Vnnnjl2KETZZ3eH9PGxsRMbWXzdmeQ/view?usp=drive_link" },
                { title: "The Control Book", link: "https://drive.google.com/file/d/1_MTD2IpLikhrSitQbljLF6nKweMXcTrv/view?usp=drive_link" }
            ],
            "Sadist": [
                { title: "Baumeister (1997)", link: "https://drive.google.com/file/d/1-YPy74cVI3t3KOWk9ijiIQyTg8raWaXh/view?usp=drive_link" },
                { title: "Sadomasochism - Powerful Pleasures", link: "https://drive.google.com/file/d/1LQ2rolX4NLmwtRN-Ly__IU4EkDRzmsCr/view?usp=drive_link" }
            ],
            "Degradation": [], // No books provided for this category
            "Masochist": [
                { title: "Processing pain in play", link: "https://drive.google.com/file/d/1fo_wM9Fxd_1zGvS6Na1AXuO2NNX5BvR8/view?usp=drive_link" },
                { title: "Baumeister (1997)", link: "https://drive.google.com/file/d/1-YPy74cVI3t3KOWk9ijiIQyTg8raWaXh/view?usp=drive_link" },
                { title: "Masochism as Escape from self (Baumeister 1988)", link: "https://drive.google.com/file/d/1MTVqY2oxWGOlFZ5WKgTNs8r5HLulegVX/view?usp=drive_link" }
            ],
            "Experimental": [
                { title: "Learn how to talk dirty", link: "https://drive.google.com/file/d/1YXkMAy2lZu7geqMJpxKGInDUaDBUjWIF/view?usp=drive_link" },
                { title: "BDSM 50 Ways to Play", link: "https://drive.google.com/file/d/13UkZ-79S4zjy1er30UcjVWxcIUbVvMtv/view?usp=drive_link" }
            ]
        };
    
        // Generate reading recommendations for the top 3 categories
        const recommendations = topCategories.map(category => {
            const books = categoryToBooks[category];
            if (books && books.length > 0) {
                const randomBook = books[Math.floor(Math.random() * books.length)]; // Pick a random book
                return { category, book: randomBook };
            } else {
                return { category, book: { title: "No specific recommendation available.", link: "#" } };
            }
        });
    
        // Update the result display
        const resultsContainer = document.querySelector('#results');
        if (resultsContainer) {
            resultsContainer.innerHTML = `
                <p class="text-center text-white text-2xl">Your BDSM Orientation Results:</p>
                <div class="space-y-4">
                    ${sortedScores
                        .map(([category, percent]) => 
                            `<div class="flex justify-between items-center w-full max-w-xs mx-auto">
                                <span class="text-white text-2xl text-left">${category}:</span>
                                <span class="text-[#B392F0] text-2xl font-medium">${percent}%</span>
                            </div>`)
                        .join('')}
                </div>
                
                <div class="text-center mt-12 w-full">
                    <h3 class="text-4xl font-semibold text-[#B392F0] mb-4">Reading Recommendations</h3>
                    <p class="text-white text-2xl mt-2">Here are books that we recommend you read based on your top 3 interests</p>
                    <div class="space-y-4 mt-4">
                        ${recommendations.map(({ category, book }) => 
                            `<p class="text-white text-2xl">${category}: 
                                <a href="${book.link}" target="_blank" class="text-[#B392F0] underline hover:no-underline">
                                    ${book.title} 📖
                                </a>
                            </p>`)
                        .join('')}
                    </div>
                </div>
            `;
        }
    }
    
    function setupRetakeButton() {
        const retakeButton = document.getElementById('retakeButton');
        if (retakeButton) {
            retakeButton.addEventListener('click', () => {
                localStorage.removeItem('userAnswers'); // Clear previous answers
                window.location.href = 'index.html'; // Redirect to the title screen
            });
        }
    }
    const startButton = document.querySelector('button.bg-\\[\\#B392F0\\]');
    if (startButton) {
        startButton.addEventListener('click', () => {
            window.location.href = 'questions.html';
        });
    }
});