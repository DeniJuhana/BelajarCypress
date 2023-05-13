it('Create a user', () => {
    let body = {
        "id": 0,
        "username": Cypress.env('username'),
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "password": "string",
        "phone": "string",
        "userStatus": 0
    }
    console.log(body)
    cy.request('POST','/user', body).as('createUser');
    cy.get('@createUser').then(createUser => {
        expect(createUser.status).to.equal(200);
    });
});