-- 1. The example query shows all goals scored in the Germany-Greece quarterfinal.
-- Instead show the name of all players who scored a goal against Germany.

SELECT DISTINCT player
FROM goal JOIN game ON matchid = id 
WHERE (team1='GER' OR team2='GER')
AND teamid <> 'GER'

-- 2. Show teamname and the total number of goals scored.
SELECT teamname, COUNT(player) as goals_scored
FROM eteam JOIN goal ON eteam.id = goal.teamid
GROUP BY teamname

-- 3. Show the stadium and the number of goals scored in each stadium.
SELECT stadium, COUNT(player) as goals_scored
FROM game 
JOIN goal ON goal.matchid = game.id
GROUP BY stadium

-- 4. For every match involving 'POL', show the matchid, date and the number of goals scored.
SELECT matchid,mdate, COUNT(teamid) as goals_scored
FROM game JOIN goal ON goal.matchid = game.id 
WHERE (team1 = 'POL' OR team2 = 'POL')
GROUP BY matchid, mdate

-- 5. For every match where 'GER' scored, show matchid, match date and the number of goals scored by 'GER'
SELECT matchid, mdate, COUNT(player)
FROM game
JOIN goal ON goal.matchid = game.id
WHERE teamid = 'GER'
GROUP BY matchid, mdate

-- 6. List every match with the goals scored by each team as shown. This will use "CASE WHEN" which has not been explained in any previous exercises.
SELECT mdate, team1, score1, team2, score2
FROM game
JOIN goal ON game.id = goal.matchid
GROUP BY mdate

-- Find the continents where all countries have a population <= 25000000. Then find the names of the countries associated with these continents. Show name, continent and population.

-- Some countries have populations more than three times that of any of their neighbours (in the same continent). Give the countries and continents.