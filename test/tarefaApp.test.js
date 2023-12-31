const TarefaApp = require("../tarefaApp")
describe('Adicionar e listar Tarefas', () => {
    test('Deveria adicionar três tarefas corretamente', () => {
        const meuAppDeTarefa = new TarefaApp();
        meuAppDeTarefa.adicionarTarefa("Estudar sobre teste de regressão");
        meuAppDeTarefa.adicionarTarefa("Ir para o estágio");
        meuAppDeTarefa.adicionarTarefa("Ir para a academia");
        expect(meuAppDeTarefa.tarefas.length).toBe(3);
        expect(meuAppDeTarefa.tarefas[0].id).toBe(1);
        expect(meuAppDeTarefa.tarefas[0].descricao).toBe('Estudar sobre teste de regressão');
        expect(meuAppDeTarefa.tarefas[0].finalizada).toBe(false);
        expect(meuAppDeTarefa.tarefas[1].id).toBe(2);
        expect(meuAppDeTarefa.tarefas[1].descricao).toBe('Ir para o estágio');
        expect(meuAppDeTarefa.tarefas[1].finalizada).toBe(false);

        expect(meuAppDeTarefa.tarefas[2].id).toBe(3);
        expect(meuAppDeTarefa.tarefas[2].descricao).toBe('Ir para a academia');
        expect(meuAppDeTarefa.tarefas[2].finalizada).toBe(false);
    });
    test('Deveria listar tarefas adicionadas corretamente', () => {
        const meuAppDeTarefa = new TarefaApp();
        meuAppDeTarefa.adicionarTarefa("Estudar sobre teste de regressão");
        meuAppDeTarefa.adicionarTarefa("Ir para o estágio");
        meuAppDeTarefa.adicionarTarefa("Ir para a academia");
        const consoleSpy = jest.spyOn(console, 'log');
        meuAppDeTarefa.listarTarefas();
        expect(consoleSpy).toHaveBeenCalledWith('Lista de Tarefas:');
        expect(consoleSpy).toHaveBeenCalledWith('Descrição: Estudar sobre teste de regressão, Status: Pendente');
        expect(consoleSpy).toHaveBeenCalledWith('Descrição: Ir para o estágio, Status: Pendente');
        expect(consoleSpy).toHaveBeenCalledWith('Descrição: Ir para a academia, Status: Pendente');

    });
});