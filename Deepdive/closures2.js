function centralGovtGiveMeANewState() {
    let stateCount = 29;
    // console.log("count is ", stateCount);
    return function state() {
        stateCount++;  // increment
        console.log("I am a new state created and total states in the country are ", stateCount);
    }
    
}

let newStateGovt = centralGovtGiveMeANewState();
// let Chattisgarh = centralGovtGiveMeANewState();

// newStateGovt = function state() {
//     stateCount++;  // increment
//     console.log("I am a new state created and total states in the country are ", stateCount);
// }

newStateGovt();
newStateGovt();
newStateGovt();
// Chattisgarh();