document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const root = document.getElementById('root');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const contact = form.contact.value.trim();
        const address = form.address.value.trim();

        // Simple form validation
        if (name === "" || email === "" || contact === "" || address === "") {
            alert("Please fill in all fields");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address");
            return;
        }

        if (!validateContact(contact)) {
            alert("Please enter a valid contact number");
            return;
        }

        if (!validateAddress(address)) {
            alert("Please enter a valid address containing only letters and spaces");
            return;
        }

        // Hide the form
        form.classList.add('hidden');

        // Render the card
        renderCard(name, email, contact, address);
    });

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    const validateContact = (contact) => {
        // Validate contact number: Must be digits and length 10
        const re = /^\d{10}$/;
        return re.test(contact);
    }

    const validateAddress = (address) => {
        // Validate address: Must contain only letters and spaces
        const re = /^[A-Za-z\s]+$/;
        return re.test(address);
    }

    const renderCard = (name, email, contact, address) => {
        root.setAttribute('class', 'card');
        root.innerHTML = `
            <h3 class='name'>Name: ${name}</h3>
            <h3 class='email'>Email: ${email}</h3>
            <h3 class='contact'>Contact: ${contact}</h3>
            <h3 class='address'>Address: ${address}</h3>
        `;
    }
});
