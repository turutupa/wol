using {sap.capire.circles as my} from '../db/schema';

service CatalogService @(path : '/Circles') {
    entity Users @readonly     as projection on my.Users;
    entity Circles @readonly   as projection on my.Circles;
    entity Languages @readonly as projection on my.Languages;
    entity Interests @readonly as projection on my.Interests;
    entity Tasks @readonly     as projection on my.Tasks;
}

// service TestingService @(path : '/Testing') {
//     entity Users {
//         key ID   : Integer;
//             name : String;
//     }
// }
