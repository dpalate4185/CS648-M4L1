// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.getElementById("addForm");
const empTable = document.getElementById("employees");
const empCountOutput = document.getElementById("empCount");
const empIdField = document.getElementById("id");

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {

    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    const empId = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const ext = document.getElementById("extension").value;
    const email = document.getElementById("email").value;
    const dept = document.getElementById("department").value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let row = empTable.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellId = row.insertCell();
    let cellName = row.insertCell();
    let cellExt = row.insertCell();
    let cellEmail = row.insertCell();
    let cellDept = row.insertCell();
    let cellDelete = row.insertCell();

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellId.appendChild(document.createTextNode(empId));
    cellName.appendChild(document.createTextNode(name));
    cellExt.appendChild(document.createTextNode(ext));
    cellEmail.appendChild(document.createTextNode(email));
    cellDept.appendChild(document.createTextNode(dept));

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "btn btn-danger btn-sm";

    cellDelete.appendChild(deleteBtn);

    // DELETE EMPLOYEE
    deleteBtn.addEventListener("click", function (e) {
        if (confirm("Are you sure you want to delete this employee?")) {

            let rowToDelete = e.target.parentNode.parentNode;
            empTable.deleteRow(rowToDelete.rowIndex);

            count--;
            empCountOutput.textContent = count;
        }
    });

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    empIdField.focus();

    // INCREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    empCountOutput.textContent = count;

});
