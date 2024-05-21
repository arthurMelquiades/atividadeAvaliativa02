class ItemMenu {
    opcao: string;
    textoDaOpcao: string;

    constructor(opcao: string, textoDaOpcao: string) {
        this.opcao = opcao;
        this.textoDaOpcao = textoDaOpcao;
    }
}

class Menu {
    itens: ItemMenu[];

    constructor(itens: ItemMenu[]) {
        this.itens = itens;
    }

    imprimirMenu(): string {
        for (let item of this.itens) {
            console.log(`${item.opcao} - ${item.textoDaOpcao}`);
        }
        let opcaoSelecionada = prompt("Selecione uma opção: ") || "valor padrão";
        return opcaoSelecionada;
    }
}

// Exemplo de uso
let item1 = new ItemMenu("1", "Atacar");
let item2 = new ItemMenu("2", "Ataque especial");
let item3 = new ItemMenu("3", "Tomar poção de cura de HP")
let item4 = new ItemMenu("4", "Tomar poção que restaura MP")
let item5 = new ItemMenu("5", "Defender")
let menu = new Menu([item1, item2, item3, item4, item5]);
let opcaoSelecionada = menu.imprimirMenu();
console.log(`Você selecionou a opção: ${opcaoSelecionada}`);

class Coliseu{
    monstro:string;
}

class Monstro {
    hp: number;
    forcaDeAtaque: number;
    forcaDeDefesa: number

    constructor(hp: number, forcaDeAtaque: number, forcaDeDefesa: number) {
        this.hp = hp;
        this.forcaDeAtaque = forcaDeAtaque;
        this.forcaDeDefesa = forcaDeDefesa
    }

    receberDano(dano: number) {
        if (this.hp <= 0) {
            console.log('Monstro derrotado');
            return this.hp;
        }

        if (this.hp / this.hp <= 0.3) {
            dano /= 2;
            this.forcaDeAtaque *= 0.1;
            this.forcaDeDefesa *= 0.3;
        }

        if (this.forcaDeDefesa < dano) {
            this.hp -= dano;
        }

    }

    ataque(): number {
        return this.forcaDeAtaque;
    }
}


class Equipamento {
    nome: string;
    aumentoDeAtaque: number;
    aumentoDeDefesa: number;

    constructor(nome: string, aumentoDeAtaque: number, aumentoDeDefesa: number) {
        this.nome = nome;
        this.aumentoDeAtaque = aumentoDeAtaque;
        this.aumentoDeDefesa = aumentoDeDefesa;
    }
}

// Equipamentos para a cabeça
let coroaDeRei = new Equipamento("Coroa de Rei", 10, 20);
let tiaraDeElf = new Equipamento("Tiara de Elf", 5, 10);
let capaceteViking = new Equipamento("Capacete Viking", 15, 25);
let bandanaDeNinja = new Equipamento("Bandana de Ninja", 8, 15);

// Equipamentos para o corpo
let armaduraDePecoPeco = new Equipamento("Armadura de PecoPeco", 15, 30);
let vestidoDeFada = new Equipamento("Vestido de Fada", 10, 15);
let cotaDeCouro = new Equipamento("Cota de Couro", 20, 35);
let armaduraDePlatina = new Equipamento("Armadura de Platina", 25, 40);

// Equipamentos para a mão (Arma)
let machadoDeGuerra = new Equipamento("Machado de Guerra", 30, 0);
let arcoDeCaca = new Equipamento("Arco de Caça", 25, 5);
let varinhaMagica = new Equipamento("Varinha Mágica", 40, 10);
let cajadoDaVida = new Equipamento("Cajado da Vida", 35, 15);

class Lutador {
    hp: number;
    mp: number;
    ataqueDoJogador: number;
    equipamentoCabeca: Equipamento;
    equipamentoCorpo: Equipamento;
    equipamentoMao: Equipamento;

    constructor(hp: number, mp: number, ataque: number) {
        this.hp = hp;
        this.mp = mp;
        this.ataqueDoJogador = ataque;
    }

    equipar(equipamento: Equipamento, tipo: string): void {
        switch(tipo) {
            case 'cabeca':
                this.equipamentoCabeca = equipamento;
                break;
            case 'corpo':
                this.equipamentoCorpo = equipamento;
                break;
            case 'mao':
                this.equipamentoMao = equipamento;
                break;
            default:
                console.log('Tipo de equipamento inválido');
        }
    }

    exibirInfoLutador(): void {
        console.log(`HP: ${this.hp}, MP: ${this.mp}, Ataque: ${this.ataqueDoJogador}`);
        console.log(`Equipamento Cabeça: ${this.equipamentoCabeca ? this.equipamentoCabeca.nome : 'Nenhum'}`);
        console.log(`Equipamento Corpo: ${this.equipamentoCorpo ? this.equipamentoCorpo.nome : 'Nenhum'}`);
        console.log(`Equipamento Mão: ${this.equipamentoMao ? this.equipamentoMao.nome : 'Nenhum'}`);
    }

    ataque(): number {
        let ataqueTotal = this.ataqueDoJogador;
        if (this.equipamentoMao) {
            ataqueTotal += this.equipamentoMao.aumentoDeAtaque;
        }
        return ataqueTotal;
    }

    ataqueEspecial(): number {
        if (this.mp < 20) {
            console.log('MP Insuficiente');
            return 0;
        }

        this.mp -= 20;
        return this.ataque() * 1.5;
    }

    receberDano(dano: number): number {
        let defesaTotal = 0;
        if (this.equipamentoCabeca) {
            defesaTotal += this.equipamentoCabeca.aumentoDeDefesa;
        }
        if (this.equipamentoCorpo) {
            defesaTotal += this.equipamentoCorpo.aumentoDeDefesa;
        }
        this.hp -= Math.max(0, dano - defesaTotal);
        return this.hp;
    }
}
class Jogo {
    private imprimirMenu: () => void;
    private lutador: any;
    private coliseu: any;

    constructor(menu: string, lutador: any, coliseu: any, imprimirMenu: () => void) {
        this.imprimirMenu = imprimirMenu;
        this.lutador = lutador;
        this.coliseu = coliseu;
    }

    jogar() {
        // Exibir o menu
        this.imprimirMenu();
    
        // Executar o método de receberDano do monstro
        let dano = this.lutador.atacar(); // Supondo que o lutador tenha um método atacar()
        this.coliseu.receberDano(dano); // Supondo que o coliseu tenha um método receberDano()
    
        // Verificar se o HP do monstro chegou a 0
        if (this.coliseu.hp <= 0) {
            console.log("Parabéns! Você venceu a luta do Coliseu.");
            return;
        }
    
        // Se o HP do monstro não tiver chegado a 0. Chamar o metodo receberDano do lutador
        dano = this.coliseu.atacar(); // Supondo que o coliseu tenha um método atacar()
        this.lutador.receberDano(dano); // Supondo que o lutador tenha um método receberDano()
    
        // Verificar se o HP do lutador chegou a 0
        if (this.lutador.hp <= 0) {
            console.log("Você foi destroçado pelo monstro..");
            return;
        }
    
        // Caso os dois ainda tenham HP, exibir as informações do monstro e do lutador e o menu novamente
        console.log(this.lutador);
        console.log(this.coliseu);
        this.jogar();
    }
}