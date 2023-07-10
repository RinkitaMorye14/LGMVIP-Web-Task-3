document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var website = document.getElementById('website').value;
    var gender = document.getElementById('gender').value;
    var img=document.getElementById('image').value;
    console.log(img);
    var card= document.querySelector('.cardList');
    var skills = [];
    var skillsCheckboxes = document.querySelectorAll('input[name="skills"]:checked');
    skillsCheckboxes.forEach(function(checkbox) {
        skills.push(checkbox.value);
    });
    var cardContent = `
        <div class="card">
        <img src="${img}" alt="Profile Image">
        <div class="card_info">
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Website: ${website}</p>
        <p>Gender: ${gender}</p>
        <p>Skills: ${skills.join(', ')}</p>
        </div>
        </div>
    `;
    

    card.insertAdjacentHTML('beforeend', cardContent);
});