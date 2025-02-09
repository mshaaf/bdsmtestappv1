document.addEventListener('DOMContentLoaded', () => {
    let currentStep = 0;
    let answers = [];

    if (window.location.pathname.includes('questions.html')) {
        setupQuestionPage();
    } else if (window.location.pathname.includes('results.html')) {
        displayResults();
    }

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

    function setupQuestionPage() {
        const questionText = document.querySelector('h2');
        const questionContainer = document.querySelector('.space-y-4');

        if (!questionContainer || !questionText) return;

        const buttons = questionContainer.querySelectorAll('button');
        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                answers.push({
                    category: questions[currentStep].category,
                    score: index // 0 = Strongly Disagree, 4 = Fully Agree
                });

                if (currentStep < questions.length - 1) {
                    currentStep++;
                    questionText.innerText = questions[currentStep].text;
                } else {
                    localStorage.setItem('userAnswers', JSON.stringify(answers));
                    window.location.href = 'results.html';
                }
            });
        });
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
    
        // Update the result display
        const resultsContainer = document.querySelector('#results');
        if (resultsContainer) {
            resultsContainer.innerHTML = `
                <p class="text-center text-white text-lg">Your BDSM Orientation Results:</p>
                <div class="space-y-4">
                    ${Object.entries(scores)
                        .map(([category, percent]) => 
                            `<p class="text-white text-lg">${category}: <span class="text-purple-600">${percent}%</span></p>`)
                        .join('')}
                </div>
            `;
        }
    }

    const startButton = document.querySelector('button.bg-primary');
    if (startButton) {
        startButton.addEventListener('click', () => {
            window.location.href = 'questions.html';
        });
    }
});