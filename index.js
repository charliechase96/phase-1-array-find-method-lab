// code your solution here
function superbowlWin(records) {

let found = records.find((record)=> record.result === "W")

if (found) {
    return (found.year)
    }
}
