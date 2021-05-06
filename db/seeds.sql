INSERT INTO department (department_name)
VALUES
  ('HR'),
  ('Tech'),
  ('Marketing'),
  ('Finance');
  
INSERT INTO role (title, salary, department_id)
VALUES
  ('Recruiter ', 2000, 1),
  ('Marketer', 3000, 2);
  ('Software Engineer', 4000, 3),
  ('CEO', 5000, 23);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1, 1),
  ('Virginia', 'Woolf', 2, 2),
  ('Unica', 'Zurn', 3, 1),
  ('Octavia', 'Butler', 4, 3);