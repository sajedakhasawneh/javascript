function displayUsers(){
    fetch("data.json")
    .then((response) => response.json())
    .then((data) => {

        const showData = document.getElementById("show");
    
        for (const user of data) {
            
            const userCard = document.createElement('div');
    
            userCard.innerHTML = `
              <div class="child">
              <h4>${user.name}</h4>
              <p><strong>Phone:</strong> ${user.age}</p>
              <p><strong>Email:</strong><br> ${user.email}</p>
              <p><strong>Profession</strong> ${user.profession}</p>
              </div>
            `;
    
            showData.appendChild(userCard);
        }
      })

}