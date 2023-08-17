class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        return this.verificarTaxas(metodoDePagamento, itens);
    }

    verificarCarrinho(itens) {
        if (!itens.length) {
            return "Não há itens no carrinho de compra!";
        } return "Há itens no carrinho de compras!";
    }

    verificarTaxas(metodoDePagamento, itens) {
        let total = 0;

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

        itens.forEach(item => {
            const desconto = 0.05;
            const acrescimo = 0.03;

            const [codigo, quantidade] = item.split(",");
            const { descricao, valor } = cardapio[codigo];

            const valorItem = quantidade * valor;
            const valorDesconto = valorItem * desconto;
            const valorAcrescimo = valorItem * acrescimo;

            if (metodoDePagamento === "dinheiro") {
                total += valorItem - valorDesconto; // Aplicar desconto de 5% para pagamento em dinheiro
            } else if (metodoDePagamento === "credito") {
                total += valorItem + valorAcrescimo; // Aplicar acréscimo de 3% para pagamento a crédito
            } else {
                total += valorItem;
            }

            
            console.log(total);
        });
        return `R$ ${total.toLocaleString('pt-br',{minimumFractionDigits: 2})}`;
    }
}

export { CaixaDaLanchonete };
