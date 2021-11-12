function introduction(name) {
    return `Hi, my name is ${name}.`
 }
introduction("Tal")

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
introductionWithLanguage("Tal", "JavaScript");

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
introductionWithLanguageOptional("Tal", "HTML");
