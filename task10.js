function getCommonChar(string1,string2) {
    var commonChar = ""
    for (var a = 0; a < string1.length; a++) {
        for (var b = 0; b < string2.length; b++)
            if (string1[a] == string2[b]) {
                commonChar += string1[a];
            
        };
    };
    console.log(commonChar)    
}; 

getCommonChar('house','computers');
