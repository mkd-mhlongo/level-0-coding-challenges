function getCommonChar(string1,string2) {
    var char = "";
    var commonChar = "";
    for (var a = 0; a < string1.length; a++) {
        for (var b = 0; b < string2.length; b++)
            if (string1[a] == string2[b]) {
                char += string1[a];
                
        };
    };
    char = [...new Set(char)];
    char = char.join(", ")

    for (var c = 0; c < char.length; c++) {
        commonChar += char[c];
    }
    console.log("Common Letters: " + commonChar);  
}; 

getCommonChar('house','computers');

//For task 10: The format of the result should look this: Common letters: o, u, e, s