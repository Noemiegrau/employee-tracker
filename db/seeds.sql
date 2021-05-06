INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1, 1),
  ('Virginia', 'Woolf', 1, 1);

INSERT INTO role (title, salary, department_id)
VALUES
  ('Manager1 ', 2000, 1),
  ('Secretary1', 3000, 2);

INSERT INTO department (name)
VALUES
  ('RH'),
  ('Tech');