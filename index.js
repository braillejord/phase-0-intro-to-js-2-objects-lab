const employee = {
    name: "Frank",
    streetAddress: "123 Eyes on Me",
};

function updateEmployeeWithKeyAndValue(Object, key, value) {
    return {
        ...Object,
    [key]: value,
    };
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key) {
    const employeeClone = {...employee};
    delete employeeClone[key];
    return employeeClone;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
};