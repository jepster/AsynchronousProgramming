let endangeredAnimalsDB = [
    {
        common_name: "saola",
        conservation_status: "critical",
        species: "Pseudoryx nghetinhensis",
        region: "Greater Mekong",
        population: null,
    },
    {
        common_name: "amur leopard",
        conservation_status: "critical",
        species: "Panthera pardus orientalis",
        region: "Amur-Heilong",
        population: "more than 84",
    },
    {
        common_name: "vaquita",
        conservation_status: "critical",
        species: "Phocoena sinus",
        region: "Gulf of California",
        population: null,
    },
    {
        common_name: "Javan rhino",
        conservation_status: "critical",
        species: "Rhinoceros sondaicus",
        region: "Java, Indonesia",
        population: "58-68",
    },
    {
        common_name: "green turtle",
        conservation_status: null,
        species: "Chelonia mydas",
        region: [ "Mesoamerican Reef", "Coastal East Africa", "Gulf of California", "The Galápagos", "Coral Triangle"],
        population: null,
    }
];

const animalsByConservationStatus = (status) => {
    const results = endangeredAnimalsDB.filter(a => a.conservation_status === status);

    if(results.length > 0) {
        return results;
    } else {
        throw new Error(`no animals found with status: ${status}`);
    };
};

const fetchAnimalByName = (name) => {
    const results = endangeredAnimalsDB.find(a => a.common_name === name);

    if (results !== undefined) {
        return results;
    } else {
        throw new Error(`no animal found with name: ${name}`);
    };
};

// ------------------------------------------------------------------
// Challenge 1
// Wrap the following code in a try catch block
// Make sure the functionality stays the same

const printStatusMessage = (status) => {
    const animalsList = animalsByConservationStatus(status);
    let names = animalsList.map(animal => animal.common_name)
    message = `Animals listed as ${status} are: ${names.join(', ')}`;
    console.log(message);
}
try {
    printStatusMessage("extinct");  // failure case
} catch(err) {
    console.log(err);
}
printStatusMessage("critical"); // success case


// ------------------------------------------------------------------
// Challenge 2
// Wrap the following code in a try catch block
// Make sure the functionality stays the same

endangeredAnimals = ["saola", "green turtle", "amur leopard", "deer"];

const printAnimalMessage = (animal) => {
    const info =  fetchAnimalByName(animal);
    const message = `The ${info.common_name} has an endangered status of ${info.status}`;
    console.log(message);
};

endangeredAnimals.forEach(animal => {
    try {
        printAnimalMessage(animal)
    } catch(err) {
        console.log(err);
    }
});

// ------------------------------------------------------------------
// Challenge 3
// Wrap the following code in a try catch block
// Make sure the functionality stays the same

animal1 = "vaquita";
animal2 = "mouse";

const printAnimalFacts = (animal) => {
    const data = fetchAnimalByName(animal);
    const message = `The ${data.common_name} (${data.species}) is an endangered animal with ${data.population} individuals in the wild in their home region of ${info.region}`;
    console.log(message);
    console.log(`Search completed: ${animal}`)
};

try {
    printAnimalFacts(animal1);
    printAnimalFacts(animal2);
} catch(err) {
    console.log(err);
}