let pronouns = ["the", "our", "my", "your", "their", "this", "that"];

let adjectives = ["great", "big", "super", "cool", "smart", "fast", "green", "blue", "shiny", "mega"];

let nouns = ["Jogger", "Racoon", "Coder", "Services", "Origin", "Website", "Hub", "README"];

let extensions = [".com", ".net", ".us", ".io", ".org", ".in", ".es", ".tech", ".me"];



for (let pron of pronouns) {
  for (let adj of adjectives) {
    for (let nou of nouns) {
      for (let ext of extensions) {

        let tempNoun = nou;
        let onlyExtension = ext.slice(1);

        if(nou.toLowerCase().endsWith(onlyExtension)) tempNoun = nou.slice(0, -onlyExtension.length);
         
        console.log(`${pron}${adj}${tempNoun}${ext}`);  
      }
    }
  }
}
