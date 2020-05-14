using {
    Country,
    managed
} from '@sap/cds/common';

namespace sap.capire.circles;

entity Users {
    key ID        : Integer;
        name      : String;
        surname   : String;
        email     : String;
        birth     : Date;
        languages : Composition of many Languages
                        on languages.user = $self;
        interests : Association to many Interests
                        on interests.user = $self;
        circles   : Composition of many Circles
                        on circles;
        public    : Boolean;
        country   : Country;
}

entity Languages {
    key ID       : Integer;
        user     : Association to Users;
        language : String;
}

entity Interests {
    key ID       : Integer;
        user     : Association to Users;
        interest : String;
}

entity Circles {
    key ID           : Integer;
        participants : Association to many Users
                           on participants.circles;
        tasks        : Association to many Tasks
                           on tasks.circle = $self;
        creationDate : Date;
        endDate      : Date;
}

entity Tasks {
    key ID           : Integer;
        circle       : Association to Circles;
        description  : String;
        dueDate      : Date;
        creationDate : Date;
        completed    : Boolean;
}
