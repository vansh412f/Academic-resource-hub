function showVideo(labId, videoUrl) {
    // Hide all sub-labs
    document.querySelectorAll('.lab').forEach(lab => {
        if (lab.id !== labId) {
            lab.querySelector('.sub-labs').style.maxHeight = '0';
        }
    });

    // Show selected sub-labs
    const selectedLab = document.getElementById(labId);
    const subLabs = selectedLab.querySelector('.sub-labs');
    subLabs.style.maxHeight = subLabs.scrollHeight + 'px';

    // Update video and info
    document.getElementById('video').src = videoUrl;
    document.getElementById('info').innerHTML = `<p>Information about the selected sub-lab will appear here.</p>`;
}
function toggleContent(contentId) {
    const content = document.getElementById(contentId);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}
