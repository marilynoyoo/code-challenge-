   # CODE CHALLENGE
   # Student-Grade-Generator-
    Grade Marks Function
    This function gradeMarks() allows a user to input their marks and outputs the corresponding grade based on predefined ranges.

    How It Works
    Input Prompt: The user is prompted to enter their marks.
    Validation:
    If the user does not enter any value, they are prompted to enter a value.
    If the entered marks are not between 0 and 100, the user is alerted to enter a value within this range.
    Grade Determination:
    Marks greater than 79 result in 'Grade A'.
    Marks between 60 and 79 result in 'Grade B'.
    Marks between 50 and 59 result in 'Grade C-'.
    Marks between 40 and 49 result in 'Grade D-'.
    Marks 39 and below result in 'Grade E-'.
    Usage
    To use this function, call gradeMarks() and input your marks when prompted. The function will display the corresponding grade based on the input marks.
    Notes
    Ensure valid marks (between 0 and 100) are entered for accurate grading.
    Grades are determined based on inclusive ranges defined in the function.

   # Net Salary Calculation
    This script calculates the net salary based on input values such as salary, benefits, and year of taxation.

    How It Works
    Input Prompt: Prompts the user to enter their salary, benefits, and year of taxation.
    Validation:
    Checks if the entered values are numeric and greater than zero.
    Validates the year of taxation to ensure it falls within acceptable ranges.
    Tax Calculation:
    Based on the year of taxation and whether taxes are calculated monthly or yearly, appropriate functions (calculatePayeeMonthlyTwoThree, calculatePayeeYearlyTwoThree, calculatePayeeMonthlyTwoOne, calculatePayeeYearlyTwoOne) are called to compute the Pay As You Earn (PAYE) tax.
    NHIF Deduction: Calculates the deduction based on the provided benefits.
    NSSF Deduction: Computes the National Social Security Fund (NSSF) deduction based on the monthly salary and year of payment.
    Usage
    Call the netSalary() function to begin.
    Input your salary, benefits, and year of taxation as prompted.
    Follow the prompts to specify whether taxes should be calculated monthly or yearly.
    Example
    If a user enters:

    Salary: 60000
    Benefits: 25000
    Year of taxation: 2023
    Tax type: Monthly
    The output would include:

    Monthly PAYE (Tax): ...
    NHIF deduction: ...
    NSSF deduction: ...
    Notes
    Ensure accurate input values to receive correct calculations.
    The script handles different tax brackets and deductions based on the specified conditions for each year of taxation.
    This script aims to provide accurate calculations for determining net salary after tax and deductions based on Kenyan tax laws and regulations. Adjustments may be necessary for specific scenarios or updates to tax legislation.

   # Car Speed Detector
This function, CarspeedDetector(), prompts the user to input their car speed and evaluates it against a predefined speed limit. It also includes a conditional check for license suspension based on accumulated points.

How It Works
Input Prompt: Prompts the user to enter their car speed.
Validation:
Checks if a value is entered and ensures it is a valid number greater than zero.
Converts the input into a numeric format for comparison.
Speed Evaluation:
Determines if the speed is within the acceptable range (<= 70), in which case it logs "Ok".
License Suspension Check:
If points accumulate to >= 12, it logs "License suspended".
Usage
Call the CarspeedDetector() function to begin.
Enter the car speed when prompted.
Observe the output based on the speed relative to the speed limit and any accumulated points.
Example
If a user enters a speed of 65:

Output would be "Ok".
If a user enters a speed of 90:

Output would depend on the number of points accumulated. If points reach 12 or more, it would log "License suspended".
Notes
Ensure valid input to accurately assess speed and points.
Adjustments may be needed depending on specific legal requirements or regulations related to speed limits and license points.
This function provides a basic mechanism to evaluate car speeds and potential license suspension based on predefined conditions.









