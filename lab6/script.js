document.addEventListener("DOMContentLoaded", () => {
    const userGrid = document.getElementById("userGrid");
    const userCount = 12;

    function fetchMultipleUsers() {
        return new Promise((resolve, reject) => {
            fetch(`https://randomuser.me/api/?results=${userCount}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Network error");
                    }
                    return response.json();
                })
                .then(data => resolve(data.results))
                .catch(error => reject(error));
        });
    }

    function displayUsers(users) {
        const userHTML = users.map(user => `
            <div class="user-card">
                <img src="${user.picture.large}" alt="User Picture">
                <h3>${user.name.first} ${user.name.last}</h3>
                <p>Місто: ${user.location.city}</p>
                <p>Країна: ${user.location.country}</p>
                <p>Поштовий індекс: ${user.location.postcode}</p>
            </div>
        `).join('');
        userGrid.innerHTML = userHTML;
    }

    fetchMultipleUsers()
        .then(displayUsers)
        .catch(error => console.error("Помилка:", error));
});
