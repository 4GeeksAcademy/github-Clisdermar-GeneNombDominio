let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

function generateDomainNames() {
  let domainNames = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        let domainName = pronoun[i] + adj[j] + noun[k] + '.com';
        domainNames.push(domainName);
      }
    }
  }

  return domainNames;
}

let result = generateDomainNames();
console.log(result);