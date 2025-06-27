document.getElementById('teacherSurvey').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const favoriteSubject = formData.get('favoriteSubject');
    const helpfulness = formData.get('helpfulness');
    const aiTools = formData.getAll('aiTools');
    
    // Validate that at least one AI tool is selected
    if (aiTools.length === 0) {
        alert('Please select at least one AI tool you have used.');
        return;
    }
    
    // Store responses (in a real application, you'd send this to a server)
    const responses = {
        favoriteSubject: favoriteSubject,
        helpfulness: helpfulness,
        aiTools: aiTools,
        timestamp: new Date().toISOString()
    };
    
    console.log('Survey Responses:', responses);
    
    // Hide form and show thank you message
    document.getElementById('survey-form').style.display = 'none';
    document.getElementById('thank-you-message').style.display = 'block';
    
    // Optional: You could send the data to a server here
    // fetch('/submit-survey', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(responses)
    // });
});

// Add hover effects to checkbox items
const checkboxItems = document.querySelectorAll('.checkbox-item');
checkboxItems.forEach(item => {
    item.addEventListener('click', function() {
        const checkbox = this.querySelector('input[type="checkbox"]');
        checkbox.checked = !checkbox.checked;
    });
});