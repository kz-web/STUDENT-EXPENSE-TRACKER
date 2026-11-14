const form = document.getElementById("expenseForm");
const expenseList = document.getElementById("expenseList");
const totalElement = document.getElementById("total");

let expenses =
    JSON.parse(localStorage.getItem("expenses"))
    || [];

renderExpenses();

form.addEventListener("submit", function(e){

    e.preventDefault();

    const description =
        document.getElementById("description").value;

    const amount =
        Number(document.getElementById("amount").value);

    const category =
        document.getElementById("category").value;

    const expense = {
        description,
        amount,
        category
    };

    expenses.push(expense);

    saveExpenses();

    renderExpenses();

    form.reset();
});

function saveExpenses(){

    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );
}

function renderExpenses(){

    expenseList.innerHTML = "";

    let total = 0;

    expenses.forEach(expense => {

        total += expense.amount;

        const li = document.createElement("li");

        li.textContent =
            `${expense.description} -
             Ksh ${expense.amount} -
             ${expense.category}`;

        expenseList.appendChild(li);
    });

    totalElement.textContent = total;
}