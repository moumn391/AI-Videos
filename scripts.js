function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function generateVideo() {
    let prompt = document.getElementById('videoPrompt').value;
    if (prompt) {
        document.getElementById('output').innerText = `Generating video for: "${prompt}"...`;
        document.getElementById('loading').style.display = 'block';
        setTimeout(() => {
            document.getElementById('loading').style.display = 'none';
            let videoGallery = document.getElementById('videoGallery');
            let videoCard = document.createElement('div');
            videoCard.classList.add('video-card');
            videoCard.innerHTML = `<p>Video: "${prompt}"</p><video controls width="100%"><source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"></video>`;
            videoGallery.appendChild(videoCard);
            document.getElementById('output').innerText = `Video generated for: "${prompt}"`;
        }, 3000);
    } else {
        alert("Please enter a video idea!");
    }
}

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username && password) {
        alert("Login successful! Feature coming soon.");
    } else {
        alert("Please enter valid credentials.");
    }
}
