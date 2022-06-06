const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

//Details for Vandenberg Air Force Base only.
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0]));

//print the full name. 
    d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));
// access the latitude Airforce Base
    d3.json(url).then(spaceXResults =>
        console.log(spaceXResults[0].location.latitude));

        d3.json("samples.json").then(function(data){
            console.log("hello");
        });       

// extract on the wfreq weekly belly button washing
        d3.json("samples.json").then(function(data){
            wfreq = data.metadata.map(person => person.wfreq);
            console.log(wfreq);
        });

//descending order

d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});

// delete null values from sorted.
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});


// to print each key value of pair inside an array. 
//researcher1 = {
//   name: 'Roza',
//    age: 34,
//    hobby: 'Hiking'
// }; 

console.log(Object.entries(researcher1));



researcher1 = [['name', 'Roza'], ['age', 34], ['hobby',
'Hiking']];

researcher1.forEach(([first, second]) => console.log(first
    + ": " + second));


    d3.json("samples.json").then(function(data){
        firstPerson = data.metadata[0];
        Object.entries(firstPerson).forEach(([key, value]) =>
          {console.log(key + ': ' + value);});
    });