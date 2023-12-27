
// ### First Project JavaScript:

// ## 1 - Instructions:
// - Create a folder named: first_project_js_firstName_lastName
// - Create a repository with the same name as the folder
// - Adhere to the folder structure
// - Individual work
// - Minimum of 10 commits
// - Deadline: One day
// - Use of object classes, arrays, functions, prompts, etc.

// ## 2 - Project Objective:
// - Create a JavaScript program that simulates logging into a bank account using only the console to interact with the user.

// ## 3 - Instructions:
// - Account Creation and Management:
//     + Allow the user, via prompts, to choose between signing up, logging in, or changing the password.
//     + If the user only writes "exit," they exit the current process, and the choice question is asked again.
//&
let ask = prompt(`choose to log in / sign up / change password`)

//         * If the user chooses to sign up, here are the details they must enter:
//             # Name (Full):
//             - Check for leading or trailing spaces.
//             - The first letter should be capitalized.
//             - After each space, the first letter should remain capitalized.
//             - Check that all other characters are in lowercase.
//             - Do not save the Name if it has less than 5 characters (excluding spaces).
//             - Do not save the Name if it contains numbers, "@", or similar special characters.
//&
if (ask=== `sign up`) {
    let userdatabase =[
        {
            Username:`wissalu`,
            Name:`wissal`,
            Email:`chi7aja@gmail.com`,
            Password:`123456`,
        }
    ]
    
    let Username = prompt(`gimme ur username`)
    for (let index = 0; index < userdatabase.length; index++) {
        const element = userdatabase[index];
        while (Username==element.Username) {
            Username= prompt(`username must be unique`)
        }
    }
    
    
    //! Name
    //! check ittt at home
    let Name = prompt(`gimme ur Name`)
    Name = Name.trim().split(' ')
    for (let index = 0; index < Name.length; index++) {
        Name[index] = Name[index][0].toUpperCase() + Name[index].slice(1);
        
    }
    Name= Name.join(` `)

    //! email
    let Email = prompt(`gimme ur email`)
    Email= Email.trim()
    Email=Email.toLowerCase()
    if (Email.length<=10 ) {
        prompt(`ur email must countain at least 10 charachter`)
    }
    for (let index = 0; index < userdatabase.length; index++) {
        const element = userdatabase[index];
        while (Email == element.Email) {
            Email = prompt(`email must be unique`);
        }
    }
    //! age
    let Age = prompt(`gimme ur age`);
    //! dont understand it (returns true if a value is Not-a-Number)
    //^ isNaN meaning it tries to convert the argument to a number before checking if it's NaN
        while (Age.includes(" ") || Age.length >= 3 ||isNaN(Age) ) {
            Age = prompt("gimmeeeeeeeeeeeeeeeee ur age")
        }
//&
    //! password

    let Password = prompt(`gimme ur password`)

    // while (Password.includes(" ") || Password.length<=7 || Password.includes("@"||"-"||"+"||"/"||"#") == false) {
    //     Password= prompt(`try another password`)
    // }
    // let Password = prompt(`Give me your password`);
    if (!/(?=.*[@#\-+*\/])(?=.*[a-zA-Z])/.test(Password) || Password.length < 7) {
        alert(`Incorrect! Password should contain at least one special character and be at least 7 characters long`);
    }
//& 
//! confirmation
let confirmp = prompt(`gimme ur confirm pass`)
    if (confirmp != Password) {
        alert(`incorrect pass`)
    }

    
let user = (username,name,email,password)=>{
    let userinfo ={
        Name:name,
        Username:username,
        Email:email,
        Password:password
    }
    userdatabase.push(userinfo)
    console.table(userdatabase);
}

user(Name,Username,Email,Password)  
}
//             # Email:
//             - Check for leading or trailing spaces.
//             - Convert all letters to lowercase.
//             - Do not save the Email if it has spaces in the middle.
//             - Do not save the Email if it has fewer than 10 characters (excluding spaces).
//             - Do not save the Email if it does not contain exactly one "@" symbol.
//             - Ensure the email is unique.

//             # Age:
//             - Check for leading, trailing, or middle spaces.
//             - Verify that only digits are entered.
//             - Do not save the Age if it has 0 characters, or if it has 3 characters or more.

//             # Password:
//             - Check for leading or trailing spaces.
//             - Do not save the Password if it has spaces in the middle.
//             - Require at least one special character from the set: ["@", "#", "-", "+", "*", "/"].
//             - Require at least 7 characters to confirm the password.

//             # Password_confirmed:
//             - The user must re-enter their exact password; otherwise, they are blocked.


//         * If the user chooses to log in, here are the details they must enter:
//             # Email:
//             - Check if the email exists in our Database.

//             # Password:
//             - Check if the entered password is associated with the previously entered email.
        //&loging
        else if (ask == `log in`){
        authenticateUser =(loginEmail,loginPassword)=>{
            let loginEmail = prompt(`gimme ur loging username`)
            if (loginEmail.length==0) {
                loginEmail = prompt(`loging Email cannot be empty`)
            }
            else if (loginEmail != Email) {
                prompt(`there is no user with this Email`)
            }
            //& check if the email exists in database
            for (let index = 0; index < userdatabase.length; index++) {
                const element = userdatabase[index];
                while (Username==element.Username) {
                    Username= prompt(`username must be unique`)
                }
    
            let loginPassword = prompt(`gimme ur loging password`)
            if (loginPassword.length==0) {
                loginPassword = prompt(`loging password cannot be empty`)
            }
            else if (loginPassword != Password) {
                prompt(`there is no user with this password`)
            }
            }
            }
        }
        authenticateUser(Email,Password)
//         * If the user chooses to change the password:
//             - They must enter their existing Email in the Database.
//&

//         * After the user logs in, display the amount they have in their bank (user's choice) and offer them services:
//             # Logout:
//             - If the user chooses this option, they are logged out and offered the option, as at the beginning, to sign up, log in, or change the password.
            
//             # Withdraw Money:
//             - If the user chooses this option, they can withdraw an amount from their bank (not exceeding the available amount).
            
// !            # Deposit Money: ch7al bgha ydkhl d money maximum 1000dh f kula mera 
//             - If the user chooses this option, they can deposit the desired amount (not exceeding 1000 dirhams).
//!            ky3awd ytle3 lih ch7al 3ndu f ammount u wch bgha ydir logout
//             # Take a Loan:
//!              my9derch yakhed loan kter mn 20% mn dkchi li 3ndu 
//             - If the user chooses this option, they can take a loan up to 20% of what they already have.
//             - They receive an additional 20%, but lose 10% with each login until reaching the amount of their loan.
//!             kula mra dar login kanakhdu lih 10% mn ammout dyalu
//             # Invest:
//             - If the user chooses this option, they can invest any amount in the bank.
//             - Upon the next login, they will receive 20% of their investment each time until reaching 120% (earning 20% on each investment).
//!             ida bgha y investi 1000dh kula mera ghaydir login ghaydzadu 20% l ammout dyalu 7ta ywsel l 120% 
//             # History:
//             - Ability to view the entire transaction history.

















