create table if not exists games(
id int primary key generated always as identity,
game varchar(100),
result text
);

insert into games (game, result) values
('rock paper scissors', 'paper beat rock'),
('chess','A beats B - CHECKMATE'),
('mario kart','princess peach wins by 50 points'),
('escape room','team x escapes with 5mins remaining');

SELECT * From games;

SELECT GAME FROM games;

SELECT result, id FROM games;

SELECT games FROM games WHERE id = 1