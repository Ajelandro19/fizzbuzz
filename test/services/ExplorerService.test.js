const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
    test("Requerimiento 2: Calcular todos los explorers que tengan un stack", () => {
        const explorers = [{stacks: "javascript"}];
        const explorersInNode = ExplorerService.getExplorersInStack(explorers, "javascript");
        expect(explorersInNode.length).toBe(1);
    });

});
