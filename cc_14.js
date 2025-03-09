document.addEventListener("DOMContentLoaded", () => {
    const ticketContainer = document.getElementById("ticketContainer");

    function createSupportTicket(name, issue, priority) {
        const ticket = document.createElement("div");
        ticket.setAttribute("class", "support-ticket");

        // Customer Name
        const nameHeading = document.createElement("h3");
        nameHeading.textContent = name;
        ticket.appendChild(nameHeading);

        // Issue description
        const issueParagraph = document.createElement("p");
        issueParagraph.textContent = issue;
        ticket.appendChild(issueParagraph);

        // Priority level
        const priorityLabel = document.createElement("span");
        priorityLabel.setAttribute("class", "priority-label");
        priorityLabel.textContent = `Priority: ${priority}`;
        ticket.appendChild(priorityLabel);

        // Resolve Button
        const resolveButton = document.createElement("button");
        resolveButton.setAttribute("class", "resolve-button");
        resolveButton.textContent = "Resolve";
        resolveButton.addEventListener("click", function () {
            ticket.remove();
        });
        ticket.appendChild(resolveButton);

        ticketContainer.appendChild(ticket);
    }

    createSupportTicket("Lebron James", "Wifi Problem", "High");
    createSupportTicket("Stephen Curry", "Slow Wifi", "Low");
});
