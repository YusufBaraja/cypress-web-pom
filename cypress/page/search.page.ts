export class Search {

    visitSearchPage() {
        cy.visit('https://www.pinhome.id');
    }
    fillSearch(data: string) {
        cy.get('.sc-fad78441-1 > .ant-input').clear().type(data);
    }

}

