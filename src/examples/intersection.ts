/* eslint-disable @typescript-eslint/no-unused-vars */
import { z } from "zod";

const Person = z.object({
    name: z.string(),
  });
  
  const Employee = z.object({
    role: z.string(),
  });
  
  const EmployedPerson = z.intersection(Person, Employee);
  
  // equivalent to:
  //const EmployedPerson = Person.and(Employee);

  