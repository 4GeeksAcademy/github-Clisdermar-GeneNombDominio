let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon", "caminacom"];
let extension = [".com", ".es"];

function generateDomainNames() {
  let domainNames = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let m = 0; m < extension.length; m++) {
          let domainName;

          let extensionMatch = extension[m].replace(".", "");
          if (noun[k].endsWith(extensionMatch)) {
            let modifiedNoun = noun[k].slice(0, -extensionMatch.length);
            domainName = pronoun[i] + adj[j] + modifiedNoun + extension[m];
          } else {
            domainName = pronoun[i] + adj[j] + noun[k] + extension[m];
          }

          domainNames.push(domainName);
        }
      }
    }
  }

  return domainNames;
}

let result = generateDomainNames();

result.forEach(function(valores, index) {
  console.log(valores, index);
});
