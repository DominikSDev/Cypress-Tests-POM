class SearchEngine {
    get getSearchEngineId() {
        return cy.get("#search_query_top")
    };

    isVisible() {
        this.getSearchEngineId.should("be.visible");
    }
    typeTextAndConfirm(){
        this.getSearchEngineId.type("dress{enter}");
    };
    checkResult(){
        this.getSearchEngineId.invoke("prop","value").then(values =>
            {
                expect(values).contain("dress")
            });

       
    }


};

export default new SearchEngine();