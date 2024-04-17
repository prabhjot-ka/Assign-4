document.addEventListener("DOMContentLoaded", async function () {
    const studentInfo = document.getElementById("student-info");
    const resultDiv = document.getElementById("result");

    // Step 2: Dynamically add student number and student name
    const studentNumber = "200554143";
    const studentName = "Prabhjot Kaur";
    studentInfo.textContent = `Student Number: ${studentNumber} | Name: ${studentName}`;

    const url = 'https://love-calculator.p.rapidapi.com/getPercentage?sname=Alice&fname=John';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2235f87f57mshca1bef4536702bfp104fecjsn8732384db4da',
            'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        resultDiv.textContent = result;
    } catch (error) {
        console.error(error);
        resultDiv.textContent = "An error occurred while fetching data.";
    }
});
