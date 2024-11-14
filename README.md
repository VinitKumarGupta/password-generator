
# Password Generator

A simple password generator webpage built using HTML, CSS, and JavaScript. This tool generates a secure password with a default length of 8 characters, including uppercase letters, lowercase letters, numbers, and special characters. Users can copy the generated password directly to the clipboard.

## How to Use

1. **Generate Password**: Click on the "Generate" button. A random password of 8 characters will appear in the input field.
2. **Copy Password**: After generating a password, click on the "Copy" button. The password will be copied to your clipboard, and a message will appear showing your new password.

## Customizing the Password Length

By default, the password length is set to 8 characters. To change the length:

1. Open the `script.js` file.
2. Find this line in the `generatePassword` function:
   ```javascript
   const pwdLength = 8;
   ```
3. Change `8` to your desired password length. For example, for a 12-character password, update it to:
   ```javascript
   const pwdLength = 12;
   ```

## Modifying Character Set

The character set used for password generation includes letters, numbers, and special characters. To add or remove characters:

1. In the same `generatePassword` function, locate the `character` variable:
   ```javascript
   const character = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890?!@#$%^&*_";
   ```
2. Edit this string to include or exclude specific characters as desired.

## Running the Project Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/VinitKumarGupta/password-generator.git
   ```
2. Open `index.html` in your preferred browser.

## Technologies Used

- HTML
- CSS
- JavaScript

Feel free to fork this project and make further customizations!
