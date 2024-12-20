let rowCount = 0;

document.getElementById("submitButton").addEventListener("click", function () {
    const mathGrade = parseFloat(document.getElementById("mathGrade").value);
    const englishGrade = parseFloat(document.getElementById("englishGrade").value);

    if (isNaN(mathGrade) || isNaN(englishGrade)) {
        alert("Please enter valid grades for Math and English.");
        return;
    }

    rowCount++;
    const tableBody = document.querySelector("#gradesTable tbody");
    const newRow = tableBody.insertRow();

    const indexCell = newRow.insertCell(0);
    const mathCell = newRow.insertCell(1);
    const englishCell = newRow.insertCell(2);
    const avgCell = newRow.insertCell(3);

    indexCell.textContent = rowCount;
    mathCell.textContent = mathGrade.toFixed(2);
    englishCell.textContent = englishGrade.toFixed(2);
    const avg = ((mathGrade + englishGrade) / 2).toFixed(2);
    avgCell.textContent = avg;

    updateFooter();
});

function updateFooter() {
    const tableBody = document.querySelector("#gradesTable tbody").rows;
    let mathSum = 0, englishSum = 0, overallSum = 0, rowCount = tableBody.length;

    for (let row of tableBody) {
        mathSum += parseFloat(row.cells[1].textContent);
        englishSum += parseFloat(row.cells[2].textContent);
        overallSum += parseFloat(row.cells[3].textContent);
    }

    const mathAvg = (mathSum / rowCount).toFixed(2);
    const englishAvg = (englishSum / rowCount).toFixed(2);
    const overallAvg = (overallSum / rowCount).toFixed(2);

    document.getElementById("mathAvg").textContent = mathAvg;
    document.getElementById("englishAvg").textContent = englishAvg;
    document.getElementById("overallAvg").textContent = overallAvg;
}
