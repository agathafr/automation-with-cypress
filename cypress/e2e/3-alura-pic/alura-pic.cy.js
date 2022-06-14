describe('User login and registration', () => {
    beforeEach(() => {
        cy.visit('alura-fotos.herokuapp.com');
    });

    it('Check validation messages', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    });

    it('Check invalid email message', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('agatha');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    });

    it('Check password message with less than 8 characters', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="password"]').type(1);
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    it('Check message must be lower case', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="userName"]').type('Agatha');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })
});