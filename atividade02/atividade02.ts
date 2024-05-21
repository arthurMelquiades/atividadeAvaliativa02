class ItemMenu {
    public opcao: number;
    public textoOpcao: string;

    constructor(opcao: number, textoOpcao: string) {
        this.opcao = opcao;
        this.textoOpcao = textoOpcao;
    }
}

class Menu {
    private itensMenu: ItemMenu[];

    constructor(itensMenu: ItemMenu[]) {
        this.itensMenu = itensMenu;
    }

    imprimirMenu(): number {
        const readline = require('readline-sync');
        this.itensMenu.forEach(item => {
            console.log(item.opcao + ". " + item.textoOpcao);
        });
        return parseInt(readline.question("Escolha uma opção: "));
    }
}

class Inventario {
    public itens: { item: Item, quantidade: number }[];
    public quantidadeMaximaItens: number;

    constructor(quantidadeMaximaItens: number) {
        this.itens = [];
        this.quantidadeMaximaItens = quantidadeMaximaItens;
    }

    adicionarItem(item: Item): void {
        if (this.itens.length >= this.quantidadeMaximaItens) {
            throw new Error("O inventário está cheio.");
        }

        let itemExistente = false;
        for (let itemInv of this.itens) {
            if (itemInv.item.nome === item.nome) {
                itemInv.quantidade++;
                itemExistente = true;
                break;
            }
        }

        if (!itemExistente) {
            this.itens.push({ item: item, quantidade: 1 });
        }
    }

    // Outros métodos necessários
}

class Personagem {
    public nome: string;
    public HP: number;
    public MP: number;
    public forca: number;
    public defesa: number;
    public inventario: Inventario;

    abrirInventario(): void {
        console.log("Inventário:");
        this.inventario.itens.forEach((itemInv, index) => {
            console.log((index + 1) + " - " + itemInv.item.nome + " (" + itemInv.quantidade + ")");
        });
        console.log("Total: " + this.inventario.itens.length + "/" + this.inventario.quantidadeMaximaItens);
    }

    // Outros métodos necessários
}

// Implementações restantes

// Criando itens do inventário
let espada = { nome: "Espada Longa", descricao: "Uma poderosa espada" };
let poção = { nome: "Poção de Cura", descricao: "Restaura HP e MP" };

// Criando menu
let opcoesMenu = [
    new ItemMenu(1, "Equipar Arma"),
    new ItemMenu(2, "Tomar Poção"),
    new ItemMenu(3, "Adicionar Arma ao Inventário"),
    new ItemMenu(4, "Adicionar Poção ao Inventário"),
    new ItemMenu(5, "Imprimir Info"),
    new ItemMenu(6, "Desequipar Arma"),
    new ItemMenu(0, "Sair")
];
let menu = new Menu(opcoesMenu);

// Criando personagem
let personagem = new Personagem();
personagem.nome = "Herói";
personagem.HP = 100;
personagem.MP = 50;
personagem.forca = 20;
personagem.defesa = 15;
personagem.inventario = new Inventario(20);

// Executando o menu
let sair = false;
while (!sair) {
    let escolha = menu.imprimirMenu();
    switch (escolha) {
        case 1:
            // Equipar Arma
            // Implementação conforme requisito
            break;
        case 2:
            // Tomar Poção
            // Implementação conforme requisito
            break;
        case 3:
            // Adicionar Arma ao Inventário
            // Implementação conforme requisito
            break;
        case 4:
            // Adicionar Poção ao Inventário
            // Implementação conforme requisito
            break;
        case 5:
            // Imprimir Info
            personagem.exibirInformacoes();
            break;
        case 6:
            // Desequipar Arma
            // Implementação conforme requisito
            break;
        case 0:
            sair = true;
            break;
        default:
            console.log("Opção inválida.");
    }
}
