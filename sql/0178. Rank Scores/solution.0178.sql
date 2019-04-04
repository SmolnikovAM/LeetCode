# Write your MySQL query statement below
select
  score
  ,(select 
        count(distinct s.score) + 1
    from
        scores s
    where scores.score < s.score
    ) as rank
from
    scores 
order by 2 asc
