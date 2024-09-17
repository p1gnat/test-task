export function generatePasswords(
  passwordLength: number,
  useBigLetters: boolean,
  useSmallLetters: boolean,
  useNumbers: boolean,
  useSpecialSymbols: boolean,
  avoidRepetition: boolean
): string[] {
  const bigletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const smallLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialSymbols = "!@#$%^&*()_+{}[]<>?";

  let availableCharacters = "";

  if (useBigLetters) availableCharacters += bigletters;
  if (useSmallLetters) availableCharacters += smallLetters;
  if (useNumbers) availableCharacters += numbers;
  if (useSpecialSymbols) availableCharacters += specialSymbols;

  const uniqueCharacterCount = availableCharacters.length;

  // Check if we have enough characters to generate passwords without repetition

  // Function to generate a single password
  const generateSinglePassword = () => {
    let password = "";
    const usedCharacters = new Set<string>();

    for (let i = 0; i < passwordLength; i++) {
      let randomChar;

      if (avoidRepetition && passwordLength > uniqueCharacterCount) {
        return "Нехватает символов для 'Избегать повторения символов'";
      }

      do {
        randomChar =
          availableCharacters[
            Math.floor(Math.random() * availableCharacters.length)
          ];
      } while (avoidRepetition && usedCharacters.has(randomChar));

      password += randomChar;
      if (avoidRepetition) usedCharacters.add(randomChar);
    }

    return password;
  };

  // Generate 5 passwords
  return Array.from({ length: 5 }, generateSinglePassword);
}
