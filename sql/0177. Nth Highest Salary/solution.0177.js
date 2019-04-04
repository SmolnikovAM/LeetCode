CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  set N = N - 1;
  RETURN (
      # Write your MySQL query statement below.
      select
        max(t1.salary) as SecondHighestSalary
      from(
          select distinct
            salary    
          from
            Employee
          order by Salary desc
          limit N, 1
       ) t1 
 );
END
