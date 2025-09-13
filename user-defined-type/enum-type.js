// enum CardinalDirections {
//     North = 100,
//     East,
//     South,
//     West
// }
// // console.log(CardinalDirections.North);
// console.log(CardinalDirections);
// enum StatusCodes {
//   NotFound = 404,
//   Success = 200,
//   Accepted = 202,
//   BadRequest = 400
// }
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// console.log(StatusCodes);
console.log(StatusCodes.Accepted);
