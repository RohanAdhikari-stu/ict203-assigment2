
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Content Injection (Week 4)
    const menuContainer = document.getElementById('menu-container');
    const specials = [
        { name: "Thali", price: "$25", desc: "Rice, Aachar, Chicken/Goat,Dal,Ghee,Sweets" },
        { name: "Momo", price: "$18", desc: "Jhoal Chicken momo" },
        { name: "Chatpate", price: "$10", desc: "Veg/Non-veg" }
    ];

    const displayMenu = () => {
        menuContainer.innerHTML = specials.map(item => `
            <div class="menu-item">
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
                <strong>${item.price}</strong>
            </div>
        `).join('');
    };

    displayMenu();


    document.getElementById('menu-btn').addEventListener('click', () => {
        document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    });

    
    const bookingForm = document.getElementById('reservation-form');
    const message = document.getElementById('form-message');

    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop page reload
        
        const userName = document.getElementById('name').value;
        
        
        message.textContent = "Checking availability...";
        message.style.color = "blue";

        setTimeout(() => {
            message.textContent = `Thank you, ${userName}! Your reservation is confirmed.`;
            message.style.color = "green";
            bookingForm.reset();
        }, 1500);
    });
});
