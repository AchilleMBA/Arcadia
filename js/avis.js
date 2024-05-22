document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var pseudo = document.getElementById('pseudo').value;
    var avis = document.getElementById('avis').value;
    
    document.getElementById('pseudoDisplay').innerText = "Pseudo : " + pseudo;
    document.getElementById('avisDisplay').innerText = "Votre avis : " + avis;
    
    document.getElementById('commentDisplay').style.display = 'block';
    
    // Optionally, you can reset the form
    this.reset();
});