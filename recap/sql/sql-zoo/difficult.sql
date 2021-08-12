-- 1. The example query shows all goals scored in the Germany-Greece quarterfinal.
-- Instead show the name of all players who scored a goal against Germany.

SELECT DISTINCT player
FROM goal JOIN game ON matchid = id 
WHERE (team1='GER' OR team2='GER')
AND teamid <> 'GER'