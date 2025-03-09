//Task 2 - Adding Support Tickets Dynamically
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
    //Task 3 - Converting NodeLists to Arrays for Bulk Updates
    function highlightHighPriorityTickets() {
        const highPriorityTickets = Array.from(document.querySelectorAll(".support-ticket .priority-label"));
        highPriorityTickets.forEach(priorityLabel => {
            if (priorityLabel.textContent.toLowerCase().includes("high")) {
                priorityLabel.parentElement.style.border = "5px solid #f03737";
                priorityLabel.parentElement.style.backgroundColor = "#f2daf5";
            }
        });
    }

   //Task 4 - Implementing Ticket Resolution with Event Bubbling
    ticketContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("support-ticket")) {
            console.log("A support ticket was clicked!");
        }
    });

    createSupportTicket("Lebron James", "Wifi Problem", "High");
    createSupportTicket("Stephen Curry", "Slow Wifi", "Low");
    highlightHighPriorityTickets()
});
