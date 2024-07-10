function gradeMarks() {
    //Prompt the user for marks
    const marks = prompt("Enter your marks");
    //Check if user entered the correct grade
    
    const studentMarks = parseInt(marks);
    if (studentMarks === null || studentMarks === ""){
        alert("Please enter a value");
        //Check if the marks are between 0 and 100
    }else if (studentMarks < 0 || studentMarks > 100) {
        alert("Please enter a value between 0 and 100");
        //Provide the appropriate grade based on the input marks
    }else if (studentMarks >79) {
        console.log('Grade A');
        return;
    }else if (studentMarks >=60 && studentMarks <=79) {
        console.log('Grade B');
        return;   
    }else if (studentMarks >49 && studentMarks <=59) {
        console.log('Grade C-');
        return;
    }else if (studentMarks >=40 && studentMarks<=49) {
        console.log('Grade D-')
        return;
    }else {
        console.log('Grade E-')
        return;
    }
}
