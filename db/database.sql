/* Codigo sql para ir copiando */
CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(9) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee VALUES
    (1, 'Seba', 150000),
    (2, 'Raul', 170000),
    (3, 'Sofi', 100000),
    (4, 'Agus', 270000);