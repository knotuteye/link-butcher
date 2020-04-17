CREATE DATABASE ${db_cred.database};

USE ${db_cred.database};

CREATE TABLE ${db_cred.table}; (
    short varchar(6) NOT NULL,
    link varchar(255) NOT NULL,
    createdAt date NOT NULL,
    PRIMARY KEY (short),
);