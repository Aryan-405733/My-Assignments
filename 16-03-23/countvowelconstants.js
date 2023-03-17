function countvowelconsonants(txt) {
    let vowels = "aeiou" ;
    let consonants = "bcdfghjklmnpqrstvwxyz";
    let text =txt.toLowerCase();

    let vowel_count = 0;
    let consonant_count = 0;

    for ( const ch of text){
        if (vowels.includes(ch))
           vowel_count++;
        if (consonants.includes(ch))
                consonant_count++
    }
}
console.log('sentence= ${txt}');
console.log('vowles = ${vowel_count}');
console.log('consonants=${consonant_count}');

countvowelconsonants("how many vowels in a given sentence?");