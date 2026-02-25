<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form>
        <h1> Event Registration form</h1>
        <label for="Name">Name:</label>
        <br>
        <input type="text" id="Name">
        <br>
        <label for="Email">Email:</label>
        <br>
        <input type="email" id="Email">
        <br>
        <label for="Phone Number">Phone:</label>
        <br>
        <input type="tel" id="Phone Number">
        <br>
        <label for="Occupation">Occupation:</label>
        <br>
        <select name="Occupation" id="Occupation">
            <option value="Buisness">Business</option>
            <option value="Corporate">Corporate</option>
        </select>
        <br>
        <label for="Interest">Topics of interest:</label>
        <br>
        
        <label for="Interest">HTML</label>
        <br>
        <input type="checkbox" id="CSS" >
        <br>
        <label for="CSS">CSS</label>
        <br>
        <input type="checkbox" id="JS" >
        <br>
        <label for="JS">Js</label>
        <br>
        <label for="Comment">Comment:</label>
        <br>
        <textarea name="Comment" id="Comment" rows="15" cols="30"></textarea>
        <button>Register</button>

    </form>

    <form>
        <h1>Complex form</form></h1>
        <fieldset>
            <legend>
                Personal Information
            </legend>
            <label for="name">Name:</label>
            <input type="text" id="name">
            <label for="email">Email:</label>
            <input type="email" id="email">
            <label for="Phone">Phone:</label>
            <input type="tel" id="email">
            <label for="DOB">DOB:</label>
            <input type="date" id="DOB">
            <label for="Gender">Gender:</label>
            <input type="radio" id="Gender" name="M/F">
            <label for="Gender">Male</label>
            <input type="radio" id="Female" name="M/F">
            <label for="Female">FeMale</label>
            <label for="Country">Country</label>
            <select name="Country" id="Country">
                <option value="US">US</option>
                <option value="India">India</option>
                <option value="UK">UK</option>
                <option value="China">China</option>
            </select>
        </fieldset>
        <fieldset>
            <legend>Address</legend>
            <label for="Street">Street:</label>
            <input type="text" id="Street">
            <label for="City">City:</label>
            <input type="text" id="City">
            <label for="State">State:</label>
            <input type="text" id="State">
            <label for="Pin">ZIP code:</label>
            <input type="tel" id="Pin">
        </fieldset>
        <fieldset>
            <legend>Other Information</legend>
            <label for="Comment">Comment</label>
            <textarea name="Comment" id="Comment"></textarea>
            <label for="Condition">I agree to terms and services</label>
            <input type="checkbox" id="Condition">
        </fieldset>
        <button>submit</button>
    </form>
</body>
</html>
