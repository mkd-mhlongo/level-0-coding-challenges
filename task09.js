function printOutVowels(string) {
    string = string.toLowerCase();
    var checkVowels = "aeiou";
    var commonChar = "";
    var vowels = "";
   
    for (var a = 0; a < checkVowels.length; a++) { 
        for (var b = 0; b < string.length; b++) 
            if (string[b] == checkVowels[a]) {
                commonChar += string[b];
                
            }
    }
    commonChar = [...new Set(commonChar)];
    commonChar = commonChar.join(", ");

    for (var c = 0; c < commonChar.length; c++) {
        vowels += commonChar[c];
    }
    console.log("Vowels: " + vowels);
};    

printOutVowels('UMUZI');


