function printOutVowels(string) {
    string = string.toLowerCase();
    var checkVowels = "aeiou";
    var vowels = "";
   
    for (var a = 0; a < checkVowels.length; a++) { 
        for (var b = 0; b < string.length; b++) 
            if (checkVowels[a] == string[b]) {
                vowels += string[b]
            }
    }
    console.log(vowels) 
};    

printOutVowels('UMUZI');
