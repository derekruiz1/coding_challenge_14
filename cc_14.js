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

        //Task 5 - Edit Button
        const editButton = document.createElement("button");
        editButton.setAttribute("class", "edit-button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => enableEditing(ticket, nameHeading, issueParagraph, priorityLabel, editButton));
        ticket.appendChild(editButton);

        ticket.appendChild(resolveButton);

        ticketContainer.appendChild(ticket);
    } 

        //Task 5 - Inline Editing of Support Tickets 
    function enableEditing(ticket, nameElement, issueElement, priorityElement, editButton) {
        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.value = nameElement.textContent;

        const issueInput = document.createElement("input");
        issueInput.type = "text";
        issueInput.value = issueElement.textContent;

        const priorityInput = document.createElement("input");
        priorityInput.type = "text";
        priorityInput.value = priorityElement.textContent.replace("Priority: ", "");

        ticket.replaceChild(nameInput, nameElement);
        ticket.replaceChild(issueInput, issueElement);
        ticket.replaceChild(priorityInput, priorityElement);

        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.setAttribute("class", "save-button");
        saveButton.addEventListener("click", () => saveEdits(ticket, nameInput, issueInput, priorityInput, editButton, saveButton));
        ticket.appendChild(saveButton);

        editButton.style.display = "none";
    }

    function saveEdits(ticket, nameInput, issueInput, priorityInput, editButton, saveButton) {
        const updatedName = document.createElement("h3");
        updatedName.textContent = nameInput.value;

        const updatedIssue = document.createElement("p");
        updatedIssue.textContent = issueInput.value;

        const updatedPriority = document.createElement("span");
        updatedPriority.setAttribute("class", "priority-label");
        updatedPriority.textContent = `Priority: ${priorityInput.value}`;

        ticket.replaceChild(updatedName, nameInput);
        ticket.replaceChild(updatedIssue, issueInput);
        ticket.replaceChild(updatedPriority, priorityInput);

        editButton.style.display = "inline-block"; 
        saveButton.remove();
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
