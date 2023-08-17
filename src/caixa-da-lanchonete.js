class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {

        const formaDePagamento = [
            "dinheiro",
            "debito",
            "credito",
        ];

        // const itens = [
        //     "cafe",
        //     "chantily",
        //     "suco",
        //     "sanduiche",
        //     "queijo",
        //     "salgado",
        //     "combo1",
        //     "combo2",
        // ];

        const cardapio = {
            cafe: {
                descricao: "Café",
                valor: 3
            },
            chantily: {
                descricao: "Chantily (extra do Café)",
                valor: 1.5
            },
            suco: {
                descricao: "Suco Natural",
                valor: 6.20
            },
            sanduiche: {
                descricao: "Sanduíche",
                valor: 6.50
            },
            queijo: {
                descricao: "Queijo (extra do Sanduíche)",
                valor: 2
            },
            salgado: {
                descricao: "Salgado",
                valor: 7.25
            },
            combo1: {
                descricao: "1 Suco 1 Sanduíche",
                valor: 9.50
            },
            combo2: {
                descricao: "1 Café e 1 Sanduíche",
                valor: 9.50
            },

        }

        // Cálculo do valor total dos itens com base no método de pagamento
        for (let i = 0; i < itens.length; i++) {
            var total = 0;
            const item = itens[i];
            if (item in cardapio) {
                const valorItem = cardapio[item].valor;

                if (metodoDePagamento === "dinheiro") {
                    total += valorItem * 0.95; // Aplicar desconto de 5% para pagamento em dinheiro
                } else if (metodoDePagamento === "credito") {
                    total += valorItem * 1.03; // Aplicar acréscimo de 3% para pagamento a crédito
                } else {
                    total += valorItem;
                }
            }
        }
        
        // if (metodoDePagamento === "dinheiro") {
        //     total *= 0.95; // Aplicar desconto de 5% para pagamento em dinheiro
        // } else if (metodoDePagamento === "credito") {
        //     total *= 1.03; // Aplicar acréscimo de 3% para pagamento a crédito
        // }

        return `R$ ${total.toFixed(2).replace('.', ',')}`;
    }

    verificarCarrinho(itens) {
        if (!itens.length) {
            return "Não há itens no carrinho de compra!";
        } return "Há itens no carrinho de compras!";
    }
}

export { CaixaDaLanchonete };
