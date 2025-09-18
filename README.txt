Author: [Your Name]
Registration Number: [Your Reg No]

Tested Browsers:
- Google Chrome (Version X.X)
- Mozilla Firefox (Version X.X)
- Microsoft Edge (Version X.X)

Test Case Results:
1. Registration Mandatory Validation:
   - Test: Clicked "Register" with empty form.
   - Result: Form was blocked from submission, and HTML5 validation messages appeared for required fields. ✅

2. Email & Phone Pattern Validation:
   - Test: Entered "test" into email and "123" into phone.
   - Result: Both fields showed a browser-level validation error "Please enter a valid email address" and "Please match the requested format." ✅

3. File Upload Validation:
   - Test: Attempted to upload a .exe file.
   - Result: The file dialog only allowed image files due to 'accept="image/*"'. The .exe file could not be selected. Attempted to upload a .png file and it was accepted. ✅

4. Progress Element:
   - Test: Filled out various fields (name, email, etc.).
   - Result: The progress bar dynamically updated its value from 0% to a higher percentage as fields were filled. ✅

5. JavaScript Calculator:
   - Test: Entered Height: 175 cm, Weight: 70 kg in BMI calculator.
   - Result: The BMI was correctly calculated as 22.86. ✅

6. jQuery Interaction:
   - Test: Typed values into the EMI calculator inputs.
   - Result: The EMI result dynamically updated with each key press (.keyup event). Changed values also updated the result (.change event). ✅