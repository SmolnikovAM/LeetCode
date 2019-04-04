# Write your MySQL query statement below
select
 max(t1.salary) as SecondHighestSalary
from
(select
   salary    
 from
    Employee
 group by salary
 order by Salary desc
 limit 1,1
) t1 

