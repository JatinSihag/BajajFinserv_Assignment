import express from 'express';

const app = express();
app.use(express.json());

const USER_FULL_NAME = 'jatin_sihag';
const USER_DATE_OF_BIRTH = '25062004';
const USER_EMAIL = 'jatin456.be22@chitkara.edu.in';
const USER_ROLL_NUMBER = '2210990456';

function isNumber(str) {
  return /^-?\d+$/.test(str);
}

function isAlphabet(str) {
  return /^[a-zA-Z]+$/.test(str);
}

function containsSpecialCharacters(str) {
  return !isNumber(str) && !isAlphabet(str);
}

function isEven(numStr) {
  return parseInt(numStr, 10) % 2 === 0;
}

function isOdd(numStr) {
  return parseInt(numStr, 10) % 2 !== 0;
}

function applyAlternatingCapsReverse(str) {
  const reversedChars = str.split('').reverse();
  return reversedChars.map((char, index) =>
    index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
  ).join('');
}

app.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: 'Invalid input: Request body must contain a "data" array.'
      });
    }

    const evenNumbers = [];
    const oddNumbers = [];
    const alphabets = [];
    const specialCharacters = [];
    let sumOfNumbers = 0;
    let concatenatedAlphabets = '';

    data.forEach(item => {
      const itemString = String(item);

      if (isNumber(itemString)) {
        if (isEven(itemString)) {
          evenNumbers.push(itemString);
        } else {
          oddNumbers.push(itemString);
        }
        sumOfNumbers += parseInt(itemString, 10);
      } else if (isAlphabet(itemString)) {
        alphabets.push(itemString.toUpperCase());
        concatenatedAlphabets += itemString;
      } else if (itemString.length > 0) {
        specialCharacters.push(itemString);
      }
    });

    const transformedAlphabetString = applyAlternatingCapsReverse(concatenatedAlphabets);

    res.status(200).json({
      is_success: true,
      user_id: `${USER_FULL_NAME.toLowerCase()}_${USER_DATE_OF_BIRTH}`,
      email: USER_EMAIL,
      roll_number: USER_ROLL_NUMBER,
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
      special_characters: specialCharacters,
      sum: sumOfNumbers.toString(),
      concat_string: transformedAlphabetString
    });
  } catch (error) {
    console.error('Error processing BFHL request:', error);
    res.status(500).json({
      is_success: false,
      message: 'An unexpected server error occurred. Please try again later.'
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running successfully on port ${PORT}`);
  console.log('Access the API at http://localhost:' + PORT + '/bfhl');
});