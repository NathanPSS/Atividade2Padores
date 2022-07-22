-- DropForeignKey
ALTER TABLE "pedidos" DROP CONSTRAINT "pedidos_produtoId_fkey";

-- CreateTable
CREATE TABLE "_pedidoToproduto" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_pedidoToproduto_AB_unique" ON "_pedidoToproduto"("A", "B");

-- CreateIndex
CREATE INDEX "_pedidoToproduto_B_index" ON "_pedidoToproduto"("B");

-- AddForeignKey
ALTER TABLE "_pedidoToproduto" ADD CONSTRAINT "_pedidoToproduto_A_fkey" FOREIGN KEY ("A") REFERENCES "pedidos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_pedidoToproduto" ADD CONSTRAINT "_pedidoToproduto_B_fkey" FOREIGN KEY ("B") REFERENCES "produtos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
